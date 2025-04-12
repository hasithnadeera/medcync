'use client';

import Link from 'next/link';

export default function MobileMenu() {
  const closeMobileMenu = () => {
    document.getElementById('mobileMenu').style.transform = 'translateX(-100%)';
  };

  return (
    <div className="fixed inset-0 bg-[#1055AE] z-50 transform transition-transform duration-300 ease-in-out lg:hidden" style={{ transform: 'translateX(-100%)' }} id="mobileMenu">
      <div className="flex flex-col h-full p-8">
        <div className="flex justify-end">
          <button 
            onClick={closeMobileMenu} 
            className="text-white p-2 hover:text-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-6 mt-12">
          <Link href="/" className="text-white text-xl font-medium hover:text-gray-200 transition-colors">Home</Link>
          <Link href="/features" className="text-white text-xl font-medium hover:text-gray-200 transition-colors">Features</Link>
          <Link href="/faq" className="text-white text-xl font-medium hover:text-gray-200 transition-colors">FAQ</Link>
          <Link href="/contact" className="text-white text-xl font-medium hover:text-gray-200 transition-colors">Contact</Link>
          <Link href="/signup" className="bg-white text-[#1055AE] px-6 py-2 rounded-[10px] text-center text-xl font-medium hover:bg-gray-100 transition-colors mt-4">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}