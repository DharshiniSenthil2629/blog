// app/api/blogs/route.js
export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs, { status: 200 });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return NextResponse.json(
      { message: "Failed to fetch blogs", error: err.message },
      { status: 500 }
    );
  }
}
