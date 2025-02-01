import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

// Dummy Blog Data
const blogPosts = [
  {
    id: 1,
    title: "The Mysteries of Black Holes",
    date: "January 25, 2025",
    excerpt: "Explore the enigmatic nature of black holes and their role in the universe.",
    image: "/assets/blackhole.jpg",
  },
  {
    id: 2,
    title: "Upcoming Astronomical Events in 2025",
    date: "February 10, 2025",
    excerpt: "Don't miss these breathtaking cosmic events happening this year!",
    image: "/assets/astronomy2025.jpg",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Astronomy Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2>{post.title}</h2>
            <p className="blog-date">📅 {post.date}</p>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
