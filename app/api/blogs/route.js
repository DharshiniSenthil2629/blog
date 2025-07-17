import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import connectDB from "@/utils/db";

export async function POST(req) {
  const body = await req.json();
  await connectDB();
  const newBlog = new Blog(body);
  const saved = await newBlog.save();
  return NextResponse.json(saved);
}
