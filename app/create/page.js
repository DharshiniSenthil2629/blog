"use client";
import { useEffect, useState } from "react";

export default function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setBlogs(data);
        } else {
          // fallback dummy blogs
          const dummyBlogs = [
            {
              _id: 1,
              title: "Classic Margherita Pizza",
              content: "A timeless Italian classic with tomato, mozzarella & basil.",
              image: "https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg",
            },
            {
              _id: 2,
              title: "Juicy Beef Burger",
              content: "Loaded with cheese, onions, and smoky sauce.",
              image: "https://kitchenatics.com/wp-content/uploads/2020/08/Two-homemade-beef-burgers-1.jpg",
            },
            {
              _id: 3,
              title: "Spaghetti Bolognese",
              content: "Hearty meat sauce over al dente pasta.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2FEm-L43OU36h8exife2sBQa3GAHADfnYg&s",
            },
            {
              _id: 4,
              title: "Sushi Platter",
              content: "Fresh nigiri, maki, and sashimi beautifully arranged.",
              image: "https://i.pinimg.com/736x/27/55/8c/27558cfc697c9d9a9a6e0aa664b5f4b5.jpg",
            },
            {
              _id: 5,
              title: "Chicken Biryani",
              content: "Spicy, fragrant rice with tender chicken pieces.",
              image: "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1.jpg",
            },
            {
              _id: 6,
              title: "Grilled Sandwich",
              content: "Cheesy, crisp, and packed with veggies.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1WRYQw_mj36yxvkFv76i8DTOqg8JZB3dbw&s",
            },
            {
              _id: 7,
              title: "Paneer Tikka",
              content: "Spiced paneer cubes grilled to perfection.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWTyWnrsil6wDcYddM3rs85yYfC6HFUH0-g&s",
            },
            {
              _id: 8,
              title: "Pancakes with Maple Syrup",
              content: "Fluffy, sweet, and buttery.",
              image: "https://www.giallozafferano.com/images/260-26079/Pancakes-with-maple-syrup_1200x800.jpg",
            },
            {
              _id: 9,
              title: "Ice Cream Sundae",
              content: "Creamy scoops topped with nuts & chocolate.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmoMj74C2e5v3q-zRoGhqf-W2gCiKsktQlKA&s",
            },
            {
              _id: 10,
              title: "Tandoori Chicken",
              content: "Charred outside, juicy inside – classic Indian tandoor.",
              image: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
            },
          ];

          setBlogs(dummyBlogs);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch blogs:", err);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>All Blogs</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              width="100%"
              height="200"
              style={{ objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
