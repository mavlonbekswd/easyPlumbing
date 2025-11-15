import { useEffect, useState } from "react";

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Remove any existing widget before reloading
    const oldWidget = document.querySelector('script[src="https://widget.reviewability.com/js/widgetAdv.min.js"]');
    if (oldWidget) oldWidget.remove();

    // Create a new script element
    const script = document.createElement("script");
    script.src = "https://widget.reviewability.com/js/widgetAdv.min.js";
    script.async = true;

    // Handle script loading
    script.onload = () => {
      setIsLoading(false);
    };

    script.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };

    // Append to the div
    const widgetDiv = document.getElementById("revu-widget");
    if (widgetDiv) {
      widgetDiv.appendChild(script);
    }

    // Cleanup
    return () => {
      if (oldWidget) oldWidget.remove();
    };
  }, []);

  return (
    <section id="reviews" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
          <div className="mt-4 flex justify-center items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-semibold">5.0</span>
          </div>
        </div>

        {/* Widget Container */}
        <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-full -translate-x-10 -translate-y-10 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-100 rounded-full translate-x-16 translate-y-16 opacity-50"></div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
              </div>
              <p className="mt-4 text-gray-600 font-medium">Loading reviews...</p>
            </div>
          )}

          {/* Error State */}
          {hasError && !isLoading && (
            <div className="text-center py-20">
              <svg
                className="w-16 h-16 text-red-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-700 font-semibold mb-2">
                Unable to load reviews
              </p>
              <p className="text-gray-500 text-sm">
                Please try refreshing the page
              </p>
            </div>
          )}

          {/* Widget */}
          <div
            id="revu-widget"
            data-bid="155408"
            data-url="https://app.revu.cloud"
            className="min-h-[400px] relative z-10"
          ></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Had an experience with us?</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;