// app/blogs/page.js
"use client";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>All Blogs</h1>
      {loading && <p>Loading...</p>}
      {blogs.length === 0 && !loading && <p>No blogs found.</p>}
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id} style={{ marginBottom: "2rem" }}>
            <h2>{blog.title}</h2>
            <img src={blog.image} alt={blog.title} width="300" />
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
