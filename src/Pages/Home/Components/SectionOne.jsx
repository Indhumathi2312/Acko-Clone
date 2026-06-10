import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { MdCheckCircle } from 'react-icons/md';

import oliveLeaves from '../../../assets/olive_Leaves.svg'
import familyImg from '../../../assets/family.png'
import carImg from '../../../assets/car.webp'
import bikeImg from '../../../assets/bike.webp'
import planeImg from '../../../assets/plane.webp'
import cardImg from '../../../assets/card.webp'
import healthImg from '../../../assets/health.webp'

// --- REUSABLE MICRO-COMPONENTS ---

const ListCheck = ({ text }) => (
  <li className="flex items-start lg:items-center gap-3 text-[14px] lg:text-[15px] font-medium text-gray-700">
    <MdCheckCircle className="w-5 h-5 text-purple-600 bg-purple-100 rounded-full min-w-[20px]" />
    {text}
  </li>
);

const TagBadge = ({ text }) => (
  <div className="inline-flex items-center bg-white border border-gray-200 shadow-sm text-[#1a113d] font-bold text-[11px] lg:text-[12px] px-3 py-1.5 rounded-full mb-4">
    <div className="bg-purple-100 p-0.5 rounded-full mr-1.5">
      <Check className="w-3 h-3 text-purple-600" strokeWidth={3} />
    </div>
    {text}
  </div>
);

const HoverArrow = () => (
  <div className="absolute bottom-5 lg:bottom-6 left-6 w-9 h-9 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center group-hover:bg-[#1a113d] group-hover:text-white group-hover:border-transparent transition-all z-10">
    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
  </div>
);


const SectionOne = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-12 lg:py-16 px-4 sm:px-6 font-sans flex justify-center overflow-hidden">
      <div className="w-full max-w-[1240px]">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 lg:mb-10 gap-6">
          <h2 className="text-3xl lg:text-[40px] leading-[1.2] lg:leading-[1.1] text-[#1a113d] tracking-tight">
            <span className="font-medium text-gray-800">We have an award-winning</span><br className="hidden sm:block" />
            <span className="font-black">insurer by your side</span>
          </h2>

          {/* Badges / Stats */}
          <div className="flex flex-wrap items-center gap-6 lg:gap-12 pb-2">
            <div className="flex items-center gap-3">
              <img src={oliveLeaves} alt="leaves" className="w-4 h-8 lg:h-10 opacity-70" />
              <span className="text-xs lg:text-[13px] font-bold text-center leading-snug text-[#1a113d]">
                India's #1*<br />insurance app
              </span>
              <img src={oliveLeaves} alt="leaves" className="w-4 h-8 lg:h-10 opacity-70 scale-x-[-1]" />
            </div>

            <div className="flex items-center gap-3">
              <img src={oliveLeaves} alt="leaves" className="w-4 h-8 lg:h-10 opacity-70" />
              <span className="text-xs lg:text-[13px] font-bold text-center leading-snug text-[#1a113d]">
                Best digital<br />insurer
              </span>
              <img src={oliveLeaves} alt="leaves" className="w-4 h-8 lg:h-10 opacity-70 scale-x-[-1]" />
            </div>
          </div>
        </div>


        {/* --- MAIN GRID LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-5">
          
          {/* LEFT: 1/3 Width Hover Card (Life Insurance) */}
          <div className="w-full lg:w-[35%] relative bg-[#F4F1FF] rounded-[32px] p-6 lg:p-8 overflow-hidden group cursor-pointer min-h-[400px] lg:min-h-[460px] shadow-sm">
            
            {/* DEFAULT STATE */}
            <div className="relative z-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-6">
              <h3 className="text-2xl lg:text-[28px] font-bold text-[#1a113d] leading-[1.2] mb-3">
                Protect your family with our<br className="hidden sm:block"/>100% pure life insurance
              </h3>
              <p className="text-gray-500 text-[13px] lg:text-[14px] mb-4">Refunded with any returns or jargons</p>
              <div className="inline-block bg-[#E8E1FF] text-[#582CDB] font-semibold text-[12px] lg:text-[13px] px-3 py-1.5 rounded-md">
                Coverage from ₹25 L to ₹100 Cr
              </div>
            </div>

            {/* DEFAULT STATE IMAGE */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[80%] h-[200px] lg:h-[240px] bg-[#E8E1FF] rounded-t-full transition-all duration-700 ease-in-out group-hover:opacity-10 group-hover:scale-90 group-hover:translate-y-16 flex items-center justify-center z-0">
              <img src={familyImg} alt="Family" className="w-full h-full object-contain" />
            </div>

            {/* HOVER REVEAL STATE */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-[#F4F1FF]/95 to-[#F4F1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <div className="absolute inset-0 p-6 lg:p-8 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-in-out translate-y-8 group-hover:translate-y-0 z-20 flex flex-col justify-between">
              <div>
                <h3 className="text-xl lg:text-[26px] font-bold text-[#1a113d] leading-[1.2] mb-4 lg:mb-6">
                  This isn't your usual term plan.<br/>Here's why.
                </h3>
                <ul className="space-y-3 lg:space-y-4">
                  <ListCheck text="Adjust your coverage when you need" />
                  <ListCheck text="Create a will for FREE" />
                  <ListCheck text="Pay less with zero commission" />
                </ul>
              </div>
              <button className="w-full bg-[#222222] text-white py-3.5 lg:py-4 rounded-2xl font-bold text-[14px] lg:text-[15px] hover:bg-black transition-colors shadow-lg">
                Check prices
              </button>
            </div>
          </div>


          {/* RIGHT: 2/3 Width Grid containing 5 small cards */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
            
            {/* 1. Car Insurance */}
            <div className="sm:col-span-2 lg:col-span-3 bg-white border border-gray-100 rounded-[32px] p-6 relative overflow-hidden group cursor-pointer hover:shadow-md transition-all shadow-sm h-[200px] lg:h-[220px]">
              <div className="relative z-10 w-[65%] sm:w-[70%]">
                <h4 className="text-xl lg:text-[22px] font-bold text-[#1a113d] mb-1">Car insurance</h4>
                <p className="text-xs lg:text-[13px] text-gray-500 mb-3 leading-relaxed"><span className="font-semibold text-[#582CDB]">Simple prices. Super fast claims.</span><br className="hidden sm:block"/>That's our promise.</p>
                <TagBadge text="Starting at just ₹2094*" />
              </div>
              
              <HoverArrow />

              <div className="absolute bottom-4 right-4 w-[100px] lg:w-[120px] h-[60px] lg:h-[70px] flex justify-center items-center group-hover:scale-105 transition-transform duration-300 z-0">
                <img src={carImg} alt="Car" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* 2. Health Insurance */}
            <div className="sm:col-span-2 lg:col-span-3 bg-white border border-gray-100 rounded-[32px] p-6 relative overflow-hidden group cursor-pointer hover:shadow-md transition-all shadow-sm h-[200px] lg:h-[220px]">
              <div className="relative z-10 w-[70%] sm:w-[75%] lg:w-[70%]">
                <h4 className="text-xl lg:text-[22px] font-bold text-[#1a113d] mb-1">Health insurance</h4>
                <p className="text-xs lg:text-[13px] text-gray-500 mb-3 leading-relaxed"><span className="font-semibold text-[#582CDB]">100% hospital bill payments</span> from syringes to surgeries.<br className="hidden sm:block"/>No surprises.</p>
                <TagBadge text="From ₹600/month" />
              </div>
              
              <HoverArrow />

              <div className="absolute bottom-2 right-2 w-[80px] lg:w-[90px] h-[80px] lg:h-[90px] flex justify-center items-center group-hover:scale-105 transition-transform duration-300 z-0">
                <img src={healthImg} alt="Health" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* 3. Bike Insurance */}
            <div className="sm:col-span-1 lg:col-span-2 bg-[#F9F9F9] border border-gray-100 rounded-[32px] p-6 relative overflow-hidden group cursor-pointer hover:shadow-md transition-all h-[200px] lg:h-[220px]">
              <div className="relative z-10 pr-16 lg:pr-10 w-[80%] sm:w-full">
                <h4 className="text-lg lg:text-[19px] font-bold text-[#1a113d] mb-2 leading-tight">Bike insurance</h4>
                <p className="text-xs lg:text-[13px] text-gray-500">Insure your bike or scooter in just 1 minute</p>
              </div>
              
              <HoverArrow />

              <div className="absolute bottom-2 right-2 w-[80px] lg:w-[90px] h-[80px] lg:h-[90px] flex justify-center items-center group-hover:scale-105 transition-transform duration-300 z-0">
                <img src={bikeImg} alt="Bike" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* 4. Travel Insurance */}
            <div className="sm:col-span-1 lg:col-span-2 bg-[#F9F9F9] border border-gray-100 rounded-[32px] p-6 relative overflow-hidden group cursor-pointer hover:shadow-md transition-all h-[200px] lg:h-[220px]">
              <div className="relative z-10 pr-16 lg:pr-10 w-[85%] sm:w-full">
                <h4 className="text-lg lg:text-[19px] font-bold text-[#1a113d] mb-2 leading-tight">Traveling soon?</h4>
                <p className="text-xs lg:text-[13px] text-gray-500"><span className="font-semibold text-[#582CDB]">Travel insurance</span> with emergency medical coverage in 150+ countries</p>
              </div>
              
              <HoverArrow />

              <div className="absolute bottom-2 right-2 w-[90px] lg:w-[100px] h-[60px] lg:h-[70px] flex justify-center items-center group-hover:scale-105 transition-transform duration-300 z-0">
                <img src={planeImg} alt="Plane" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* 5. Domestic AirPass */}
            <div className="sm:col-span-2 lg:col-span-2 bg-[#F9F9F9] border border-gray-100 rounded-[32px] p-6 relative overflow-hidden group cursor-pointer hover:shadow-md transition-all h-[200px] lg:h-[220px]">
              <div className="relative z-10 pr-20 lg:pr-14 w-[85%] sm:w-[70%] lg:w-full">
                <h4 className="text-lg lg:text-[19px] font-bold text-[#1a113d] mb-2 leading-tight">Domestic AirPass</h4>
                <p className="text-xs lg:text-[13px] text-gray-500">The only pass that pays you back for domestic flight disruptions</p>
              </div>
              
              <HoverArrow />

              <div className="absolute bottom-[-10px] right-[-10px] w-[100px] lg:w-[110px] h-[90px] lg:h-[100px] rounded-tl-xl flex justify-center items-center group-hover:scale-105 transition-transform duration-300 z-0">
                <img src={cardImg} alt="Card" className="w-full h-full object-contain" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionOne;