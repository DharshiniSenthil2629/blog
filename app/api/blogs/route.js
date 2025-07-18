// app/api/blogs/route.js

import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Blog from "@/models/Blog";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newBlog = new Blog(body);
    const saved = await newBlog.save();
    return NextResponse.json(saved, { status: 201 });
  } catch (err) {
    console.error("Error creating blog:", err);
    return NextResponse.json({ message: "Failed to create blog" }, { status: 500 });
  }
}
export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs, { status: 200 });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return NextResponse.json({ message: "Failed to fetch blogs" }, { status: 500 });
  }
}
