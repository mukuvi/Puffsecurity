import React, { useState } from "react";
import { FaCalendar, FaUser, FaClock, FaArrowRight, FaSearch, FaTags } from "react-icons/fa";
import blogs from "./blogdata";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const blogsPerPage = 6;
  
  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const categories = ["all", ...new Set(blogs.map(blog => blog.category))];

  const handleExpand = (index) => {
    setExpandedBlogIndex(expandedBlogIndex === index ? null : index);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">
            Tech Insights & Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover the latest trends, tutorials and insights from the world of technology, cybersecurity and software development.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="glass-effect rounded-2xl p-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <FaTags className="text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentBlogs.map((blog, index) => (
            <article
              key={index}
              className="glass-effect rounded-2xl overflow-hidden card-hover animate-fade-in-up group"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              {/* Blog Image */}
              <div className="h-48 bg-gradient-to-br from-primary-500 to-secondary-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                  <div className="flex items-center">
                    <FaUser className="mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <FaCalendar className="mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    {blog.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Expanded Content */}
                {expandedBlogIndex === index && (
                  <div className="mb-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mb-4"></div>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {blog.content}
                    </p>
                  </div>
                )}

                {/* Read More Button */}
                <button
                  onClick={() => handleExpand(index)}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300 group/btn"
                >
                  {expandedBlogIndex === index ? "Read Less" : "Read More"}
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl text-gray-600 mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === index + 1
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                    : "bg-dark-700 text-gray-300 hover:bg-primary-500/20 hover:text-primary-400"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="glass-effect rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold gradient-text mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest tech insights, tutorials, and community updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
            />
            <button className="btn-primary px-6 py-3 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;