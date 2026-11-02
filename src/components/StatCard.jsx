import React from 'react';

export default function StatCard({ title, value, icon: Icon, color, bgLight }) {
  // Color configuration
  const colorMap = {
    blue: {
      text: 'text-[#4361EE]',
      iconBg: 'bg-[#4361EE]',
      hoverBorder: 'hover:border-[#4361EE]/40',
    },
    green: {
      text: 'text-[#00AB55]',
      iconBg: 'bg-[#00AB55]',
      hoverBorder: 'hover:border-[#00AB55]/40',
    },
    orange: {
      text: 'text-[#E2A03F]',
      iconBg: 'bg-[#E2A03F]',
      hoverBorder: 'hover:border-[#E2A03F]/40',
    },
    red: {
      text: 'text-[#E7515A]',
      iconBg: 'bg-[#E7515A]',
      hoverBorder: 'hover:border-[#E7515A]/40',
    },
  };

  const current = colorMap[color] || colorMap.blue;

  return (
    <div className={`bg-white rounded-xl p-5 border border-[#e0e6ed] shadow-card flex items-center gap-4 transition-all duration-200 hover:shadow-md ${current.hoverBorder}`}>
      {/* Icon Badge */}
      <div className={`w-12 h-12 rounded-xl ${current.iconBg} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
        <Icon className="w-6 h-6 stroke-[2.2]" />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <p className={`text-xs font-bold tracking-tight ${current.text}`}>
          {title}
        </p>
        <p className="text-2xl font-extrabold text-[#0E1726] tracking-tight mt-0.5">
          {value}
        </p>
      </div>
    </div>
  );
}

