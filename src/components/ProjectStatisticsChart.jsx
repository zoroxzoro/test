import React, { useState } from 'react';
import { Plus, Minus, RotateCcw, MoreVertical } from 'lucide-react';

const data = [
  { month: 'Jan', complete: 19, doing: 27 },
  { month: 'Feb', complete: 14, doing: 19 },
  { month: 'Mar', complete: 18, doing: 23 },
  { month: 'Apr', complete: 23, doing: 25 },
  { month: 'May', complete: 20, doing: 19 },
  { month: 'Jun', complete: 22, doing: 23 },
  { month: 'Jul', complete: 22, doing: 21 },
  { month: 'Aug', complete: 20, doing: 21 },
  { month: 'Sep', complete: 27, doing: 27.5 },
  { month: 'Oct', complete: 25, doing: 25 },
  { month: 'Nov', complete: 25, doing: 24 },
];

export default function ProjectStatisticsChart() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const maxValue = 30;
  const chartHeight = 220; // in px inside SVG viewBox

  return (
    <div className="bg-white rounded-xl p-5 border border-[#e0e6ed] shadow-card flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-[#0E1726]">Project Statistics</h3>
        <div className="flex items-center gap-1.5 text-[#888ea8]">
          <button className="w-6 h-6 rounded-full hover:bg-[#EEF1FE] hover:text-primary flex items-center justify-center transition-colors" title="Zoom in">
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button className="w-6 h-6 rounded-full hover:bg-[#EEF1FE] hover:text-primary flex items-center justify-center transition-colors" title="Zoom out">
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button className="w-6 h-6 rounded-full hover:bg-[#EEF1FE] hover:text-primary flex items-center justify-center transition-colors" title="Reset">
            <RotateCcw className="w-3 h-3" />
          </button>
          <button className="w-6 h-6 rounded-full hover:bg-[#EEF1FE] hover:text-primary flex items-center justify-center transition-colors" title="Options">
            <MoreVertical className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SVG Bar Chart */}
      <div className="relative w-full overflow-x-auto">
        <svg viewBox="0 0 620 260" className="w-full h-56 sm:h-64 overflow-visible select-none">
          {/* Y-Axis Grid Lines & Labels */}
          {[30, 20, 10, 0].map((val) => {
            const y = 30 + ((30 - val) / 30) * 180;
            return (
              <g key={val}>
                <text x="18" y={y + 4} textAnchor="end" className="text-[11px] fill-[#888ea8] font-medium">
                  {val}
                </text>
                <line
                  x1="30"
                  y1={y}
                  x2="600"
                  y2={y}
                  stroke="#F1F3F6"
                  strokeWidth="1"
                  strokeDasharray={val === 0 ? 'none' : '3 3'}
                />
              </g>
            );
          })}

          {/* Month Bars */}
          {data.map((item, index) => {
            const groupWidth = 570 / data.length;
            const xCenter = 30 + index * groupWidth + groupWidth / 2;
            const barWidth = 14;
            const gap = 3;

            // Heights
            const compH = (item.complete / maxValue) * 180;
            const doingH = (item.doing / maxValue) * 180;

            const compY = 210 - compH;
            const doingY = 210 - doingH;

            const isHovered = hoveredIdx === index;

            return (
              <g 
                key={item.month} 
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="cursor-pointer transition-all duration-200"
              >
                {/* Hover backdrop column highlight */}
                {isHovered && (
                  <rect
                    x={xCenter - barWidth - 4}
                    y="25"
                    width={barWidth * 2 + gap + 8}
                    height="190"
                    fill="#F4F6FA"
                    rx="6"
                    opacity="0.7"
                  />
                )}

                {/* Complete Bar (Pink) */}
                <rect
                  x={xCenter - barWidth - gap / 2}
                  y={compY}
                  width={barWidth}
                  height={compH}
                  fill="#FB5B76"
                  rx="3"
                  className="transition-all duration-300 hover:brightness-110"
                />

                {/* Doing Bar (Blue) */}
                <rect
                  x={xCenter + gap / 2}
                  y={doingY}
                  width={barWidth}
                  height={doingH}
                  fill="#4361EE"
                  rx="3"
                  className="transition-all duration-300 hover:brightness-110"
                />

                {/* Month Label */}
                <text
                  x={xCenter}
                  y="235"
                  textAnchor="middle"
                  className={`text-[12px] font-medium transition-colors ${
                    isHovered ? 'fill-primary font-bold' : 'fill-[#888ea8]'
                  }`}
                >
                  {item.month}
                </text>

                {/* Tooltip on hover */}
                {isHovered && (
                  <g transform={`translate(${xCenter}, ${Math.min(compY, doingY) - 35})`}>
                    <rect
                      x="-42"
                      y="0"
                      width="84"
                      height="30"
                      rx="6"
                      fill="#0E1726"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                    />
                    <polygon points="-4,30 4,30 0,34" fill="#0E1726" />
                    <text x="0" y="14" textAnchor="middle" fill="#FFFFFF" className="text-[9px] font-medium">
                      Done: {item.complete}
                    </text>
                    <text x="0" y="24" textAnchor="middle" fill="#93C5FD" className="text-[9px] font-bold">
                      Doing: {item.doing}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-3 pt-2 border-t border-[#f1f3f6] text-xs font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-[#FB5B76]"></span>
          <span className="text-[#506690]">Complete</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-[#4361EE]"></span>
          <span className="text-[#506690]">Doing</span>
        </div>
      </div>
    </div>
  );
}

