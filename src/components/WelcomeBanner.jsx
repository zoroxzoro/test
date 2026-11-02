import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FF7388] via-[#FF9E79] to-[#FFD572] p-5 sm:p-7 text-white shadow-card flex flex-col justify-between min-h-[190px] h-full">
      {/* Decorative background glow circles */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
      <div className="absolute -bottom-10 right-40 w-40 h-40 bg-white/15 rounded-full blur-lg pointer-events-none"></div>

      <div className="max-w-[65%] sm:max-w-md z-10 space-y-3">
        <h2 className="text-xl sm:text-[26px] font-extrabold tracking-tight text-[#E72D4D] leading-tight">
          Welcome to Vristo!
        </h2>
        <p className="text-xs sm:text-[13px] text-[#4A2027]/90 leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <div className="pt-1 sm:pt-2">
          <button className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-[#4361EE] hover:bg-[#3651d4] active:scale-95 text-white text-xs sm:text-sm font-bold rounded-lg shadow-md transition-all">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3D Rocket Illustration on the right */}
      <div className="absolute right-1 sm:right-6 bottom-0 top-0 w-36 sm:w-56 md:w-60 flex items-center justify-center pointer-events-none select-none">
        <svg viewBox="0 0 240 200" className="w-full h-full overflow-visible drop-shadow-lg">
          {/* Smoke Cloud */}
          <g fill="#FFFFFF" opacity="0.95">
            <ellipse cx="140" cy="180" rx="35" ry="20" />
            <ellipse cx="170" cy="185" rx="30" ry="18" />
            <ellipse cx="195" cy="175" rx="25" ry="16" />
            <ellipse cx="160" cy="165" rx="28" ry="22" />
            <ellipse cx="130" cy="170" rx="22" ry="15" />
          </g>

          {/* Rocket Fire Exhaust */}
          <path d="M125 150 Q138 180 148 160 Q142 145 135 138 Z" fill="#FFA500" />
          <path d="M130 152 Q138 172 144 160 Q139 148 135 142 Z" fill="#FFE600" />

          {/* Rocket Body */}
          <g transform="translate(45, 10) rotate(-35 100 100)">
            {/* Rocket Fins */}
            <path d="M70 120 L40 145 L70 140 Z" fill="#D92D20" />
            <path d="M130 120 L160 145 L130 140 Z" fill="#D92D20" />
            <path d="M100 120 L100 150 L95 150 Z" fill="#B42318" />

            {/* Main Fuselage */}
            <path d="M100 20 C75 55 70 110 70 135 L130 135 C130 110 125 55 100 20 Z" fill="#FFFFFF" />
            {/* Rocket Nose Cone */}
            <path d="M100 20 C85 45 78 70 76 80 L124 80 C122 70 115 45 100 20 Z" fill="#E02424" />

            {/* Porch / Window */}
            <circle cx="100" cy="85" r="15" fill="#3B82F6" stroke="#93C5FD" strokeWidth="3" />
            <ellipse cx="96" cy="81" rx="4" ry="2" fill="#FFFFFF" opacity="0.8" />

            {/* Little 3D Character astronaut riding on the rocket */}
            <g transform="translate(115, 60)">
              {/* Arm holding rocket */}
              <rect x="-15" y="10" width="18" height="6" rx="3" fill="#1E3A8A" transform="rotate(-15)" />
              {/* Body */}
              <ellipse cx="10" cy="22" rx="10" ry="14" fill="#2563EB" />
              {/* Tie */}
              <polygon points="10,14 12,22 10,26 8,22" fill="#DC2626" />
              {/* Head */}
              <circle cx="12" cy="6" r="9" fill="#FBBF24" />
              {/* Hair */}
              <path d="M4 4 C6 -2 16 -4 20 2 C18 0 10 2 6 6 Z" fill="#78350F" />
              {/* Happy Eyes and smile */}
              <circle cx="11" cy="5" r="1.2" fill="#1F2937" />
              <circle cx="15" cy="5" r="1.2" fill="#1F2937" />
              <path d="M11 9 Q13 12 16 9" stroke="#1F2937" strokeWidth="1" fill="none" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
