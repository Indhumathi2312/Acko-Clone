import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.svg'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll Listener Logic for hiding/showing navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar if scrolling down and past 50px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu if open
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Desktop Nav Pill Styles
  const navItemStyle = "cursor-pointer px-4 py-2 rounded-xl font-normal text-[15px] text-gray-800 hover:bg-[#ebecef] transition-all duration-200";

  return (
    // Outer Wrapper with sticky positioning and scroll-triggered transform animation
    <div 
      className={`sticky top-0 left-0 w-full z-[100] bg-white font-jakarta px-4 py-4 lg:px-8 lg:py-6 font-jakarta transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* === FLOATING PILL NAVBAR === */}
      <nav className={`relative max-w-[1400px] mx-auto bg-[#f8f9fa] shadow-sm z-50 transition-all duration-300 ${isMobileMenuOpen ? 'rounded-[2rem]' : 'rounded-full'}`}>
        
        {/* HEADER ROW */}
        <div className="flex items-center justify-between w-full px-5 py-3 lg:px-8 lg:py-3.5">
          
          {/* LEFT: Logo & Desktop Links */}
          <div className="flex items-center gap-8 xl:gap-10">
            <div className="flex items-center cursor-pointer z-50 pr-2">
              <img src={Logo} alt="ACKO Logo" className="h-6 lg:h-7 w-auto object-contain" />
            </div>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-1">
              <li className={navItemStyle}>Products</li>
              <li className={navItemStyle}>Enterprise</li>
              <li className={navItemStyle}>Why ACKO?</li>
              <li className={navItemStyle}>Support</li>
            </ul>
          </div>

          {/* RIGHT: Responsive Actions */}
          <div className="flex items-center gap-3 text-[14px] lg:text-[15px] font-normal text-gray-800">
            
            {/* Renewals (Hidden on Mobile/Tablet) */}
            <button className="hidden lg:block px-4 py-2 hover:bg-[#ebecef] rounded-xl transition-colors">
              Renewals
            </button>

            {/* Claims (Visible on all screens) */}
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-[12px] hover:bg-gray-100 bg-white transition-colors">
              Claims
            </button>

            {/* Login (Hidden on Mobile/Tablet) */}
            {/* <button className="hidden lg:block px-6 py-2.5 text-white bg-[#111] rounded-[12px] hover:bg-black font-medium transition-all">
              Login
            </button> */}

            {/* Language Picker */}
            {/* <button className="flex items-center justify-center p-1.5 lg:p-2 border border-gray-800 rounded-[8px] bg-transparent hover:bg-gray-100 transition-colors mx-1 lg:mx-2">
              <span className="font-bold text-[12px] leading-none flex items-center gap-[1px]">
                A<span className="text-[9px]">/अ</span>
              </span>
            </button> */}

            {/* Hamburger Icon (Mobile/Tablet) */}
            <button 
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] p-2 w-8 h-8 focus:outline-none" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`block w-5 h-[1.5px] bg-gray-900 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></span>
              <span className={`block w-5 h-[1.5px] bg-gray-900 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}></span>
            </button>
            
          </div>
        </div>

        {/* === MOBILE MENU (Expands inside the pill) === */}
        <div className={`lg:hidden flex flex-col px-6 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[80vh] pb-6 opacity-100 overflow-y-auto border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col pt-2 font-medium text-gray-800">
            
            <a href="#" className="py-4 border-b border-gray-100 hover:text-purple-700 text-[15px]">Products</a>
            <a href="#" className="py-4 border-b border-gray-100 hover:text-purple-700 text-[15px]">Enterprise</a>
            <a href="#" className="py-4 border-b border-gray-100 hover:text-purple-700 text-[15px]">Why ACKO?</a>
            <a href="#" className="py-4 border-b border-gray-100 hover:text-purple-700 text-[15px]">Support</a>
            
            <div className="flex flex-col gap-3 mt-6">
              <button className="w-full py-3 border border-gray-300 rounded-[12px] flex justify-center items-center gap-2 bg-white font-medium hover:bg-gray-50">Claims</button>
              {/* <button className="w-full py-3 text-white bg-[#111] rounded-[12px] font-semibold hover:bg-black">Login</button> */}
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;