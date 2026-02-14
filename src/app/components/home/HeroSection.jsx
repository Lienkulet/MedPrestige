'use client';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
      {/* Decorative Images on Left */}
      <div className="absolute -left-20 top-20 w-32 h-32 opacity-50 bg-blue-200 rounded-lg"></div>
      <div className="absolute -left-16 bottom-32 w-28 h-28 opacity-50 bg-purple-200 rounded-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Homepage Label */}
        <div className="mb-8">
          <span className="text-sm text-gray-500">Homepage</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Advanced Healthcare Made Personal
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing
            </p>
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
                Book appointment
              </button>
            </div>
          </div>

          {/* Right Column - Image Collage */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Main Grid Container */}
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Left Column Images */}
              <div className="space-y-4">
                <div className="relative h-[240px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Doctor consultation</span>
                </div>
                <div className="relative h-[240px] rounded-lg overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Dental care</span>
                </div>
              </div>

              {/* Right Column Images */}
              <div className="space-y-4 pt-8">
                <div className="relative h-[180px] rounded-lg overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Patient consultation</span>
                </div>
                <div className="relative h-[280px] rounded-lg overflow-hidden bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Medical team</span>
                </div>
              </div>
            </div>

            {/* Stat Cards Overlay */}
            {/* Client Rating Card - Top Right */}
            <div className="absolute top-4 right-4 bg-gradient-to-br from-purple-100 to-blue-100 backdrop-blur-sm bg-opacity-90 px-4 py-3 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div>
                  <p className="text-xl font-bold text-gray-900">4.9/5</p>
                  <p className="text-xs text-gray-600">Client Rating</p>
                </div>
              </div>
            </div>

            {/* Customers Card - Bottom Center */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-blue-600 backdrop-blur-sm bg-opacity-95 px-6 py-3 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-white">16800+</p>
              <p className="text-sm text-blue-100">Customers</p>
            </div>

            {/* Professionals Card - Bottom Right */}
            <div className="absolute bottom-16 right-0 bg-blue-600 backdrop-blur-sm bg-opacity-95 px-6 py-3 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-white">306</p>
              <p className="text-sm text-blue-100">Professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Images on Right (partially off-screen) */}
      <div className="absolute -right-20 top-40 w-32 h-32 opacity-50 bg-green-200 rounded-lg"></div>
    </section>
  );
};

export default HeroSection;
