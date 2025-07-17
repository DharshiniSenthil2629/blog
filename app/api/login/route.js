export async function POST(req) {
  const { email, password } = await req.json();

  // Dummy check (replace with DB logic)
  if (email === "admin@blog.com" && password === "admin123") {
    return Response.json({ success: true });
  } else {
    return Response.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }
}
