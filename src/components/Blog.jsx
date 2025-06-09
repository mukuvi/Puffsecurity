import React, { useState } from "react";
import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";
import blogs from "./blogdata";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleExpand = (index) => {
    setExpandedBlogIndex(expandedBlogIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">
            Latest Blogs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Insights, tutorials, and thoughts from our community of developers, 
            security experts, and data scientists.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentBlogs.map((blog, index) => (
            <article
              key={index}
              className="glass-effect rounded-2xl p-6 card-hover animate-fade-in-up group"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Blog Header */}
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <FaCalendar className="text-xs" />
                    <span>Dec 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaUser className="text-xs" />
                    <span>Puff Team</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {blog.title}
                </h3>
              </div>

              {/* Blog Content */}
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                
                {expandedBlogIndex === index && (
                  <div className="text-gray-300 leading-relaxed animate-fade-in-up">
                    <p>{blog.content}</p>
                  </div>
                )}
              </div>

              {/* Read More Button */}
              <button
                onClick={() => handleExpand(index)}
                className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 font-medium"
              >
                <span>{expandedBlogIndex === index ? "Read Less" : "Read More"}</span>
                <FaArrowRight className={`text-sm transition-transform duration-300 ${
                  expandedBlogIndex === index ? "rotate-90" : ""
                }`} />
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === index + 1
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "glass-effect text-gray-300 hover:text-primary-400 hover:bg-primary-500/10"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;