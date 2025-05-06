import { FaTools } from 'react-icons/fa';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent animate-gradient-move overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute left-1/4 top-1/3 w-16 h-16 bg-light/40 rounded-full blur-2xl animate-float-slow" />
        <span className="absolute right-1/4 bottom-1/4 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-float-medium" />
        <span className="absolute left-1/2 top-1/5 w-10 h-10 bg-primary/30 rounded-full blur-xl animate-float-fast" />
      </div>
      {/* Animated Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-accent/20 animate-bounce shadow-lg">
          <FaTools className="text-accent text-5xl animate-spin-slow" />
        </div>
      </div>
      {/* Animated Dots */}
      <div className="flex gap-2 mb-6">
        <span className="w-3 h-3 rounded-full bg-accent animate-bounce [animation-delay:0s]"></span>
        <span className="w-3 h-3 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></span>
        <span className="w-3 h-3 rounded-full bg-secondary animate-bounce [animation-delay:0.4s]"></span>
        <span className="w-3 h-3 rounded-full bg-accent animate-bounce [animation-delay:0.6s]"></span>
      </div>
      {/* Progress Bar */}
      <div className="w-48 h-2 bg-light/40 rounded-full overflow-hidden mb-8">
        <div className="h-full bg-accent animate-progress-bar" style={{ width: '60%' }} />
      </div>
      {/* Shimmer Loading Text */}
      <div className="relative text-2xl md:text-3xl font-extrabold text-secondary drop-shadow mb-2 animate-fade-in">
        <span className="shimmer bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent inline-block">EasyPlumbing...</span>
      </div>
      <div className="text-base text-primary/80 animate-fade-in-slow">Getting things ready for you!</div>
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-accent/20 blur-2xl rounded-full opacity-70 pointer-events-none" />
      {/* Custom Animations */}
      <style>{`
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 4s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .shimmer {
          background-size: 200% 100%;
          animation: shimmerMove 2s linear infinite;
        }
        @keyframes shimmerMove {
          0% { background-position: -100% 0; }
          100% { background-position: 100% 0; }
        }
        .animate-progress-bar {
          animation: progressBar 1.5s cubic-bezier(0.4,0,0.2,1) infinite alternate;
        }
        @keyframes progressBar {
          0% { width: 10%; }
          100% { width: 90%; }
        }
        .animate-float-slow {
          animation: floatY 6s ease-in-out infinite alternate;
        }
        .animate-float-medium {
          animation: floatY 4s ease-in-out infinite alternate;
        }
        .animate-float-fast {
          animation: floatY 2.5s ease-in-out infinite alternate;
        }
        @keyframes floatY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-30px); }
        }
      `}</style>
    </div>
  );
} 