import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';

export default function ProjectSummaryCalendar() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(8); // Sept (0-based)
  const [currentYear, setCurrentYear] = useState(2023);

  const months = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];

  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  // Fixed grid matching September 2023 screenshot layout
  const daysGrid = [
    { num: 31, isPrev: true },
    { num: 30, isPrev: true },
    { num: 1, isCurrent: true },
    { num: 2, isCurrent: true, isActive: true },
    { num: 3, isCurrent: true },
    { num: 4, isCurrent: true },
    { num: 5, isCurrent: true },

    { num: 6, isCurrent: true },
    { num: 7, isCurrent: true },
    { num: 8, isCurrent: true },
    { num: 9, isCurrent: true },
    { num: 10, isCurrent: true },
    { num: 11, isCurrent: true },
    { num: 12, isCurrent: true },

    { num: 13, isCurrent: true },
    { num: 14, isCurrent: true },
    { num: 15, isCurrent: true },
    { num: 16, isCurrent: true },
    { num: 17, isCurrent: true },
    { num: 18, isCurrent: true },
    { num: 19, isCurrent: true },

    { num: 20, isCurrent: true },
    { num: 21, isCurrent: true },
    { num: 22, isCurrent: true },
    { num: 23, isCurrent: true },
    { num: 24, isCurrent: true },
    { num: 25, isCurrent: true },
    { num: 26, isCurrent: true },

    { num: 27, isCurrent: true },
    { num: 28, isCurrent: true },
    { num: 29, isCurrent: true },
    { num: 30, isCurrent: true },
    { num: 31, isNext: true },
    { num: 1, isNext: true },
    { num: 2, isNext: true },
  ];

  return (
    <div className="bg-white rounded-xl p-5 border border-[#e0e6ed] shadow-card flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-[#0E1726]">Project Summary</h3>
        <button className="w-6 h-6 rounded-full hover:bg-[#EEF1FE] hover:text-primary flex items-center justify-center text-[#888ea8] transition-colors">
          <MoreVertical className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Month Selector Bar */}
      <div className="flex items-center justify-between mb-4 px-1">
        <span className="text-sm font-extrabold tracking-wide text-[#0E1726]">
          {months[currentMonthIndex]} {currentYear}
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrevMonth}
            className="w-7 h-7 rounded-lg border border-[#e0e6ed] bg-white hover:bg-[#f6f8fa] flex items-center justify-center text-[#506690] transition-colors"
            title="Previous month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNextMonth}
            className="w-7 h-7 rounded-lg bg-[#4361EE] hover:bg-[#344ec7] flex items-center justify-center text-white shadow-sm transition-colors"
            title="Next month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="w-full">
        {/* Days of week */}
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="text-[11px] font-semibold text-[#888ea8] py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Date cells */}
        <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-xs">
          {daysGrid.map((item, idx) => {
            const isSelected = item.isCurrent && selectedDay === item.num;
            let textClass = 'text-[#0E1726] font-medium hover:bg-[#EEF1FE] hover:text-primary';

            if (item.isPrev || item.isNext) {
              textClass = 'text-[#cbd5e1] font-normal';
            }

            return (
              <div key={idx} className="flex items-center justify-center">
                <button
                  onClick={() => {
                    if (item.isCurrent) setSelectedDay(item.num);
                  }}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-[#4361EE] text-white font-bold shadow-md shadow-primary/30'
                      : textClass
                  }`}
                >
                  {item.num}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom spacer / aesthetic balance */}
      <div className="mt-4 pt-2 border-t border-[#f1f3f6] flex items-center justify-between text-xs text-[#888ea8]">
        <span>Completed this month: <strong className="text-primary">18 tasks</strong></span>
        <span className="w-2 h-2 rounded-full bg-[#00AB55]"></span>
      </div>
    </div>
  );
}

