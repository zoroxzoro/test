import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-8 pt-4 pb-6 border-t border-[#e0e6ed] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888ea8]">
      <p>© 2023. Vristo All rights reserved.</p>

      {/* Scroll to Top floating / inline button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#4361EE] hover:bg-[#344ec7] text-white flex items-center justify-center shadow-lg hover:shadow-primary/40 active:scale-95 transition-all"
        title="Scroll to Top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </footer>
  );
}

