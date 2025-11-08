"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StartInterviewPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    type: "technical",
    role: "",
    level: "junior",
    techstack: "",
    amount: 5,
    userid: "tempUser", // replace with actual logged-in user id if available
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/vapi/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setMessage("✅ Interview created successfully!");
        // Wait 1 second before redirecting for UX
        setTimeout(() => {
          router.push("/"); // 👈 Redirect to homepage
        }, 1000);
      } else {
        setMessage("❌ Error creating interview. Please try again.");
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-semibold mb-6">Create Your Interview</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="role"
          placeholder="Job Role (e.g. Frontend Developer)"
          value={formData.role}
          onChange={handleChange}
          className="p-3 border rounded-lg font-bold text-lg"
          required
        />

        <input
          type="text"
          name="techstack"
          placeholder="Tech Stack (e.g. React, Node.js)"
          value={formData.techstack}
          onChange={handleChange}
          className="p-3 border rounded-lg font-bold text-lg"
          required
        />

        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="p-3 border rounded-lg bg-black text-white font-bold text-lg"
        >
          <option value="junior">Junior</option>
          <option value="mid-level">Mid-Level</option>
          <option value="senior">Senior</option>
        </select>

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="p-3 border rounded-lg bg-black text-white font-bold text-lg"
        >
          <option value="technical">Technical</option>
          <option value="behavioral">Behavioral</option>
          <option value="mix">Mix of Tech and HR</option>
        </select>

        <input
          type="number"
          name="amount"
          placeholder="Number of Questions"
          value={formData.amount}
          onChange={handleChange}
          className="p-3 border rounded-lg font-bold text-lg"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-lg"
        >
          {loading ? "Generating..." : "Generate Interview"}
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}
