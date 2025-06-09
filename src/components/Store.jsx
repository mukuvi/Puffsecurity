import React, { useRef } from "react";
import { FaShoppingCart, FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import storeData from "./storeData";

const Store = () => {
  const storeRef = useRef(null);

  const scrollLeft = () => {
    if (storeRef.current) {
      storeRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (storeRef.current) {
      storeRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">
            Puff Store
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Support us by purchasing from our exclusive collection! 
            Every purchase helps fund our open source projects and community initiatives.
          </p>
        </div>

        {/* Store Navigation */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button
              onClick={scrollLeft}
              className="glass-effect p-3 rounded-full text-gray-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollRight}
              className="glass-effect p-3 rounded-full text-gray-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300"
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="text-sm text-gray-400">
            Use arrow keys or buttons to navigate
          </div>
        </div>

        {/* Store Items */}
        <div
          ref={storeRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {storeData.map((item, index) => (
            <div
              key={item.id}
              className="glass-effect rounded-2xl p-6 min-w-[300px] max-w-[300px] card-hover group animate-fade-in-up relative overflow-hidden"
              style={{ 
                animationDelay: `${0.4 + index * 0.1}s`,
                scrollSnapAlign: 'start'
              }}
            >
              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {item.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                  <span className="text-gray-400 text-sm ml-2">(4.8)</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-400">
                    ${item.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ${Math.round(item.price * 1.3)}
                  </span>
                </div>
              </div>

              {/* Purchase Button */}
              <button className="btn-primary w-full flex items-center justify-center space-x-2 group-hover:shadow-xl group-hover:shadow-primary-500/30">
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Store Info */}
        <div className="mt-16 glass-effect rounded-2xl p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-bold gradient-text mb-4">
            Support Open Source
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Every purchase directly supports our open source initiatives, community events, 
            and educational resources. Join us in building a better tech ecosystem for everyone.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center space-x-1">
              <span>✓</span>
              <span>Free Shipping</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>✓</span>
              <span>30-Day Returns</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>✓</span>
              <span>Secure Checkout</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;