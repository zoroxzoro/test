import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, LogIn, UserPlus } from 'lucide-react';

export default function TopNavSwitcher() {
  return (
    <nav 
      aria-label="Screen switcher"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-2 bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-full border border-[#e0e6ed] shadow-xl text-xs font-bold text-[#506690]"
    >
      <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider text-[#888ea8] font-extrabold px-2">
        Screens:
      </span>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
            isActive
              ? 'bg-[#4361EE] text-white shadow-xs font-extrabold'
              : 'hover:text-primary hover:bg-[#EEF1FE]'
          }`
        }
      >
        <LayoutDashboard className="w-3.5 h-3.5" />
        <span>Dashboard</span>
      </NavLink>

      <NavLink
        to="/signin"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
            isActive
              ? 'bg-[#4361EE] text-white shadow-xs font-extrabold'
              : 'hover:text-primary hover:bg-[#EEF1FE]'
          }`
        }
      >
        <LogIn className="w-3.5 h-3.5" />
        <span>Sign In</span>
      </NavLink>

      <NavLink
        to="/signup"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
            isActive
              ? 'bg-[#4361EE] text-white shadow-xs font-extrabold'
              : 'hover:text-primary hover:bg-[#EEF1FE]'
          }`
        }
      >
        <UserPlus className="w-3.5 h-3.5" />
        <span>Sign Up</span>
      </NavLink>
    </nav>
  );
}
