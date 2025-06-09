import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaStar, FaFilter } from "react-icons/fa";
import storeData from "./storeData";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const categories = ["all", ...new Set(storeData.map(item => item.category))];

  const filteredItems = storeData
    .filter(item => selectedCategory === "all" || item.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const toggleWishlist = (item) => {
    if (wishlist.find(w => w.id === item.id)) {
      setWishlist(wishlist.filter(w => w.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  const isInWishlist = (item) => wishlist.find(w => w.id === item.id);

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
            Puff Store
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Support our community by purchasing exclusive Puffadders merchandise. Every purchase helps us grow and create better resources for developers.
          </p>
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="glass-effect rounded-2xl p-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaShoppingCart className="text-primary-400" />
                <span className="text-white font-medium">{cart.length} items in cart</span>
              </div>
              <div className="text-primary-400 font-bold">
                Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
              </div>
            </div>
          </div>
        )}

        {/* Filters and Sorting */}
        <div className="glass-effect rounded-2xl p-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="glass-effect rounded-2xl overflow-hidden card-hover animate-fade-in-up group"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-500 to-secondary-500 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(item)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                    isInWishlist(item)
                      ? "bg-red-500 text-white"
                      : "bg-white/20 text-white hover:bg-red-500"
                  }`}
                >
                  <FaHeart />
                </button>

                {/* Sale Badge */}
                {item.onSale && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    SALE
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-primary-500/20 text-primary-300 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xs ${
                          i < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">({item.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {item.name}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-400">
                      ${item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 group/btn"
                  >
                    <FaShoppingCart />
                    <span className="hidden sm:inline">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Found */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl text-gray-600 mb-4">🛍️</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or check back later for new items.</p>
          </div>
        )}

        {/* Featured Section */}
        <div className="glass-effect rounded-2xl p-8 mt-16">
          <h2 className="text-3xl font-bold gradient-text mb-6 text-center">Why Shop With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-bold text-white mb-2">Fast Shipping</h3>
              <p className="text-gray-300 text-sm">Free worldwide shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-lg font-bold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-300 text-sm">High-quality materials and printing for lasting wear</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-white mb-2">Support Community</h3>
              <p className="text-gray-300 text-sm">Every purchase supports our open source initiatives</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass-effect rounded-2xl p-8 mt-8 text-center">
          <h2 className="text-2xl font-bold gradient-text mb-4">Get Exclusive Offers</h2>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter for early access to new products and special discounts.
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

export default Store;