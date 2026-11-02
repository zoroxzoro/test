import React from 'react';
import { MoreVertical, CheckCheck } from 'lucide-react';

const messages = [
  {
    name: 'Nia Hillyer',
    time: '2:09 PM',
    message: 'How do you do?',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    unread: false,
    active: true,
  },
  {
    name: 'Alma Clarke',
    time: '1:44 PM',
    message: "I've forgotten how",
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
    unread: false,
    active: true,
  },
  {
    name: 'Sean Freeman',
    time: '12:09 PM',
    message: 'I was wondering...',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    unread: false,
    active: false,
  },
  {
    name: 'Roxanne',
    time: '2:00 PM',
    message: 'Wasup for the third ...',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    unread: false,
    active: false,
  },
];

export default function MessagesWidget() {
  return (
    <div className="bg-white rounded-xl p-5 border border-[#e0e6ed] shadow-card flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-[#0E1726]">Messages</h3>
        <button className="w-6 h-6 rounded-full hover:bg-[#EEF1FE] hover:text-primary flex items-center justify-center text-[#888ea8] transition-colors">
          <MoreVertical className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Messages list */}
      <div className="divide-y divide-[#f1f3f6]">
        {messages.map((item, idx) => (
          <div
            key={idx}
            className="py-3 flex items-center justify-between hover:bg-[#f6f8fa] -mx-2 px-2 rounded-lg transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Avatar with active indicator */}
              <div className="relative flex-shrink-0">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-9 h-9 rounded-full object-cover border border-[#e0e6ed]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-9 h-9 rounded-full bg-primary/20 text-primary font-bold items-center justify-center text-xs">
                  {item.name.substring(0, 2)}
                </div>
                {item.active && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00AB55] rounded-full ring-2 ring-white"></span>
                )}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-[#0E1726] group-hover:text-primary truncate">
                  {item.name}
                </h4>
                <p className="text-[11px] text-[#888ea8] truncate mt-0.5">
                  {item.message}
                </p>
              </div>
            </div>

            {/* Time & Read Receipt */}
            <div className="flex flex-col items-end gap-1 flex-shrink-0 pl-2">
              <span className="text-[10px] text-[#888ea8] font-medium">{item.time}</span>
              <CheckCheck className="w-3.5 h-3.5 text-primary stroke-[2.5]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

