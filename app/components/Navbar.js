// /components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#f4f4f4", padding: "10px" }}>
      <Link href="/home" style={{ marginRight: "10px" }}>Home</Link>
      <Link href="/create" style={{ marginRight: "10px" }}>Create</Link>
      <Link href="/blogs">Blogs</Link>
    </nav>
  );
}
