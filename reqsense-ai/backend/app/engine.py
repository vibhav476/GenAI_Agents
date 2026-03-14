import json
import os

import anthropic

from app.models import BacklogResponse

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

SYSTEM_PROMPT = """You are ReqSense AI, an expert requirements engineer.
Given a stakeholder transcript, extract structured software requirements.

For each requirement, provide:
- id: sequential integer
- title: short requirement title
- description: detailed description
- type: one of "functional", "non-functional", "constraint", "assumption"
- priority: one of "Must", "Should", "Could", "Won't" (MoSCoW)
- source_speaker: speaker name if identifiable, else null
- source_excerpt: relevant quote from the transcript

Also provide:
- summary: 1-2 sentence summary of the transcript
- conflicts: list of any contradictory or overlapping requirements found

Respond with valid JSON matching this schema:
{
  "requirements": [...],
  "summary": "...",
  "conflicts": ["..."]
}"""


def parse_transcript(transcript: str) -> BacklogResponse:
    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=4096,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": transcript}],
    )

    result = json.loads(message.content[0].text)
    return BacklogResponse(**result)
