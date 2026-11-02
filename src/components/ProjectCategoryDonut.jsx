import React, { useState } from 'react';

export default function ProjectCategoryDonut() {
  const [activeSegment, setActiveSegment] = useState(null);

  const categories = [
    { label: 'Web Design', percent: 35, color: '#4361EE' },
    { label: 'Graphics Design', percent: 20, color: '#FB5B76' },
    { label: 'UX/UI Design', percent: 25, color: '#00AB55' },
    { label: 'Brand Identity', percent: 20, color: '#E2A03F' },
  ];

  // SVG Donut calculation
  const size = 180;
  const strokeWidth = 26;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let currentOffset = 0;

  return (
    <div className="bg-white rounded-xl p-5 border border-[#e0e6ed] shadow-card flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-base font-bold text-[#0E1726] mb-2">Project Category</h3>

      {/* SVG Donut */}
      <div className="relative flex items-center justify-center my-3">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
          {categories.map((cat, i) => {
            const strokeDasharray = `${(cat.percent / 100) * circumference} ${circumference}`;
            const strokeDashoffset = -currentOffset;
            currentOffset += (cat.percent / 100) * circumference;

            const isHovered = activeSegment === i;

            return (
              <circle
                key={cat.label}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={cat.color}
                strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveSegment(i)}
                onMouseLeave={() => setActiveSegment(null)}
              />
            );
          })}
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-base font-extrabold text-[#0E1726]">
            {activeSegment !== null ? `${categories[activeSegment].percent}%` : 'Category'}
          </span>
          {activeSegment !== null && (
            <span className="text-[10px] font-semibold text-[#888ea8]">
              {categories[activeSegment].label}
            </span>
          )}
        </div>
      </div>

      {/* Legend 2x2 */}
      <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-3 border-t border-[#f1f3f6] text-xs font-semibold">
        {categories.map((cat, i) => (
          <div
            key={cat.label}
            className={`flex items-center gap-2 cursor-pointer transition-opacity ${
              activeSegment !== null && activeSegment !== i ? 'opacity-40' : 'opacity-100'
            }`}
            onMouseEnter={() => setActiveSegment(i)}
            onMouseLeave={() => setActiveSegment(null)}
          >
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: cat.color }}
            ></span>
            <span className="text-[#506690] truncate">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

