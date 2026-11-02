import React from 'react';
import { MoreVertical, TrendingUp, TrendingDown } from 'lucide-react';

export default function MetricMiniCard({
  title,
  value,
  trend,
  trendIsUp,
  period,
  icon: Icon,
  colorScheme, // 'green', 'pink', 'blue', 'orange'
}) {
  const configs = {
    green: {
      iconBg: 'bg-[#E6F7EF] text-[#00AB55]',
      trendColor: 'text-[#00AB55]',
      gradientId: 'grad-green',
      strokeColor: '#00AB55',
      fillStart: '#00AB55',
      wavePath: 'M0,45 Q50,42 90,28 T180,18 L180,60 L0,60 Z',
      strokePath: 'M0,45 Q50,42 90,28 T180,18',
    },
    pink: {
      iconBg: 'bg-[#FCEFEE] text-[#FB5B76]',
      trendColor: 'text-[#FB5B76]',
      gradientId: 'grad-pink',
      strokeColor: '#FB5B76',
      fillStart: '#FB5B76',
      wavePath: 'M0,25 Q50,18 90,35 T180,48 L180,60 L0,60 Z',
      strokePath: 'M0,25 Q50,18 90,35 T180,48',
    },
    blue: {
      iconBg: 'bg-[#EEF1FE] text-[#4361EE]',
      trendColor: 'text-[#4361EE]',
      gradientId: 'grad-blue',
      strokeColor: '#4361EE',
      fillStart: '#4361EE',
      wavePath: 'M0,35 Q60,45 100,22 T180,38 L180,60 L0,60 Z',
      strokePath: 'M0,35 Q60,45 100,22 T180,38',
    },
    orange: {
      iconBg: 'bg-[#FCF5EB] text-[#E2A03F]',
      trendColor: 'text-[#E2A03F]',
      gradientId: 'grad-orange',
      strokeColor: '#E2A03F',
      fillStart: '#E2A03F',
      wavePath: 'M0,40 Q50,38 90,20 T180,15 L180,60 L0,60 Z',
      strokePath: 'M0,40 Q50,38 90,20 T180,15',
    },
  };

  const cfg = configs[colorScheme] || configs.green;

  return (
    <div className="relative overflow-hidden bg-white rounded-xl p-4 border border-[#e0e6ed] shadow-card flex flex-col justify-between h-[152px]">
      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-full ${cfg.iconBg} flex items-center justify-center`}>
            <Icon className="w-4 h-4" />
          </div>
          <span className="text-sm font-bold text-[#0E1726]">{title}</span>
        </div>
        <button className="w-6 h-6 rounded-full hover:bg-[#EEF1FE] hover:text-primary flex items-center justify-center text-[#888ea8] transition-colors">
          <MoreVertical className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Stats */}
      <div className="z-10 mt-1">
        <p className="text-2xl font-extrabold text-[#0E1726] tracking-tight">{value}</p>
        <p className={`text-xs font-bold flex items-center gap-1 mt-1 ${cfg.trendColor}`}>
          {trendIsUp ? (
            <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5 stroke-[2.5]" />
          )}
          <span>{trend}</span>
          <span className="text-[#888ea8] font-normal">{period}</span>
        </p>
      </div>

      {/* Smooth Background Wave at Bottom */}
      <div className="absolute right-0 bottom-0 left-12 h-16 pointer-events-none overflow-hidden opacity-30">
        <svg viewBox="0 0 180 60" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id={cfg.gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={cfg.fillStart} stopOpacity="0.8" />
              <stop offset="100%" stopColor={cfg.fillStart} stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path d={cfg.wavePath} fill={`url(#${cfg.gradientId})`} />
          <path d={cfg.strokePath} fill="none" stroke={cfg.strokeColor} strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  );
}

