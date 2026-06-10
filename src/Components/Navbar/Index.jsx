import React, { useState } from 'react';
// Importing specific icons
import { ChevronDown as ChevronIcon, Car, Bike, Plane, Shield, Key, FileText, MapPin, Building, Briefcase, MessageSquare } from 'lucide-react';
import { MdHealthAndSafety } from 'react-icons/md';

import Logo from '../../assets/logo.svg'; 

// --- REUSABLE MICRO-COMPONENTS ---

const ChevronDown = ({ isOpen, className = "" }) => (
  <ChevronIcon 
    className={`w-3.5 h-3.5 ml-1 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${className}`} 
    strokeWidth={2.5}
  />
);

const MenuLink = ({ children, className = "" }) => (
  <a href="#" className={`hover:text-purple-700 transition-all font-normal flex items-center gap-2.5 ${className}`}>
    {children}
  </a>
);

const DropdownContainer = ({ title, name, activeDropdown, onEnter, onLeave, alignRight = false, children, isLi = false }) => {
  const isOpen = activeDropdown === name;
  const Wrapper = isLi ? 'li' : 'div';
  
  return (
    <Wrapper className="relative py-2 cursor-pointer flex items-center hover:text-black" onMouseEnter={() => onEnter(name)} onMouseLeave={onLeave}>
      {title} <ChevronDown isOpen={isOpen} />
      {isOpen && (
        <div className={`absolute top-full ${alignRight ? 'right-0' : 'left-0'} pt-3 z-50`}>
          {children}
        </div>
      )}
    </Wrapper>
  );
};

const MobileAccordion = ({ title, name, activeName, onClick, children }) => {
  const isOpen = activeName === name;
  return (
    <div className="flex flex-col border-b border-gray-50 pb-2">
      <button className="flex justify-between items-center py-3 w-full text-left font-medium" onClick={() => onClick(name)}>
        {title} <ChevronDown isOpen={isOpen} />
      </button>
      {isOpen && <div className="flex flex-col gap-3 pl-4 pb-3 text-[14px] text-gray-600 font-normal">{children}</div>}
    </div>
  );
};


// --- MAIN NAVBAR COMPONENT ---

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeProductTab, setActiveProductTab] = useState('Car insurance');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveAccordion, setMobileActiveAccordion] = useState(null);

  const handleMouseEnter = (menu) => window.innerWidth >= 1024 && setActiveDropdown(menu);
  const handleMouseLeave = () => window.innerWidth >= 1024 && setActiveDropdown(null);
  const toggleMobileAccordion = (menu) => setMobileActiveAccordion(mobileActiveAccordion === menu ? null : menu);

  // Array to map product tabs with their respective Lucide/React icons
  const productTabs = [
    { name: 'Car insurance', Icon: Car },
    { name: 'Bike insurance', Icon: Bike },
    { name: 'Health insurance', Icon: MdHealthAndSafety },
    { name: 'Life insurance', Icon: Shield },
    { name: 'Travel insurance', Icon: Plane }
  ];

  return (
    <div className="relative w-full py-6 p-4 lg:p-8 bg-gray-100 flex justify-center font-sans">
      <nav className={`absolute top-4 lg:top-6 flex flex-col w-full max-w-[1240px]  bg-white shadow-md border border-gray-100 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'rounded-2xl' : 'rounded-full lg:rounded-2xl'}`}>
        
        {/* === TOP BAR === */}
        <div className="flex items-center justify-between w-full px-6 py-3">
          
          {/* LEFT: Logo & Desktop Links */}
          <div className="flex items-center gap-10">
            <div className="flex items-center cursor-pointer z-50">
              <img src={Logo} alt="ACKO Logo" className="h-6 sm:h-7 lg:h-8 w-auto" />
            </div>

            <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-700">
              
              {/* Products Mega Menu */}
              <DropdownContainer title="Products" name="products" activeDropdown={activeDropdown} onEnter={handleMouseEnter} onLeave={handleMouseLeave} isLi>
                <div className="w-[720px] bg-white border border-gray-100 shadow-xl rounded-2xl flex overflow-hidden text-gray-800 cursor-default">
                  <div className="w-1/3 bg-gray-50/70 p-4 border-r border-gray-100 flex flex-col gap-1">
                    {productTabs.map(({ name, Icon }) => (
                      <div 
                        key={name} 
                        onMouseEnter={() => setActiveProductTab(name)} 
                        className={`flex items-center justify-between p-3 rounded-xl transition-all font-medium text-[14px] cursor-pointer ${activeProductTab === name ? 'bg-white shadow-sm text-black' : 'text-gray-600 hover:bg-gray-100/50'}`}
                      >
                        <span className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-purple-600" /> {name}
                        </span> 
                        <span className="text-gray-400 text-xs font-light">&gt;</span>
                      </div>
                    ))}
                  </div>
                  <div className="w-1/3 p-6 flex flex-col gap-4 text-[14px]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Types of policies</span>
                    <div className="flex flex-col gap-3">
                      <MenuLink>Comprehensive insurance</MenuLink>
                      <MenuLink>Third party insurance</MenuLink>
                    </div>
                  </div>
                  <div className="w-1/3 p-4 bg-[#232323] text-white flex flex-col justify-between border-l border-gray-100 m-2 rounded-xl">
                    <h4 className="font-bold text-[15px] leading-snug">The only pass that pays you back</h4>
                    <button className="mt-4 bg-white text-black text-xs font-semibold py-2.5 px-4 rounded-lg w-32 hover:bg-gray-200">Know more &gt;</button>
                  </div>
                </div>
              </DropdownContainer>

              <li className="cursor-pointer hover:text-black py-2">Enterprise</li>

              {/* Why ACKO Menu */}
              <DropdownContainer title="Why ACKO?" name="why-acko" activeDropdown={activeDropdown} onEnter={handleMouseEnter} onLeave={handleMouseLeave} isLi>
                <div className="w-[300px] bg-white border border-gray-100 shadow-xl rounded-2xl flex flex-col p-4 gap-3 text-gray-800 text-[14px]">
                  <MenuLink><Building className="w-4 h-4 text-purple-600" /> About Us</MenuLink>
                  <MenuLink><Briefcase className="w-4 h-4 text-purple-600" /> Careers</MenuLink>
                  <MenuLink><MessageSquare className="w-4 h-4 text-purple-600" /> Customer stories</MenuLink>
                </div>
              </DropdownContainer>

              <li className="cursor-pointer hover:text-black py-2">Support</li>
            </ul>
          </div>

          {/* RIGHT: Desktop Actions & Mobile Burger */}
          <div className="flex items-center gap-4 text-[15px] font-medium text-gray-700">
            
            <div className="hidden lg:flex items-center gap-5">
              {/* Renewals */}
              <DropdownContainer title="Renewals" name="renewals" activeDropdown={activeDropdown} onEnter={handleMouseEnter} onLeave={handleMouseLeave} alignRight>
                <div className="w-[280px] bg-white shadow-xl border border-gray-100 rounded-xl p-4 flex flex-col gap-4 text-gray-800 cursor-default">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">New to ACKO?</span>
                    <div className="flex flex-col gap-3 text-[13px]">
                      <MenuLink><MdHealthAndSafety className="w-4 h-4 text-purple-600" /> Renew health insurance</MenuLink>
                      <MenuLink><Car className="w-4 h-4 text-purple-600" /> Renew car insurance</MenuLink>
                      <MenuLink><Bike className="w-4 h-4 text-purple-600" /> Renew bike insurance</MenuLink>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Existing Customer</span>
                    <MenuLink className="text-[13px]"><Key className="w-4 h-4 text-purple-600" /> Login and renew</MenuLink>
                  </div>
                </div>
              </DropdownContainer>

              {/* Claims */}
              <DropdownContainer 
                title={<span className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 bg-white">Claims</span>} 
                name="claims" activeDropdown={activeDropdown} onEnter={handleMouseEnter} onLeave={handleMouseLeave} alignRight
              >
                <div className="w-[180px] bg-white shadow-xl border border-gray-100 rounded-xl p-2 flex flex-col">
                  <MenuLink className="p-2 hover:bg-gray-50 rounded-lg text-[13px]"><FileText className="w-4 h-4 text-purple-600" /> File a claim</MenuLink>
                  <MenuLink className="p-2 hover:bg-gray-50 rounded-lg text-[13px]"><MapPin className="w-4 h-4 text-purple-600" /> Track a claim</MenuLink>
                </div>
              </DropdownContainer>

              <button className="px-6 py-2 text-white bg-[#1a113d] rounded-lg hover:bg-black font-semibold">Login</button>

              {/* Language Picker */}
              <DropdownContainer 
                title={<div className={`flex items-center justify-center px-1.5 py-0.5 border rounded-md bg-white transition-colors ${activeDropdown === 'language' ? 'border-black' : 'border-gray-300'}`}><span className="text-[11px] font-bold leading-none">A/अ</span></div>}
                name="language" activeDropdown={activeDropdown} onEnter={handleMouseEnter} onLeave={handleMouseLeave} alignRight
              >
                 <div className="w-[120px] bg-white border border-gray-100 shadow-xl rounded-xl p-2 flex flex-col gap-1 text-gray-800">
                    <MenuLink className="p-2 hover:bg-gray-50 rounded-lg text-[13px]"><span className="font-bold text-gray-600">A</span> English</MenuLink>
                    <MenuLink className="p-2 hover:bg-gray-50 rounded-lg text-[13px]"><span className="font-bold text-gray-600">अ</span> Hindi</MenuLink>
                 </div>
              </DropdownContainer>
            </div>

            {/* Hamburger Icon */}
            <button className="lg:hidden p-2 text-gray-700 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* === MOBILE MENU ACCORDION === */}
        <div className={`lg:hidden flex flex-col px-6 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[80vh] pb-6 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-2 font-medium text-gray-800">
            
            <MobileAccordion title="Products" name="products" activeName={mobileActiveAccordion} onClick={toggleMobileAccordion}>
              <MenuLink><Car className="w-4 h-4 text-purple-600" /> Car Insurance</MenuLink>
              <MenuLink><Bike className="w-4 h-4 text-purple-600" /> Bike Insurance</MenuLink>
              <MenuLink><MdHealthAndSafety className="w-4 h-4 text-purple-600" /> Health Insurance</MenuLink>
              <MenuLink><Plane className="w-4 h-4 text-purple-600" /> Travel Insurance</MenuLink>
            </MobileAccordion>

            <a href="#" className="py-3 border-b border-gray-50">Enterprise</a>
            
            <MobileAccordion title="Why ACKO?" name="why" activeName={mobileActiveAccordion} onClick={toggleMobileAccordion}>
              <MenuLink><Building className="w-4 h-4 text-purple-600" /> About Us</MenuLink>
              <MenuLink><Briefcase className="w-4 h-4 text-purple-600" /> Careers</MenuLink>
              <MenuLink><MessageSquare className="w-4 h-4 text-purple-600" /> Customer Stories</MenuLink>
            </MobileAccordion>

            <a href="#" className="py-3 border-b border-gray-50">Support</a>
            
            <div className="flex flex-col gap-3 mt-4">
              <button className="w-full py-3 border border-gray-300 rounded-lg flex justify-center items-center gap-2 bg-white font-medium">Claims</button>
              <button className="w-full py-3 text-white bg-[#1a113d] rounded-lg font-semibold">Login</button>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;