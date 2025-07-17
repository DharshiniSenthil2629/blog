import { connectToDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  await connectToDB();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return Response.json(blogs);
}

export async function POST(req) {
  await connectToDB();
  const { title, content, image } = await req.json();
  const newBlog = new Blog({ title, content, image });
  await newBlog.save();
  return Response.json({ status: "success" });
}
