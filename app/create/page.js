"use client";
import { useState } from "react";

export default function CreateBlog() {
  const [form, setForm] = useState({ title: "", content: "", image: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("Blog created successfully!");
    } else {
      alert("Failed to create blog!");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        />
        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
