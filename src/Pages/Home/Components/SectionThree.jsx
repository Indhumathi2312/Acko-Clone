import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Disc } from 'lucide-react';

// Imported Assets
import blackCar from '../../../assets/black_car.webp';
import blueCar from '../../../assets/blue_car.webp';
import yellowCar from '../../../assets/yellow_car.webp';
import large from '../../../assets/large-bg.webp';
import medium from '../../../assets/tab-bg.webp';
import small from '../../../assets/mobile-bg.webp';

const carData = [
  {
    id: 1,
    name: "Tata Sierra",
    image: yellowCar,
    price: "₹13.1 Lakhs",
    originalPrice: "₹13.3 Lakhs",
    savings: "₹21,695"
  },
  {
    id: 2,
    name: "Hyundai Creta",
    image: blackCar,
    price: "₹12.0 Lakhs",
    originalPrice: "₹12.4 Lakhs",
    savings: "₹43,936"
  },
  {
    id: 3,
    name: "KIA Seltos",
    image: blueCar,
    price: "₹12.6 Lakhs",
    originalPrice: "₹12.7 Lakhs",
    savings: "₹26,519"
  }
];

const SectionThree = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const handlePrev = () => {
    setCenterIndex((prev) => (prev === 0 ? carData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev === carData.length - 1 ? 0 : prev + 1));
  };

  // UPDATED: Side cars are hidden on mobile (opacity-0) and scaled/spaced better for md screens
  const getPositionClasses = (index) => {
    if (index === centerIndex) {
      // Center (Active) Car - Visible on all screens
      return "left-1/2 -translate-x-1/2 bottom-0 scale-100 z-30 opacity-100 drop-shadow-2xl pointer-events-auto";
    } else if (index === (centerIndex + 1) % carData.length) {
      // Right Car - Hidden on mobile, visible on sm and above
      return "left-[85%] md:left-[80%] lg:left-[80%] -translate-x-1/2 bottom-[10%] md:bottom-[15%] scale-[0.55] md:scale-[0.6] z-10 opacity-0 sm:opacity-60 pointer-events-none sm:pointer-events-auto cursor-pointer drop-shadow-lg";
    } else {
      // Left Car - Hidden on mobile, visible on sm and above
      return "left-[15%] md:left-[20%] lg:left-[20%] -translate-x-1/2 bottom-[10%] md:bottom-[15%] scale-[0.55] md:scale-[0.6] z-10 opacity-0 sm:opacity-60 pointer-events-none sm:pointer-events-auto cursor-pointer drop-shadow-lg";
    }
  };

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[850px] py-16 flex flex-col items-center overflow-hidden font-jakarta">
      
      {/* --- RESPONSIVE BACKGROUND IMAGES --- */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {/* Mobile */}
        <img src={small} alt="Showroom Background" className="w-full h-full object-cover block sm:hidden" />
        {/* Tablet */}
        <img src={medium} alt="Showroom Background" className="w-full h-full object-cover hidden sm:block lg:hidden" />
        {/* Desktop */}
        <img src={large} alt="Showroom Background" className="w-full h-full object-cover hidden lg:block" />
      </div>

      {/* --- HEADER --- */}
      <div className="text-center mt-2 md:mt-8 mb-12 md:mb-20 z-10 px-4">
        <h2 className="text-[28px] md:text-[40px] font-bold mb-3 md:mb-4 text-[#1a113d] tracking-tight">
          Save as much as ₹80,000 on top-selling cars
        </h2>
        <p className="text-sm md:text-[16px] text-gray-700 font-medium">
          Explore, compare, and book your brand new car<br className="block sm:hidden" /> from our digital showroom
        </p>
      </div>

      {/* --- 3D CAR CAROUSEL --- */}
      {/* UPDATED: Fine-tuned widths for smooth scaling across breakpoints */}
      <div className="relative w-full max-w-7xl h-[180px] sm:h-[260px] md:h-[300px] lg:h-[350px] mb-12 z-10">
        {carData.map((car, index) => (
          <div 
            key={car.id} 
            onClick={() => {
              // Only allow clicking side cars if they are visible (sm and up)
              if (window.innerWidth >= 640) {
                if (index === (centerIndex + 1) % carData.length) handleNext();
                if (index === (centerIndex - 1 + carData.length) % carData.length) handlePrev();
              }
            }}
            className={`absolute transition-all duration-700 ease-in-out origin-bottom flex justify-center w-[280px] sm:w-[320px] md:w-[380px] lg:w-[460px] ${getPositionClasses(index)}`}
          >
            <img 
              src={car.image} 
              alt={car.name} 
              className="w-full h-auto object-contain pointer-events-none" 
            />
          </div>
        ))}
      </div>

      {/* --- DETAILS BOX & CONTROLS --- */}
      <div className="z-20 flex items-center justify-center gap-3 md:gap-8 w-full px-4 mt-auto">
        
        {/* Prev Button */}
        <button 
          onClick={handlePrev} 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 bg-white/50 backdrop-blur-md flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-md transition-all flex-shrink-0"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        {/* Dynamic Data Box */}
        <div className="bg-white/95 backdrop-blur-xl shadow-xl border border-white rounded-[32px] p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-12 min-w-[280px] sm:min-w-[450px] md:min-w-[500px] transition-all duration-500">
          
          {/* Left: Car Name */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-[#1a113d] text-lg md:text-xl leading-tight">
              {carData[centerIndex].name}
            </h3>
            <p className="text-[11px] md:text-xs text-gray-500 font-medium mt-0.5">
              Price starts from
            </p>
          </div>

          {/* Right: Pricing & Savings */}
          <div className="flex flex-col items-center sm:items-end">
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-bold text-[#1a113d] text-base md:text-lg">
                {carData[centerIndex].price}
              </span>
              <span className="text-[11px] md:text-xs text-gray-400 line-through font-medium">
                {carData[centerIndex].originalPrice}
              </span>
            </div>
            <div className="bg-[#E6F7ED] text-[#0A883F] font-bold text-[11px] md:text-xs px-3.5 py-1.5 rounded-full border border-[#bbf0d2]">
              You save {carData[centerIndex].savings}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={handleNext} 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 bg-white/50 backdrop-blur-md flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-md transition-all flex-shrink-0"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* --- FOOTER CTA --- */}
      <div className="mt-12 md:mt-16 z-20 flex flex-col items-center pb-8">
        <button className="bg-[#1a113d] text-white px-8 py-3.5 rounded-xl font-bold text-[15px] hover:bg-black transition-colors shadow-lg">
          Visit our digital showroom
        </button>
        
        <div className="mt-5 flex items-center gap-1.5 text-xs text-gray-500 font-medium">
          Powered by <Disc className="w-4 h-4 text-emerald-500 ml-1" fill="currentColor" /> <span className="font-bold text-[#1a113d] tracking-wide">ACKODRIVE</span>
        </div>
      </div>

    </section>
  );
};

export default SectionThree;