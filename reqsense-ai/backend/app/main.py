from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import parse, health

app = FastAPI(
    title="ReqSense AI",
    description="Turn stakeholder transcripts into structured product backlogs",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(parse.router, prefix="/api")
