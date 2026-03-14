# ReqSense AI

**Turn stakeholder transcripts into structured product backlogs in seconds.**

ReqSense AI is an intelligent requirements engineering tool that uses generative AI to parse raw stakeholder conversations, interviews, and meeting transcripts — automatically extracting, categorizing, and prioritizing software requirements into a clean, actionable product backlog.

---

## Features

- **Transcript Parsing** — Upload raw meeting notes, interview transcripts, or stakeholder emails and get structured requirements extracted automatically.
- **Requirement Classification** — AI-powered categorization into functional requirements, non-functional requirements, constraints, and assumptions.
- **Priority Scoring** — Automatic MoSCoW prioritization (Must, Should, Could, Won't) based on stakeholder language cues and context.
- **Backlog Generation** — Export a ready-to-use product backlog in JSON, CSV, or Markdown format.
- **Conflict Detection** — Identify contradictory or overlapping requirements across multiple stakeholder inputs.
- **Traceability Matrix** — Map each requirement back to its source transcript and speaker for full auditability.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React, Tailwind CSS |
| **Backend** | FastAPI (Python) |
| **AI Engine** | Claude API (Anthropic) |
| **Database** | PostgreSQL |
| **Task Queue** | Celery + Redis |
| **Deployment** | Docker, Docker Compose |

---

## Run Locally

### Prerequisites

- Python 3.10+
- Node.js 18+
- An Anthropic API key

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/reqsense-ai.git
cd reqsense-ai

# Install backend dependencies
pip install -r requirements.txt

# Set your API key
export ANTHROPIC_API_KEY="your-key-here"

# Start the backend server
uvicorn app.main:app --reload --port 8000
```

### Test the API

```bash
curl -X POST http://localhost:8000/api/parse \
  -H "Content-Type: application/json" \
  -d '{"transcript": "The user should be able to log in with email and password. We also need SSO support."}'
```

### Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Screenshots

> Replace these placeholders with actual screenshots of your application.

![ReqSense AI - Dashboard](screenshots/dashboard.png)

![ReqSense AI - Backlog View](screenshots/backlog-view.png)

---

## License

MIT
