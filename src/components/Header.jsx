import React, { useState } from 'react';
import { 
  Calendar, 
  Edit3, 
  MessageCircle, 
  Search, 
  Moon, 
  Sun, 
  Mail, 
  Bell, 
  Menu,
  ChevronDown,
  LogOut,
  User,
  Settings,
  LogIn
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const [darkMode, setDarkMode] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#e0e6ed] h-16 px-3 sm:px-6 flex items-center justify-between">
      {/* Left side actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Sidebar Toggle button (Visible on BOTH desktop and mobile) */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg text-[#506690] hover:text-primary hover:bg-[#EEF1FE] transition-colors cursor-pointer"
          title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Quick Icon Tools (Hidden on small mobile) */}
        <div className="hidden md:flex items-center gap-1.5">
          <button 
            className="w-9 h-9 rounded-lg hover:bg-[#EEF1FE] hover:text-primary text-[#506690] flex items-center justify-center transition-colors"
            title="Calendar"
          >
            <Calendar className="w-4 h-4" />
          </button>
          <button 
            className="w-9 h-9 rounded-lg hover:bg-[#EEF1FE] hover:text-primary text-[#506690] flex items-center justify-center transition-colors"
            title="Notes"
          >
            <Edit3 className="w-4 h-4" />
          </button>
          <button 
            className="w-9 h-9 rounded-lg hover:bg-[#EEF1FE] hover:text-primary text-[#506690] flex items-center justify-center transition-colors"
            title="Chat"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>

        {/* Search bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
            <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#888ea8]" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-28 xs:w-36 sm:w-56 md:w-64 pl-8 sm:pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-[#F6F8FA] border border-[#e0e6ed] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-[#888ea8]"
          />
        </div>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-1.5 sm:gap-2.5">
        {/* Dark/Light mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg hover:bg-[#EEF1FE] text-[#506690] hover:text-primary flex items-center justify-center transition-colors"
          title="Toggle Theme"
        >
          {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Language selector */}
        <div className="relative">
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg hover:bg-[#EEF1FE] transition-colors"
            title="Select Language"
          >
            {/* US Flag SVG */}
            <svg className="w-4 h-3 sm:w-5 sm:h-3.5 rounded-xs overflow-hidden shadow-xs" viewBox="0 0 640 480">
              <g fillRule="evenodd">
                <path fill="#bd3d44" d="M0 0h640v480H0z"/>
                <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640"/>
                <path fill="#192f5d" d="M0 0h256v258.5H0z"/>
                <marker id="us-a" markerHeight="30" markerWidth="30">
                  <path fill="#fff" d="m14 0 9 27-23-17h28L5 27z"/>
                </marker>
                <path fill="#fff" d="m14 0 9 27-23-17h28L5 27z"/>
              </g>
            </svg>
            <span className="text-xs font-bold text-[#506690]">EN</span>
            <ChevronDown className="w-3 h-3 text-[#888ea8]" />
          </button>

          {langDropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-[#e0e6ed] py-1 z-50 text-xs">
              <button 
                onClick={() => setLangDropdownOpen(false)}
                className="w-full text-left px-3 py-2 hover:bg-[#EEF1FE] hover:text-primary flex items-center gap-2 font-medium"
              >
                <span>🇺🇸</span> English (US)
              </button>
              <button 
                onClick={() => setLangDropdownOpen(false)}
                className="w-full text-left px-3 py-2 hover:bg-[#EEF1FE] hover:text-primary flex items-center gap-2 font-medium"
              >
                <span>🇪🇸</span> Spanish
              </button>
              <button 
                onClick={() => setLangDropdownOpen(false)}
                className="w-full text-left px-3 py-2 hover:bg-[#EEF1FE] hover:text-primary flex items-center gap-2 font-medium"
              >
                <span>🇫🇷</span> French
              </button>
              <button 
                onClick={() => setLangDropdownOpen(false)}
                className="w-full text-left px-3 py-2 hover:bg-[#EEF1FE] hover:text-primary flex items-center gap-2 font-medium"
              >
                <span>🇩🇪</span> German
              </button>
            </div>
          )}
        </div>

        {/* Mail Notification (hidden on very small screens) */}
        <button 
          className="hidden sm:flex relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg hover:bg-[#EEF1FE] text-[#506690] hover:text-primary items-center justify-center transition-colors"
          title="Messages"
        >
          <Mail className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-white"></span>
        </button>

        {/* Bell Notification */}
        <button 
          className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg hover:bg-[#EEF1FE] text-[#506690] hover:text-primary flex items-center justify-center transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2 h-2 bg-[#E7515A] rounded-full ring-2 ring-white animate-pulse"></span>
        </button>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center focus:outline-none ring-2 ring-offset-2 ring-transparent hover:ring-primary/40 rounded-full transition-all"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="User Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-[#e0e6ed]"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white font-bold text-xs items-center justify-center">
                VR
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00AB55] rounded-full ring-2 ring-white"></span>
            </div>
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-[#e0e6ed] py-2 z-50">
              <div className="px-4 py-2 border-b border-[#f1f3f6]">
                <p className="text-sm font-bold text-[#0E1726]">Vristo Admin</p>
                <p className="text-xs text-[#888ea8]">admin@vristo.com</p>
              </div>
              <div className="py-1 text-xs text-[#506690]">
                <a href="#profile" className="flex items-center gap-2.5 px-4 py-2 hover:bg-[#EEF1FE] hover:text-primary">
                  <User className="w-3.5 h-3.5" /> My Profile
                </a>
                <a href="#settings" className="flex items-center gap-2.5 px-4 py-2 hover:bg-[#EEF1FE] hover:text-primary">
                  <Settings className="w-3.5 h-3.5" /> Settings
                </a>
                <div className="border-t border-[#f1f3f6] my-1"></div>
                <Link to="/signin" className="flex items-center gap-2.5 px-4 py-2 hover:bg-[#EEF1FE] hover:text-primary">
                  <LogIn className="w-3.5 h-3.5" /> Sign In Page
                </Link>
                <Link to="/signup" className="flex items-center gap-2.5 px-4 py-2 hover:bg-[#EEF1FE] hover:text-primary">
                  <User className="w-3.5 h-3.5" /> Sign Up Page
                </Link>
                <div className="border-t border-[#f1f3f6] my-1"></div>
                <Link to="/signin" className="flex items-center gap-2.5 px-4 py-2 text-[#E7515A] hover:bg-[#FCEFEE]">
                  <LogOut className="w-3.5 h-3.5" /> Log Out
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
