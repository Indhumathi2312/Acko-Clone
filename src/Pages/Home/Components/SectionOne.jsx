import React, { useState } from 'react';
import { 
  Car, 
  Wifi, 
  CreditCard, 
  Wallet, 
  Lightbulb, 
  Trophy, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  ArrowLeft, 
  Lock, 
  Star 
} from 'lucide-react';

const products = [
  { id: 'car', name: 'Car insurance', badge: 'Earn £15', icon: Car, linkText: 'Car Insurance' },
  { id: 'broadband', name: 'Broadband', badge: 'Earn £20', icon: Wifi, linkText: 'Broadband' },
  { id: 'credit-cards', name: 'Credit cards', badge: 'Earn £10', icon: CreditCard, linkText: 'Credit Cards' },
  { id: 'current-accounts', name: 'Current accounts', badge: 'Earn £15', icon: Wallet, linkText: 'Current Accounts' },
  { id: 'energy', name: 'Energy', badge: 'Earn £10', icon: Lightbulb, linkText: 'Energy' },
];

const SectionOne = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      logo: (
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-[#0072C6] flex items-center justify-center p-2 shadow-sm flex-shrink-0">
            {/* British Gas style SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" />
              <path d="M50 20C38 35 38 65 50 80C62 65 62 35 50 20Z" fill="currentColor" />
              <path d="M50 35C44 48 44 68 50 72C56 68 56 48 50 35Z" fill="#8FD5F8" />
              <circle cx="50" cy="50" r="10" fill="#002B49" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[#002B49] font-extrabold text-base md:text-lg tracking-tight leading-tight">British Gas</span>
          </div>
        </div>
      ),
      title: "Fix your energy",
      description: "Secure an exclusive fixed energy deal from British Gas",
      btnText: "Fix your energy now",
    },
    {
      id: 2,
      logo: (
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#006f52] rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
            {/* Piggy bank SVG */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
              <path d="M19 9a7 7 0 1 0-13.6 2.3C4.6 11.7 4 12.8 4 14a2 2 0 0 0 2 2h.5l.5 3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2.5h2V19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1l.5-3h.5a2 2 0 0 0 2-2c0-1.2-.6-2.3-1.4-2.7C18.8 10.4 19 9.7 19 9z" />
              <path d="M14 4h-4" />
              <path d="M12 4v4" />
              <circle cx="9" cy="10" r="0.75" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[#006f52] font-extrabold text-base md:text-lg tracking-tight leading-tight">Win a £2,500 easyJet voucher</span>
          </div>
        </div>
      ),
      title: "Win a £2,500 easyJet voucher",
      description: "Open a Savings by MoneySuperMarket account and add at least £100 by 14th July to enter. T&Cs apply.",
      btnText: "Enter now",
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const SelectedIcon = selectedProduct.icon;

  return (
    <section className="relative w-full bg-[#160d33] min-h-[640px] flex flex-col justify-between overflow-hidden pt-14 md:pt-24 font-jakarta">
      
      {/* Background blobs for organic purple glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#3b1d7d]/40 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-[#4c22a3]/30 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[30%] left-[35%] w-[400px] h-[400px] bg-[#271457]/35 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6 relative z-10 flex-1 flex flex-col items-center justify-center pb-14">
        
        {/* Title */}
        <h1 className="text-center font-extrabold tracking-tight text-white mb-4 text-4xl md:text-5xl lg:text-6.5xl">
          Where <span className="text-[#9fa6ff]">better off</span> begins
        </h1>

        {/* Subtext */}
        <p className="flex flex-wrap items-center justify-center gap-2 text-center text-[#c2b9eb] text-sm md:text-base font-medium mb-10 max-w-[700px] leading-relaxed">
          Select a qualifying product to start earning rewards today with
          <span className="inline-flex items-center gap-1 bg-[#2b185f]/80 border border-[#6b52c0]/40 px-2.5 py-0.5 rounded-full text-xs font-bold text-[#fbcfe8]">
            <Trophy className="w-3.5 h-3.5 text-[#e5c158] fill-[#e5c158]" />
            <span className="text-[#ebd498] tracking-wider font-extrabold text-[10px]">SUPERSAVECLUB</span>
          </span>
        </p>

        {/* Dropdown & CTA Button Container */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full max-w-[620px] mb-4 relative">
          
          {/* Custom Dropdown Selector */}
          <div className="relative flex-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full h-14 bg-white hover:bg-slate-50 text-[#130a2a] px-5 rounded-2xl flex items-center justify-between shadow-xl border border-transparent transition-all duration-200 text-left font-semibold focus:outline-none cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <SelectedIcon className="w-5 h-5 text-indigo-950" strokeWidth={2.2} />
                <span className="text-[15px] font-bold text-slate-800">{selectedProduct.name}</span>
                <span className="bg-[#ebd4a2] text-[#4a3b10] font-extrabold text-[11px] px-2 py-0.5 rounded shadow-sm">
                  {selectedProduct.badge}
                </span>
              </div>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-slate-500" strokeWidth={2.5} />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-500" strokeWidth={2.5} />
              )}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
                <div className="absolute top-[105%] left-0 w-full bg-white rounded-2xl shadow-2xl border border-slate-100 py-1.5 z-50 overflow-hidden transform origin-top transition-all duration-150">
                  {products.map((prod) => {
                    const ProdIcon = prod.icon;
                    const isSelected = prod.id === selectedProduct.id;
                    return (
                      <button
                        key={prod.id}
                        onClick={() => {
                          setSelectedProduct(prod);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3.5 flex items-center justify-between hover:bg-indigo-50/60 cursor-pointer transition-colors duration-150 ${
                          isSelected ? 'bg-indigo-50/80 font-bold' : 'font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <ProdIcon className={`w-5 h-5 ${isSelected ? 'text-indigo-600' : 'text-slate-500'}`} strokeWidth={2.2} />
                          <span className={`text-[15px] ${isSelected ? 'text-indigo-950 font-bold' : 'text-slate-700'}`}>
                            {prod.name}
                          </span>
                        </div>
                        <span className="bg-[#ebd4a2] text-[#4a3b10] font-extrabold text-[11px] px-2 py-0.5 rounded shadow-sm">
                          {prod.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Quote Button */}
          <button className="h-14 bg-[#df5695] hover:bg-[#d44b88] active:scale-[0.98] text-slate-900 font-extrabold text-[15px] px-6 rounded-2xl flex items-center justify-center gap-3.5 shadow-xl transition-all duration-200 cursor-pointer flex-shrink-0">
            <span>Get a quote</span>
            <div className="w-7 h-7 bg-[#130a2a] rounded-full flex items-center justify-center text-white">
              <ArrowRight className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
          </button>
        </div>

        {/* Find out more link */}
        <a
          href="#"
          className="text-white hover:text-indigo-200 text-sm font-semibold flex items-center gap-1.5 mb-12 transition-colors duration-150"
        >
          <span>Find out more about {selectedProduct.linkText}</span>
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </a>

        {/* Slider Card Section */}
        <div className="w-full max-w-[860px] flex flex-col items-center">
          
          {/* Active Card */}
          <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 border border-slate-100">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 flex-1 text-center md:text-left">
              {/* Logo */}
              {slides[currentSlide].logo}
              
              {/* Title & Desc */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-[#130a2a] mb-1.5 tracking-tight">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-sm md:text-[15px] text-slate-500 font-medium leading-relaxed">
                  {slides[currentSlide].description.includes("T&Cs apply") ? (
                    <>
                      Open a Savings by MoneySuperMarket account and add at least £100 by 14th July to enter.{' '}
                      <a href="#" className="text-indigo-600 underline font-semibold hover:text-indigo-800 transition-colors">
                        T&Cs apply.
                      </a>
                    </>
                  ) : (
                    slides[currentSlide].description
                  )}
                </p>
              </div>
            </div>

            {/* Action button in the card */}
            <button className="w-full md:w-auto px-6 py-3.5 bg-[#dfdaff] hover:bg-[#d0c9ff] active:scale-[0.98] text-[#1a113d] font-extrabold text-[14px] rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-150 cursor-pointer">
              <span>{slides[currentSlide].btnText}</span>
              <div className="w-6 h-6 bg-[#1a113d] rounded-full flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </div>
            </button>
          </div>

          {/* Navigator Indicators */}
          <div className="flex items-center gap-4 mt-6">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-lg bg-[#271d44] hover:bg-[#342858] text-indigo-300 hover:text-white flex items-center justify-center transition-colors duration-150 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
            </button>

            {/* Dot/Line Indicators */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide ? 'w-10 bg-[#9e83ff]' : 'w-5 bg-[#2a1f4f]'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-lg bg-[#271d44] hover:bg-[#342858] text-indigo-300 hover:text-white flex items-center justify-center transition-colors duration-150 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

      </div>

      {/* Trust Footer Strip */}
      <div className="w-full bg-[#f4f6fa] border-t border-slate-200 py-4 px-6 mt-8">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm font-semibold text-slate-800">
          
          {/* Price Promise */}
          <div className="flex items-center gap-2 text-[#130a2a]">
            <Lock className="w-4 h-4 text-slate-700" strokeWidth={2.5} />
            <span className="font-extrabold tracking-wide uppercase text-[11px] md:text-xs">Price Promise</span>
          </div>

          {/* Middle text */}
          <div className="text-center text-slate-500 font-semibold text-[11px] md:text-xs tracking-wide">
            We're the UK's most recommended price comparison website^
          </div>

          {/* Trustpilot */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-600">4.8/5</span>
            <div className="flex items-center gap-0.5 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <Star className="w-3.5 h-3.5 fill-amber-500" />
            </div>
            <div className="flex items-center gap-1 ml-1 text-slate-800 font-extrabold text-sm">
              <span className="text-[#00b67a] text-lg leading-none">★</span>
              <span>Trustpilot</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default SectionOne;