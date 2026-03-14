const priorityColors = {
  Must: "bg-red-100 text-red-800",
  Should: "bg-yellow-100 text-yellow-800",
  Could: "bg-blue-100 text-blue-800",
  "Won't": "bg-gray-100 text-gray-800",
};

export default function BacklogTable({ backlog }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Summary</h2>
        <p className="text-gray-600">{backlog.summary}</p>
      </div>

      {backlog.conflicts.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h3 className="font-semibold text-amber-800 mb-1">Conflicts Detected</h3>
          <ul className="list-disc list-inside text-amber-700 text-sm">
            {backlog.conflicts.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Priority</th>
              <th className="px-4 py-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {backlog.requirements.map((req) => (
              <tr key={req.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-mono">{req.id}</td>
                <td className="px-4 py-3 font-medium">{req.title}</td>
                <td className="px-4 py-3 capitalize">{req.type}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[req.priority] || ""}`}>
                    {req.priority}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{req.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
