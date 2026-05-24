from fastapi import APIRouter, Request
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import Optional
from app.core.glm_client import stream_finance_chat, stream_vision_chat, generate_image, generate_video
router = APIRouter(prefix="/api/chat", tags=["chat"])
class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: list[ChatMessage]
    mode: str = "finance"
    image_url: Optional[str] = None
    thinking: bool = False
    web_search: bool = False

class ImageGenerateRequest(BaseModel):
    prompt: str
    size: str = "1024x1024"

class VideoGenerateRequest(BaseModel):
    prompt: str
    quality: str = "speed"
    with_audio: bool = False
    size: str = "1920x1080"
    fps: int = 30
    image_url: Optional[str] = None

@router.post("/image/generate")
async def image_generate(request: ImageGenerateRequest):
    result = generate_image(prompt=request.prompt, size=request.size)
    if "error" in result:
        return {"error": result["error"]}
    return {"url": result["url"]}

@router.post("/video/generate")
async def video_generate(request: VideoGenerateRequest):
    result = generate_video(
        prompt=request.prompt, quality=request.quality,
        with_audio=request.with_audio, size=request.size,
        fps=request.fps, image_url=request.image_url
    )
    if "error" in result:
        return {"error": result["error"]}
    return {"url": result["url"], "cover_url": result.get("cover_url", "")}

@router.post("/stream")
async def chat_stream(request: ChatRequest):
    messages = [{"role": m.role, "content": m.content} for m in request.messages]
    if request.mode == "vision":
        generator = stream_vision_chat(messages, image_url=request.image_url, web_search=request.web_search)
    else:
        generator = stream_finance_chat(messages, thinking_enabled=request.thinking, web_search=request.web_search)
    return StreamingResponse(
        generator,
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )
