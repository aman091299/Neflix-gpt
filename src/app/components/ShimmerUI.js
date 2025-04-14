

const ShimmerUI = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 m-10 p-5">
      {[...Array(10)].map((_, index) => (
        <div 
          key={index} 
          className="w-52 h-64 rounded-lg bg-gray-100 relative"
        >
          {/* Shimmer animation */}
          <div className="absolute w-52 h-64  bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;