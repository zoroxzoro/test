import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, ChevronDown, AlertCircle } from "lucide-react";
import TopNavSwitcher from "../components/TopNavSwitcher";
import api from "../api/User";

export default function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const cleanEmail = email.trim().toLowerCase();
      const { data } = await api.post("/logIn", { email: cleanEmail, password });
      
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      navigate("/");
    } catch (requestError) {
      setErrorMessage(
        requestError.response?.data?.message ||
          "Could not reach the API. Check that the backend is running.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoFill = () => {
    setEmail("kaifalam9580@gmail.com");
    setPassword("1234");
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#FAF7FD] flex flex-col items-center justify-center p-3 sm:p-6 pb-24 sm:pb-6">
      {/* Quick Switcher for design inspection */}
      <TopNavSwitcher />

      {/* Subtle Topographic / World Map Background Vector */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.045] flex items-center justify-center">
        <svg viewBox="0 0 1000 600" className="w-full h-full object-cover">
          <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#4361EE" />
          </pattern>
          <rect width="1000" height="600" fill="url(#dot-pattern)" />
          <path
            d="M-100,100 C300,20 600,200 1100,50"
            fill="none"
            stroke="#805DCA"
            strokeWidth="2"
          />
          <path
            d="M-50,200 C350,120 650,300 1150,150"
            fill="none"
            stroke="#805DCA"
            strokeWidth="1.5"
          />
          <path
            d="M-100,400 C250,320 700,500 1200,350"
            fill="none"
            stroke="#805DCA"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Soft gradient blur spheres in corners */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-purple-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-pink-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-blue-300/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Main Split Authentication Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e0e6ed]/80 grid grid-cols-1 md:grid-cols-12 min-h-[540px]">
        {/* Left Side: Illustration & Branding (5 cols) */}
        <div className="md:col-span-5 relative overflow-hidden bg-gradient-to-br from-[#E11D48] via-[#7C3AED] to-[#3B82F6] p-6 sm:p-8 flex flex-col justify-between text-white">
          {/* Angled subtle divider slash */}
          <div className="absolute -right-12 -top-12 bottom-0 w-24 bg-white/10 transform rotate-12 pointer-events-none hidden md:block"></div>

          {/* Logo */}
          <div className="z-10 flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-1.5 group">
              <span className="text-2xl sm:text-3xl font-black tracking-tight lowercase">
                tapect
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FB5B76] inline-block mb-1 group-hover:scale-125 transition-transform"></span>
            </Link>
          </div>

          {/* Center Clean Flat Illustration */}
          <div className="relative z-10 my-auto py-4 sm:py-6 flex items-center justify-center">
            <svg
              viewBox="0 0 320 300"
              className="w-full max-w-[220px] sm:max-w-[280px] drop-shadow-md overflow-visible"
            >
              {/* Floating Shield badge */}
              <g transform="translate(180, 20)">
                <path
                  d="M20 0 L40 8 C40 28 20 40 20 40 C20 40 0 28 0 8 Z"
                  fill="#3B82F6"
                  stroke="#60A5FA"
                  strokeWidth="2"
                />
                <circle cx="20" cy="18" r="9" fill="#FFFFFF" />
                <path
                  d="M16 18 L19 21 L24 15"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Floating Gold Sparkle / Diamonds */}
              <polygon points="120,40 125,45 120,50 115,45" fill="#FBBF24" />
              <polygon
                points="270,110 277,117 270,124 263,117"
                fill="#FBBF24"
              />
              <polygon
                points="270,180 278,188 270,196 262,188"
                fill="#FBBF24"
              />

              {/* Woman Illustration */}
              <ellipse cx="205" cy="115" rx="34" ry="42" fill="#111827" />

              <rect x="195" y="135" width="20" height="22" fill="#FCE7D0" />
              <path
                d="M175,150 C180,142 230,142 235,150 L250,230 L160,230 Z"
                fill="#3B82F6"
              />
              <circle cx="185" cy="165" r="3" fill="#FFFFFF" />
              <circle cx="205" cy="160" r="3" fill="#FFFFFF" />
              <circle cx="225" cy="170" r="3" fill="#FFFFFF" />
              <circle cx="178" cy="190" r="3" fill="#FFFFFF" />
              <circle cx="200" cy="190" r="3" fill="#FFFFFF" />
              <circle cx="220" cy="195" r="3" fill="#FFFFFF" />
              <circle cx="190" cy="215" r="3" fill="#FFFFFF" />
              <circle cx="215" cy="220" r="3" fill="#FFFFFF" />

              <ellipse cx="202" cy="105" rx="20" ry="24" fill="#FCE7D0" />
              <circle cx="195" cy="100" r="2" fill="#1F2937" />
              <circle cx="208" cy="100" r="2" fill="#1F2937" />
              <path
                d="M198 112 Q202 116 206 112"
                stroke="#1F2937"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M192 95 Q196 93 199 95"
                stroke="#1F2937"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M205 95 Q208 93 212 95"
                stroke="#1F2937"
                strokeWidth="1"
                fill="none"
              />

              <path
                d="M182 100 C182 80 222 80 222 100 C222 115 218 125 218 125 C210 105 190 105 182 125 Z"
                fill="#111827"
              />

              <path
                d="M210,175 L150,185 C145,185 140,180 145,175 L155,170"
                stroke="#FCE7D0"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
              <ellipse cx="140" cy="175" rx="7" ry="5" fill="#FCE7D0" />
              <rect
                x="130"
                y="172"
                width="12"
                height="4"
                rx="2"
                fill="#FCE7D0"
              />

              <rect
                x="160"
                y="230"
                width="80"
                height="50"
                fill="#111827"
                rx="4"
              />

              {/* Floating UI Card */}
              <g transform="translate(50, 90)">
                <rect
                  x="0"
                  y="0"
                  width="115"
                  height="135"
                  rx="10"
                  fill="#FFFFFF"
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  filter="drop-shadow(0 8px 16px rgba(0,0,0,0.15))"
                />

                <circle cx="12" cy="10" r="2.5" fill="#111827" />
                <circle cx="20" cy="10" r="2.5" fill="#111827" />
                <circle cx="28" cy="10" r="2.5" fill="#111827" />
                <line
                  x1="0"
                  y1="18"
                  x2="115"
                  y2="18"
                  stroke="#E5E7EB"
                  strokeWidth="1.5"
                />

                <circle cx="57.5" cy="48" r="18" fill="#FBBF24" />
                <circle cx="57.5" cy="42" r="5" fill="#FFFFFF" />
                <path d="M48 57 C48 52 67 52 67 57 Z" fill="#FFFFFF" />

                <rect
                  x="18"
                  y="75"
                  width="80"
                  height="18"
                  rx="5"
                  fill="#F9FAFB"
                  stroke="#D1D5DB"
                  strokeWidth="1.2"
                />
                <circle cx="34" cy="84" r="2" fill="#1F2937" />
                <circle cx="44" cy="84" r="2" fill="#1F2937" />
                <circle cx="54" cy="84" r="2" fill="#1F2937" />
                <circle cx="64" cy="84" r="2" fill="#1F2937" />
                <circle cx="74" cy="84" r="2" fill="#1F2937" />

                <rect
                  x="25"
                  y="103"
                  width="65"
                  height="18"
                  rx="4"
                  fill="#111827"
                />
                <text
                  x="57.5"
                  y="115"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  className="text-[8px] font-bold"
                >
                  Sign In
                </text>
              </g>

              {/* Base line */}
              <line
                x1="20"
                y1="280"
                x2="300"
                y2="280"
                stroke="#FFFFFF"
                strokeWidth="2"
                opacity="0.6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="z-10 text-[11px] opacity-75 hidden sm:block">
            Modern & Seamless Authentication
          </div>
        </div>

        {/* Right Side: Form (7 cols) */}
        <div className="md:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between bg-white relative">
          {/* Language Selector */}
          <div className="flex justify-end">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#e0e6ed] hover:bg-[#f6f8fa] text-xs font-bold text-[#506690] transition-colors"
              >
                <svg className="w-4 h-3 rounded-xs" viewBox="0 0 640 480">
                  <path fill="#bd3d44" d="M0 0h640v480H0z" />
                  <path
                    stroke="#fff"
                    strokeWidth="37"
                    d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640"
                  />
                  <path fill="#192f5d" d="M0 0h256v258.5H0z" />
                </svg>
                <span>EN</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#888ea8]" />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-[#e0e6ed] py-1 z-20 text-xs">
                  <button
                    onClick={() => setLangOpen(false)}
                    className="w-full text-left px-3 py-1.5 hover:bg-[#EEF1FE] font-medium"
                  >
                    English (US)
                  </button>
                  <button
                    onClick={() => setLangOpen(false)}
                    className="w-full text-left px-3 py-1.5 hover:bg-[#EEF1FE] font-medium"
                  >
                    Español
                  </button>
                  <button
                    onClick={() => setLangOpen(false)}
                    className="w-full text-left px-3 py-1.5 hover:bg-[#EEF1FE] font-medium"
                  >
                    Français
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Form Content */}
          <div className="max-w-md w-full mx-auto my-auto py-3">
            <div className="mb-5 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl font-black text-[#4361EE] tracking-tight">
                SIGN IN
              </h1>
              <p className="text-xs sm:text-sm text-[#888ea8] mt-1 font-medium">
                Enter your email and password to login
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div
                  role="alert"
                  className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm font-semibold rounded-lg flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#0E1726] mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-[#888ea8]" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-[#e0e6ed] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-[#888ea8]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-[#0E1726] mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-[#888ea8]" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-[#e0e6ed] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-[#888ea8]"
                  />
                </div>
              </div>

              {/* Checkbox & Demo Helper */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20 cursor-pointer"
                  />
                  <span className="text-xs text-[#506690] font-medium">
                    Subscribe to newsletter
                  </span>
                </label>

                {/* Quick Auto-fill button for testing */}
                <button
                  type="button"
                  onClick={handleDemoFill}
                  className="text-[11px] text-primary hover:underline font-bold"
                >
                  Use Demo Account
                </button>
              </div>

              {/* Sign In Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#E11D48] via-[#8B5CF6] to-[#4361EE] hover:opacity-95 active:scale-[0.99] text-white font-extrabold text-sm tracking-wider uppercase shadow-md transition-all duration-200 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? "SIGNING IN..." : "SIGN IN"}
                </button>
              </div>
            </form>

            {/* OR Divider */}
            <div className="relative my-5 sm:my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#e0e6ed]"></div>
              </div>
              <span className="relative bg-white px-3 text-[11px] font-bold text-[#888ea8] uppercase">
                OR
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] flex items-center justify-center text-white shadow-sm hover:scale-110 transition-transform cursor-pointer"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>

              <button
                type="button"
                className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-sm hover:scale-110 transition-transform cursor-pointer"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              <button
                type="button"
                className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white shadow-sm hover:scale-110 transition-transform cursor-pointer"
                title="Twitter"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </button>

              <button
                type="button"
                className="w-9 h-9 rounded-full bg-[#EA4335] flex items-center justify-center text-white shadow-sm hover:scale-110 transition-transform cursor-pointer"
                title="Google"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </button>
            </div>

            {/* Bottom Register Switch Link */}
            <div className="mt-6 sm:mt-8 text-center text-xs">
              <span className="text-[#506690]">Don't have an account ? </span>
              <Link
                to="/signup"
                className="text-[#4361EE] font-black hover:underline uppercase tracking-wide"
              >
                SIGN UP
              </Link>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="text-center text-[11px] text-[#888ea8] mt-3 sm:mt-4">
            © 2023. VRISTO All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
