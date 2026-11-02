import React from 'react';
import { MoreVertical, FileText, Video, Archive, Image as ImageIcon } from 'lucide-react';

export default function FileManagerWidget() {
  const items = [
    {
      label: 'Documents',
      size: '7.5 GB',
      icon: FileText,
      color: 'bg-[#4361EE]',
      lightBg: 'bg-[#EEF1FE]',
      textColor: 'text-[#4361EE]',
    },
    {
      label: 'Videos',
      size: '5 GB',
      icon: Video,
      color: 'bg-[#E2A03F]',
      lightBg: 'bg-[#FCF5EB]',
      textColor: 'text-[#E2A03F]',
    },
    {
      label: 'Archived',
      size: '12.8 GB',
      icon: Archive,
      color: 'bg-[#00AB55]',
      lightBg: 'bg-[#E6F7EF]',
      textColor: 'text-[#00AB55]',
    },
    {
      label: 'Images',
      size: '2.1 GB',
      icon: ImageIcon,
      color: 'bg-[#E7515A]',
      lightBg: 'bg-[#FCEFEE]',
      textColor: 'text-[#E7515A]',
    },
  ];

  return (
    <div className="bg-white rounded-xl p-5 border border-[#e0e6ed] shadow-card flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-bold text-[#0E1726]">File Manager</h3>
        <button className="w-6 h-6 rounded-full hover:bg-[#EEF1FE] hover:text-primary flex items-center justify-center text-[#888ea8] transition-colors">
          <MoreVertical className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Storage Usage Summary */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-xs text-[#888ea8] font-semibold">Total Size</span>
        </div>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-2xl font-extrabold text-[#0E1726]">23.5 GB</span>
          <span className="text-xs text-[#888ea8] font-medium">used of 2TB</span>
        </div>

        {/* Multi-Segmented Storage Bar */}
        <div className="w-full bg-[#EBEDF2] h-2.5 rounded-full overflow-hidden flex gap-0.5 mt-2.5">
          <div className="bg-[#4361EE] h-full" style={{ width: '32%' }} title="Documents: 7.5GB"></div>
          <div className="bg-[#00AB55] h-full" style={{ width: '45%' }} title="Archived: 12.8GB"></div>
          <div className="bg-[#E2A03F] h-full" style={{ width: '15%' }} title="Videos: 5GB"></div>
          <div className="bg-[#E7515A] h-full" style={{ width: '8%' }} title="Images: 2.1GB"></div>
        </div>
      </div>

      {/* 2x2 Category Cards */}
      <div className="grid grid-cols-2 gap-2.5">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center gap-3 p-3 rounded-xl border border-[#e0e6ed] hover:border-primary/40 hover:bg-[#fafbfc] transition-all group cursor-pointer"
          >
            <div className={`w-9 h-9 rounded-lg ${it.color} flex items-center justify-center text-white flex-shrink-0 shadow-xs`}>
              <it.icon className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-bold text-[#0E1726] truncate group-hover:text-primary">
                {it.label}
              </span>
              <span className="block text-[11px] text-[#888ea8] font-medium">
                {it.size}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

