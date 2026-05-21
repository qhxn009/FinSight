import os
from dotenv import load_dotenv
load_dotenv()
class Settings:
    GLM_API_KEY: str = os.getenv("GLM_API_KEY", "")
    GFZQ_TOKEN: str = os.getenv("GFZQ_TOKEN", "")
    TAVILY_API_KEY: str = os.getenv("TAVILY_API_KEY", "")
    def validate(self):
        missing = []
        if not self.GLM_API_KEY:
            missing.append("GLM_API_KEY")
        if not self.GFZQ_TOKEN:
            missing.append("GFZQ_TOKEN")
        if missing:
            raise ValueError(f"Missing required environment variables: {', '.join(missing)}")
settings = Settings()
