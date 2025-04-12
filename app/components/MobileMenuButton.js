'use client';

export default function MobileMenuButton() {
  const openMobileMenu = () => {
    document.getElementById('mobileMenu').style.transform = 'translateX(0)';
  };

  return (
    <button
      onClick={openMobileMenu}
      className="lg:hidden text-black hover:text-[#1055AE] transition-colors"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}