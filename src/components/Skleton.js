const Skleton = () => {
  return (
    <div className="px-9">
      <div className="flex flex-col md:grid md:grid-cols-4 md:gap-x-6 mt-10 ">
        <div className="overflow-hidden relative h-80 bg-gray-200">
          <div className="absolute animate-shimmer inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 -translate-x-full"></div>
        </div>
        <div className="overflow-hidden relative h-80 bg-gray-200">
          <div className="absolute animate-shimmer inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 -translate-x-full"></div>
        </div>
        <div className="overflow-hidden relative h-80 bg-gray-200">
          <div className="absolute animate-shimmer inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 -translate-x-full"></div>
        </div>
        <div className="overflow-hidden relative h-80 bg-gray-200">
          <div className="absolute animate-shimmer inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 -translate-x-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Skleton;
