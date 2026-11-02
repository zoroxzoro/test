import React from 'react';
import { MoreVertical } from 'lucide-react';

export default function ActivitiesFeed() {
  return (
    <div className="bg-white rounded-xl p-5 border border-[#e0e6ed] shadow-card flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-[#0E1726]">Activities</h3>
        <button className="w-6 h-6 rounded-full hover:bg-[#EEF1FE] hover:text-primary flex items-center justify-center text-[#888ea8] transition-colors">
          <MoreVertical className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Activity Timeline */}
      <div className="space-y-4 text-xs">
        {/* Item 1 */}
        <div className="flex gap-3">
          <div className="relative flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
              alt="Kato F. Tucker"
              className="w-9 h-9 rounded-full object-cover border-2 border-[#FB5B76]/30"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-9 h-9 rounded-full bg-pink-100 text-pink-600 font-bold items-center justify-center text-xs">
              KT
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#0E1726]">Kato F. Tucker</span>
              <span className="text-[11px] text-[#888ea8]">Today, 5h ago</span>
            </div>
            <p className="text-[#506690] mt-0.5">
              Commented on <a href="#project" className="text-primary font-bold hover:underline">Project</a>
            </p>
            {/* Quote block */}
            <div className="mt-2 p-2.5 bg-[#F6F8FA] border border-[#e0e6ed] rounded-lg text-[#506690] text-[11.5px] leading-relaxed">
              Lorem Ipsum is simply dummy text of the...
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-3">
          <div className="relative flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
              alt="Hedwig F. Nguyen"
              className="w-9 h-9 rounded-full object-cover border-2 border-[#4361EE]/30"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-9 h-9 rounded-full bg-blue-100 text-blue-600 font-bold items-center justify-center text-xs">
              HN
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#0E1726]">Hedwig F. Nguyen</span>
              <span className="text-[11px] text-[#888ea8]">Yesterday, 05:25PM</span>
            </div>
            <p className="text-[#506690] mt-0.5">
              Added a file to <a href="#kiloo" className="text-[#E2A03F] font-bold hover:underline">Kiloo Project</a>
            </p>

            {/* File attachment preview */}
            <div className="mt-2 flex items-center justify-between p-2 bg-[#F6F8FA] border border-[#e0e6ed] rounded-lg">
              <div className="flex items-center gap-2">
                {/* Figma Icon */}
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg viewBox="0 0 38 57" className="w-4 h-5">
                    <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
                    <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
                    <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
                    <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
                    <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-[#0E1726] block leading-tight">Design System.Fig</span>
                  <span className="text-[10px] text-[#888ea8]">18M</span>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-[#EEF1FE] text-primary text-[11px] font-bold rounded">
                +2
              </span>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-3">
          <div className="relative flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
              alt="Kato F. Tucker"
              className="w-9 h-9 rounded-full object-cover border-2 border-[#FB5B76]/30"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-9 h-9 rounded-full bg-pink-100 text-pink-600 font-bold items-center justify-center text-xs">
              KT
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#0E1726]">Kato F. Tucker</span>
              <span className="text-[11px] text-[#888ea8]">Yesterday, 06:00PM</span>
            </div>
            <p className="text-[#506690] mt-0.5">
              Closed task <span className="font-semibold text-[#0E1726]">"Wireframe review"</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

