from fastapi import APIRouter, Request
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import Optional
from app.core.glm_client import stream_finance_chat, stream_vision_chat
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
