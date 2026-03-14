import { useState } from "react";
import TranscriptInput from "./components/TranscriptInput";
import BacklogTable from "./components/BacklogTable";

export default function App() {
  const [backlog, setBacklog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleParse = async (transcript) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcript }),
      });
      if (!res.ok) throw new Error("Failed to parse transcript");
      const data = await res.json();
      setBacklog(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-6 px-8 shadow">
        <h1 className="text-3xl font-bold">ReqSense AI</h1>
        <p className="text-indigo-200 mt-1">
          Turn stakeholder transcripts into structured product backlogs
        </p>
      </header>

      <main className="max-w-5xl mx-auto py-10 px-4 space-y-8">
        <TranscriptInput onSubmit={handleParse} loading={loading} />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
            {error}
          </div>
        )}

        {backlog && <BacklogTable backlog={backlog} />}
      </main>
    </div>
  );
}
