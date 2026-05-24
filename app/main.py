from pathlib import Path
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.api.chat import router as chat_router
from app.core.config import settings
app = FastAPI(title="FinSight", description="AI 金融对话分析助手")
settings.validate()
app.include_router(chat_router)
STATIC_DIR = Path(__file__).resolve().parent / "static"
@app.get("/")
async def root():
    return FileResponse(STATIC_DIR / "index.html")
@app.get("/favicon.ico")
async def favicon():
    return FileResponse(STATIC_DIR / "favicon.ico")
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
