function Banner() {
    return (
      <section
        className="relative w-full h-[500px] bg-cover bg-center flex flex-col items-center text-center text-white"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }} // Replace with actual image path
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
  
        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="text-lg text-gray-200 mt-4">
            Browse through our diverse range of meticulously crafted garments, designed
            to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md">
            Shop Now
          </button>
        </div>
  
        {/* Stats */}
        <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-6 text-center">
          <div className="text-lg">
            <span className="font-bold text-2xl">200+</span>
            <p className="text-gray-200">International Brands</p>
          </div>
          <div className="text-lg">
            <span className="font-bold text-2xl">2,000+</span>
            <p className="text-gray-200">High-Quality Products</p>
          </div>
          <div className="text-lg">
            <span className="font-bold text-2xl">30,000+</span>
            <p className="text-gray-200">Happy Customers</p>
          </div>
        </div>
  
        {/* Brand Logos */}
        <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-8">
          <span className="font-bold text-xl">VERSACE</span>
          <span className="font-bold text-xl">ZARA</span>
          <span className="font-bold text-xl">GUCCI</span>
          <span className="font-bold text-xl">PRADA</span>
          <span className="font-bold text-xl">Calvin Klein</span>
        </div>
      </section>
    );
  }
  
  export default Banner;
  