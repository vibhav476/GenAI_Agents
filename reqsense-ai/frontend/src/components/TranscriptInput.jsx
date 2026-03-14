import { useState } from "react";

export default function TranscriptInput({ onSubmit, loading }) {
  const [text, setText] = useState("");

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <label className="block text-lg font-semibold text-gray-700 mb-2">
        Paste your stakeholder transcript
      </label>
      <textarea
        className="w-full h-48 border border-gray-300 rounded-lg p-4 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="e.g. 'The user should be able to log in with email and password. We also need SSO support...'"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        onClick={() => onSubmit(text)}
        disabled={loading || !text.trim()}
      >
        {loading ? "Analyzing..." : "Parse Transcript"}
      </button>
    </div>
  );
}
