
"use client";
import { useState, useEffect } from "react";
import type { IBooking } from "@/app/models/Booking";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [analytics, setAnalytics] = useState<{
    totalViews: string;
    uniqueViews: number;
    viewsToday: string;
  } | null>(null);
  const [forms, setForms] = useState<IBooking[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (res.ok) {
      setAuthed(true);
      setStatus(null);
    } else {
      setStatus(data.error || "Access denied");
    }
    setLoading(false);
  }

  useEffect(() => {
    if (!authed) return;
    // Fetch analytics
    fetch("/api/website/analytics")
      .then(r => r.json())
      .then((data) => {
        setAnalytics({
          totalViews: data.totalViews !== undefined ? String(data.totalViews) : '0',
          uniqueViews: typeof data.uniqueViews === 'number' ? data.uniqueViews : Number(data.uniqueViews || 0),
          viewsToday: data.viewsToday !== undefined ? String(data.viewsToday) : '0',
        });
      });
    // Fetch forms (bookings/contacts) with API key
    fetch("/api/bookings", {
      headers: { 'x-api-key': password }
    })
      .then(r => r.json())
      .then(setForms);
  }, [authed, password]);

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this form entry?")) return;
    setDeleting(id);
    const res = await fetch(`/api/bookings?id=${id}`, {
      method: "DELETE",
      headers: { 'x-api-key': password }
    });
    if (res.ok) {
      setForms((forms: IBooking[]) => forms.filter((f: IBooking) => f._id !== id));
    } else {
      alert("Failed to delete");
    }
    setDeleting(null);
  }

  if (!authed) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow bg-white">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            placeholder="Admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>
        {status && <div className="mt-4 text-center text-red-600">{status}</div>}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 border rounded shadow bg-white">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Website Analytics</h2>
        {analytics ? (
          <ul className="list-disc ml-6">
            <li>Total Views: {analytics.totalViews}</li>
            <li>Unique Views: {analytics.uniqueViews}</li>
            <li>Views Today: {analytics.viewsToday}</li>
          </ul>
        ) : (
          <div>Loading analytics...</div>
        )}
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Forms (Bookings & Contacts)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Message</th>
                <th className="p-2 border">Quote</th>
                <th className="p-2 border">Event Type</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {forms.length === 0 && (
                <tr><td colSpan={8} className="text-center p-4">No forms found.</td></tr>
              )}
              {(Array.isArray(forms) ? forms : []).map((form: IBooking) => (
                <tr key={String(form._id)}>
                  <td className="p-2 border">{form.type}</td>
                  <td className="p-2 border">{form.name}</td>
                  <td className="p-2 border">{form.email}</td>
                  <td className="p-2 border">{form.date ? new Date(form.date).toLocaleString() : ''}</td>
                  <td className="p-2 border">{form.message}</td>
                  <td className="p-2 border">{form.quote}</td>
                  <td className="p-2 border">{form.eventType}</td>
                  <td className="p-2 border">
                    <button
                      className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                    onClick={() => handleDelete(String(form._id))}
                    disabled={deleting === String(form._id)}
                    >
                      {deleting === form._id ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
