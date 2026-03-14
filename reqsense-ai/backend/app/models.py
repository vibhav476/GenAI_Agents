from pydantic import BaseModel


class TranscriptRequest(BaseModel):
    transcript: str


class Requirement(BaseModel):
    id: int
    title: str
    description: str
    type: str  # functional, non-functional, constraint, assumption
    priority: str  # Must, Should, Could, Won't
    source_speaker: str | None = None
    source_excerpt: str | None = None


class BacklogResponse(BaseModel):
    requirements: list[Requirement]
    summary: str
    conflicts: list[str]
