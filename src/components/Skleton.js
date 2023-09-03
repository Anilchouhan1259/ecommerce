const Skleton = () => {
  return (
    <div className="px-9">
      <div className="grid grid-cols-4 gap-x-6 mt-10">
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
