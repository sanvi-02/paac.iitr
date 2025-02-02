import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">ASTRONOMY BLOGS</h1>
        <div className="social-icons">
           <a href="#twitter" className="icon">
            <FaTwitter />
          </a>
          <a href="#facebook" className="icon">
            <FaFacebookF />
          </a>
          <a href="#instagram" className="icon">
            <FaInstagram />
          </a>
          <a href="#email" className="icon">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
};
const blogPosts = [
  {
    id: 1,
    title: "The Mysteries of Black Holes",
    date: "January 25, 2025",
    excerpt:
      "Explore the enigmatic nature of black holes and their role in the universe.",
  },
  {
    id: 2,
    title: "Upcoming Astronomical Events in 2025",
    date: "February 2, 2025",
    excerpt:
      "Don't miss these breathtaking cosmic events happening this year!",
  },
  {
    id: 3,
    title: "The Lunar Dispatch",
    date: "February 1, 2025",
    excerpt:
      "A monthly newsletter that provides the latest news and insights on the Moon, published on the full moon night. It’s ideal for moon enthusiasts​",
  },
];
const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h2>{post.title}</h2>
            <p className="blog-date">📅 {post.date}</p>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const BlogPage = () => {
  return (
    <div>
      <Header />
      <Blog />
    </div>
  );
};
export default BlogPage;
