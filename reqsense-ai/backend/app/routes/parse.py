from fastapi import APIRouter, HTTPException

from app.models import TranscriptRequest, BacklogResponse
from app.engine import parse_transcript

router = APIRouter()


@router.post("/parse", response_model=BacklogResponse)
def parse(request: TranscriptRequest):
    if not request.transcript.strip():
        raise HTTPException(status_code=400, detail="Transcript cannot be empty")
    return parse_transcript(request.transcript)
