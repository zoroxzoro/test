import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contact, User, Lock, ChevronDown } from "lucide-react";
import TopNavSwitcher from "../components/TopNavSwitcher";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:4000/api/user/signUP", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      console.log(response);

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to create account");
      }

      navigate("/");
    } catch (requestError) {
      setError(
        requestError instanceof TypeError
          ? "Could not reach the API. Check that the backend is running."
          : requestError.message,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#FAF7FD] flex flex-col items-center justify-center p-3 sm:p-6 pb-24 sm:pb-6">
      {/* Quick Switcher for design inspection */}
      <TopNavSwitcher />

      {/* Background Organic Topographic & World Map Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.045] flex items-center justify-center">
        <svg viewBox="0 0 1000 600" className="w-full h-full object-cover">
          <pattern
            id="dot-pattern-signup"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#4361EE" />
          </pattern>
          <rect width="1000" height="600" fill="url(#dot-pattern-signup)" />
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
      <div className="absolute top-1/2 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-blue-300/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Centered Modern Card */}
      <div className="relative z-10 w-full max-w-[480px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-9 border border-white/70">
        {/* Top Right Language Switcher */}
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

        {/* Header Heading */}
        <div className="mt-1 sm:mt-2 mb-5 sm:mb-6 text-left">
          <h1 className="text-2xl sm:text-3xl font-black text-[#4361EE] tracking-tight">
            SIGN UP
          </h1>
          <p className="text-xs sm:text-sm text-[#888ea8] mt-1 font-medium">
            Enter your email and password to register
          </p>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p role="alert" className="text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-[#0E1726] mb-1.5">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Contact className="h-4 w-4 text-[#888ea8]" />
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-[#e0e6ed] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-[#888ea8]"
              />
            </div>
          </div>

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

          {/* Newsletter Checkbox */}
          <div className="flex items-center pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={subscribe}
                onChange={(e) => setSubscribe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20 cursor-pointer"
              />
              <span className="text-xs text-[#506690] font-medium">
                Subscribe to weekly newsletter
              </span>
            </label>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#E11D48] via-[#8B5CF6] to-[#4361EE] hover:opacity-95 active:scale-[0.99] text-white font-extrabold text-sm tracking-wider uppercase shadow-md transition-all duration-200 cursor-pointer"
            >
              {isSubmitting ? "CREATING ACCOUNT..." : "SIGN UP"}
            </button>
          </div>
        </form>

        {/* OR Divider */}
        <div className="relative my-5 sm:my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#e0e6ed]"></div>
          </div>
          <span className="relative bg-white/90 px-3 text-[11px] font-bold text-[#888ea8] uppercase">
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

        {/* Bottom Link to Sign In */}
        <div className="mt-6 sm:mt-8 text-center text-xs">
          <span className="text-[#506690]">Already have an account ? </span>
          <Link
            to="/signin"
            className="text-[#4361EE] font-black hover:underline uppercase tracking-wide"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}
