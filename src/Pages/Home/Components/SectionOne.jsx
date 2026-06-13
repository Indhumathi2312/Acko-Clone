
// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Check } from 'lucide-react';
// import { MdCheckCircle } from 'react-icons/md';

// // Ensure your assets are correctly placed in these paths
// import oliveLeaves from '../../../assets/olive_Leaves.svg'
// import familyImg from '../../../assets/family.png'
// import carImg from '../../../assets/car.webp'
// import bikeImg from '../../../assets/bike.webp'
// import planeImg from '../../../assets/plane.webp'
// import cardImg from '../../../assets/card.webp'
// import healthImg from '../../../assets/health.webp'

// import tower from '../../../assets/tower.svg'
// import pci from '../../../assets/pci.svg'

// // --- REUSABLE MICRO-COMPONENTS ---

// const ListCheck = ({ text }) => (
//   <li className="flex items-start lg:items-center gap-3 text-[12px] lg:text-[15px] font-medium text-gray-700">
//     <MdCheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600 bg-purple-100 rounded-full min-w-[16px] lg:min-w-[20px]" />
//     {text}
//   </li>
// );

// // Styled specifically to match the mobile pill (no icon, light purple bg)
// const TagBadge = ({ text }) => (
//   <div className="inline-flex items-center bg-[#E8E1FF] text-[#582CDB] font-bold text-[9px] lg:text-[12px] px-2 py-1 lg:px-3 lg:py-1.5 rounded-full mb-2 lg:mb-4 z-10 relative w-max">
//     <div className="hidden lg:flex bg-purple-100 p-0.5 rounded-full mr-1.5">
//       <Check className="w-3 h-3 text-purple-600" strokeWidth={3} />
//     </div>
//     {text}
//   </div>
// );

// const HoverArrow = () => (
//   <div className="absolute bottom-3 left-3 lg:bottom-6 lg:left-6 w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center group-hover:bg-[#1a113d] group-hover:text-white group-hover:border-transparent transition-all z-10 shadow-sm">
//     <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" strokeWidth={2.5} />
//   </div>
// );

// const SectionOne = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Trigger scroll animations shortly after mount
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="w-full bg-[#e8e8e8] lg:bg-[#e8e8e8]  py-8 lg:py-16 px-3 lg:px-6 font-jakarta flex justify-center overflow-hidden">
//       <div className="w-full max-w-[1240px]">
        
//         {/* --- HEADER SECTION --- */}
//         <div className={`flex flex-col md:flex-row justify-between items-center md:items-end mb-6 lg:mb-10 gap-4 lg:gap-6 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <h2 className="hidden md:block text-3xl lg:text-[40px] leading-[1.2] lg:leading-[1.1] text-[#1a113d] tracking-tight">
//             <span className="font-medium text-gray-800">We have an award-winning</span><br />
//             <span className="font-black">insurer by your side</span>
//           </h2>

//           {/* Badges / Stats (Centered on mobile) */}
//           <div className="flex flex-row items-center justify-center gap-4 lg:gap-12 pb-2 w-full md:w-auto">
//             <div className="flex items-center gap-2 lg:gap-3">
//               <img src={oliveLeaves} alt="leaves" className="w-3 h-6 lg:w-4 lg:h-10 opacity-70" />
//               <span className="text-[10px] lg:text-[13px] font-bold text-center leading-snug text-[#1a113d]">
//                 India's #1*<br />insurance app
//               </span>
//               <img src={oliveLeaves} alt="leaves" className="w-3 h-6 lg:w-4 lg:h-10 opacity-70 scale-x-[-1]" />
//             </div>

//             <div className="flex items-center gap-2 lg:gap-3">
//               <img src={oliveLeaves} alt="leaves" className="w-3 h-6 lg:w-4 lg:h-10 opacity-70" />
//               <span className="text-[10px] lg:text-[13px] font-bold text-center leading-snug text-[#1a113d]">
//                 Best direct<br />insurer 2025
//               </span>
//               <img src={oliveLeaves} alt="leaves" className="w-3 h-6 lg:w-4 lg:h-10 opacity-70 scale-x-[-1]" />
//             </div>
//           </div>
//         </div>


//         {/* --- MAIN RESPONSIVE BENTO GRID --- */}
//         {/* Mobile: 2 cols exact | Desktop: 9 cols exact proportional placement */}
//         <div className="grid grid-cols-2 lg:grid-cols-9 gap-3 lg:gap-5 w-full auto-rows-fr lg:auto-rows-auto">
          
//           {/* 1. Life Insurance (Spans 2 rows on mobile & desktop) */}
//           <div className={`col-span-1 row-span-2 lg:col-span-3 lg:col-start-1 lg:row-start-1 relative bg-[#F4F1FF] rounded-[20px] lg:rounded-[32px] p-4 lg:p-8 overflow-hidden group cursor-pointer shadow-sm flex flex-col transition-all duration-700 delay-100 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
//             {/* DEFAULT STATE */}
//             <div className="relative z-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-6">
//               <h3 className="text-[16px] lg:text-[28px] font-bold text-[#1a113d] leading-tight mb-1 lg:mb-3 pr-2">
//                 Protect your family with 100% pure life insurance
//               </h3>
//               <p className="text-gray-500 text-[10px] lg:text-[14px] leading-snug mb-3 lg:mb-4 pr-2">Not mixed with any returns or jargons</p>
//               <TagBadge text="Coverage from ₹25 L to ₹100 Cr" />
//             </div>

//             <HoverArrow />

//             {/* DEFAULT STATE IMAGE */}
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] lg:w-[80%] h-[55%] lg:h-[240px] bg-gradient-to-t from-[#E8E1FF] to-transparent rounded-t-full transition-all duration-700 ease-in-out group-hover:opacity-10 group-hover:scale-90 group-hover:translate-y-16 flex items-end justify-center z-0">
//               <img src={familyImg} alt="Family" className="w-full h-auto object-contain object-bottom" />
//             </div>

//             {/* HOVER REVEAL STATE */}
//             <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-[#F4F1FF]/95 to-[#F4F1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
//             <div className="absolute inset-0 p-4 lg:p-8 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-in-out translate-y-8 group-hover:translate-y-0 z-20 flex flex-col justify-between">
//               <div>
//                 <h3 className="text-[15px] lg:text-[26px] font-bold text-[#1a113d] leading-tight mb-3 lg:mb-6">
//                   This isn't your usual term plan.<br/>Here's why.
//                 </h3>
//                 <ul className="space-y-2 lg:space-y-4">
//                   <ListCheck text="Adjust your coverage when you need" />
//                   <ListCheck text="Create a will for FREE" />
//                   <ListCheck text="Pay less with zero commission" />
//                 </ul>
//               </div>
//               <button className="w-full bg-[#222222] text-white py-2.5 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-[13px] lg:text-[15px] hover:bg-black transition-colors shadow-lg">
//                 Check prices
//               </button>
//             </div>
//           </div>

//           {/* 2. Car Insurance */}
//           <div className={`col-span-1 row-span-1 lg:col-span-3 lg:col-start-4 lg:row-start-1 relative bg-white border border-gray-100 rounded-[20px] lg:rounded-[32px] p-4 lg:p-6 overflow-hidden group cursor-pointer hover:shadow-md shadow-sm w-full h-full min-h-[170px] lg:min-h-[220px] flex flex-col transition-all duration-700 delay-[200ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
//             <div className="relative z-10 w-[85%] lg:w-[70%]">
//               <h4 className="text-[15px] lg:text-[22px] font-bold text-[#1a113d] mb-1">Car insurance</h4>
//               <p className="text-[11px] lg:text-[13px] text-gray-500 mb-2 lg:mb-3 leading-[1.3]"><span className="font-semibold text-[#582CDB]">Simple prices. Fast claims.</span><br/>That's our promise.</p>
//               <TagBadge text="Starting at just ₹2094*" />
//             </div>
            
//             <HoverArrow />

//             <div className="absolute bottom-2 -right-4 lg:right-4 w-[110px] lg:w-[130px] h-[70px] lg:h-[80px] flex justify-end items-end group-hover:scale-105 transition-transform duration-300 z-0">
//               <img src={carImg} alt="Car" className="w-full h-full object-contain object-bottom" />
//             </div>
//           </div>

//           {/* 3. Bike Insurance */}
//           <div className={`col-span-1 row-span-1 lg:col-span-2 lg:col-start-4 lg:row-start-2 relative bg-white border border-gray-100 rounded-[20px] lg:rounded-[32px] p-4 lg:p-6 overflow-hidden group cursor-pointer hover:shadow-md shadow-sm w-full h-full min-h-[170px] lg:min-h-[220px] flex flex-col transition-all duration-700 delay-[300ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
//             <div className="relative z-10 pr-4 lg:pr-10 w-full">
//               <h4 className="text-[15px] lg:text-[19px] font-bold text-[#1a113d] mb-1 lg:mb-2 leading-tight">Bike insurance</h4>
//               <p className="text-[11px] lg:text-[13px] text-gray-500 leading-[1.3]">Insure your bike or scooter in just 1 minute</p>
//             </div>
            
//             <HoverArrow />

//             <div className="absolute bottom-0 -right-2 lg:right-2 w-[85px] lg:w-[100px] h-[90px] lg:h-[100px] flex justify-end items-end group-hover:scale-105 transition-transform duration-300 z-0">
//               <img src={bikeImg} alt="Bike" className="w-full h-full object-contain object-bottom" />
//             </div>
//           </div>

//           {/* 4. Health Insurance */}
//           <div className={`col-span-1 row-span-1 lg:col-span-3 lg:col-start-7 lg:row-start-1 relative bg-white border border-gray-100 rounded-[20px] lg:rounded-[32px] p-4 lg:p-6 overflow-hidden group cursor-pointer hover:shadow-md shadow-sm w-full h-full min-h-[170px] lg:min-h-[220px] flex flex-col transition-all duration-700 delay-[400ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
//             <div className="relative z-10 w-[90%] lg:w-[70%]">
//               <h4 className="text-[15px] lg:text-[22px] font-bold text-[#1a113d] mb-1">Health insurance</h4>
//               <p className="text-[11px] lg:text-[13px] text-gray-500 mb-2 lg:mb-3 leading-[1.3]"><span className="font-semibold text-[#582CDB]">100% hospital bill payments.</span><br/>No surprises.</p>
//               <TagBadge text="From ₹600/month" />
//             </div>
            
//             <HoverArrow />

//             <div className="absolute bottom-0 -right-2 lg:right-2 w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] flex justify-end items-end group-hover:scale-105 transition-transform duration-300 z-0">
//               <img src={healthImg} alt="Health" className="w-full h-full object-contain object-bottom" />
//             </div>
//           </div>

//           {/* 5. Travel Insurance */}
//           <div className={`col-span-1 row-span-1 lg:col-span-2 lg:col-start-6 lg:row-start-2 relative bg-white border border-gray-100 rounded-[20px] lg:rounded-[32px] p-4 lg:p-6 overflow-hidden group cursor-pointer hover:shadow-md shadow-sm w-full h-full min-h-[170px] lg:min-h-[220px] flex flex-col transition-all duration-700 delay-[500ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
//             <div className="relative z-10 w-full">
//               <h4 className="text-[15px] lg:text-[19px] font-bold text-[#1a113d] mb-1 lg:mb-2 leading-tight">Traveling soon?</h4>
//               <p className="text-[11px] lg:text-[13px] text-gray-500 leading-[1.3]"><span className="font-semibold text-[#582CDB]">Travel insurance</span><br/>with emergency medical coverage in 150+ countries</p>
//             </div>
            
//             <HoverArrow />

//             <div className="absolute bottom-0 -right-2 lg:right-2 w-[100px] lg:w-[120px] h-[75px] lg:h-[90px] flex justify-end items-end group-hover:scale-105 transition-transform duration-300 z-0">
//               <img src={planeImg} alt="Plane" className="w-full h-full object-contain object-bottom" />
//             </div>
//           </div>

//           {/* 6. Domestic AirPass (Spans 2 columns on mobile) */}
//           <div className={`col-span-2 row-span-1 lg:col-span-2 lg:col-start-8 lg:row-start-2 relative bg-white border border-gray-100 rounded-[20px] lg:rounded-[32px] p-4 lg:p-6 overflow-hidden group cursor-pointer hover:shadow-md shadow-sm w-full h-full min-h-[140px] lg:min-h-[220px] flex flex-col transition-all duration-700 delay-[600ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
//             <div className="relative z-10 w-[60%] lg:w-full">
//               <h4 className="text-[15px] lg:text-[19px] font-bold text-[#1a113d] mb-1 lg:mb-2 leading-tight">Domestic AirPass</h4>
//               <p className="text-[11px] lg:text-[13px] text-gray-500 leading-[1.3]"><span className="font-semibold text-[#582CDB]">The only pass that pays you back</span><br className="hidden lg:block"/>for domestic flight disruptions</p>
//             </div>
            
//             <HoverArrow />

//             <div className="absolute bottom-0 right-0 w-[120px] lg:w-[140px] h-[80px] lg:h-[100px] flex justify-end items-end group-hover:scale-105 transition-transform duration-300 z-0">
//               <img src={cardImg} alt="Card" className="w-full h-full object-contain object-bottom right" />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionOne;

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { MdCheckCircle } from 'react-icons/md';

// Ensure your assets are correctly placed in these paths
import oliveLeaves from '../../../assets/olive_Leaves.svg'
import familyImg from '../../../assets/family.png'
import carImg from '../../../assets/car.webp'
import bikeImg from '../../../assets/bike.webp'
import planeImg from '../../../assets/plane.webp'
import cardImg from '../../../assets/card.webp'
import healthImg from '../../../assets/health.webp'

import tower from '../../../assets/tower.svg'
import pci from '../../../assets/pci.svg'

// --- REUSABLE MICRO-COMPONENTS ---

const ListCheck = ({ text }) => (
  <li className="flex items-start lg:items-center gap-3 text-[12px] lg:text-[15px] font-medium text-gray-700">
    <MdCheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600 bg-purple-100 rounded-full min-w-[16px] lg:min-w-[20px]" />
    {text}
  </li>
);

const TagBadge = ({ text }) => (
  <div className="inline-flex items-center bg-[#E8E1FF] text-[#582CDB] font-bold text-[9px] lg:text-[12px] px-2 py-1 lg:px-3 lg:py-1.5 rounded-full mb-2 lg:mb-4 z-10 relative w-max">
    <div className="hidden lg:flex bg-purple-100 p-0.5 rounded-full mr-1.5">
      <Check className="w-3 h-3 text-purple-600" strokeWidth={3} />
    </div>
    {text}
  </div>
);

const HoverArrow = () => (
  <div className="absolute bottom-3 left-3 lg:bottom-6 lg:left-6 w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center group-hover:bg-[#1a113d] group-hover:text-white group-hover:border-transparent transition-all z-10 shadow-sm">
    <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" strokeWidth={2.5} />
  </div>
);

const SectionOne = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-white py-8 lg:py-16 px-3 lg:px-6 font-jakarta flex justify-center overflow-hidden">
      
      {/* --- DECORATIVE CORNER IMAGES --- */}
      <img src={tower} alt="Tower" className="absolute bottom-0 left-0 w-32 lg:w-48 opacity-20 z-0 pointer-events-none select-none" />
      <img src={pci} alt="PCI" className="absolute bottom-0 right-0 w-32 lg:w-48 opacity-20 z-0 pointer-events-none select-none" />

      <div className="w-full max-w-[1240px] relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className={`flex flex-col md:flex-row justify-between items-center md:items-end mb-6 lg:mb-10 gap-4 lg:gap-6 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="hidden md:block text-3xl lg:text-[40px] leading-[1.2] lg:leading-[1.1] text-[#1a113d] tracking-tight">
            <span className="font-bold text-gray-800">Have an award-winning</span><br />
            <span className="font-extra-bold">insurer by your side</span>
          </h2>

          <div className="flex flex-row items-center justify-center gap-4 lg:gap-12 pb-2 w-full md:w-auto">
            <div className="flex items-center gap-2 lg:gap-3">
              <img src={oliveLeaves} alt="leaves" className="w-3 h-6 lg:w-4 lg:h-10 opacity-70" />
              <span className="text-[10px] lg:text-[13px] font-bold text-center leading-snug text-[#1a113d]">
                India's #1*<br />insurance app
              </span>
              <img src={oliveLeaves} alt="leaves" className="w-3 h-6 lg:w-4 lg:h-10 opacity-70 scale-x-[-1]" />
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <img src={oliveLeaves} alt="leaves" className="w-3 h-6 lg:w-4 lg:h-10 opacity-70" />
              <span className="text-[10px] lg:text-[13px] font-bold text-center leading-snug text-[#1a113d]">
                Best direct<br />insurer 2025
              </span>
              <img src={oliveLeaves} alt="leaves" className="w-3 h-6 lg:w-4 lg:h-10 opacity-70 scale-x-[-1]" />
            </div>
          </div>
        </div>

        {/* --- MAIN RESPONSIVE BENTO GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-9 gap-3 lg:gap-5 w-full auto-rows-fr lg:auto-rows-auto">
          
          {/* 1. Life Insurance */}
          <div className={`col-span-1 row-span-2 lg:col-span-3 lg:col-start-1 lg:row-start-1 relative bg-[#F4F1FF] rounded-[20px] lg:rounded-[32px] p-4 lg:p-8 overflow-hidden group cursor-pointer shadow-sm flex flex-col transition-all duration-700 delay-100 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative z-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-6">
              <h3 className="text-[16px] lg:text-[28px] font-bold text-[#1a113d] leading-tight mb-1 lg:mb-3 pr-2">
                Protect your family with 100% pure life insurance
              </h3>
              <p className="text-gray-500 text-[10px] lg:text-[14px] leading-snug mb-3 lg:mb-4 pr-2">Not mixed with any returns or jargons</p>
              <TagBadge text="Coverage from ₹25 L to ₹100 Cr" />
            </div>
            <HoverArrow />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] lg:w-[80%] h-[55%] lg:h-[240px] bg-gradient-to-t from-[#E8E1FF] to-transparent rounded-t-full transition-all duration-700 ease-in-out group-hover:opacity-10 group-hover:scale-90 group-hover:translate-y-16 flex items-end justify-center z-0">
              <img src={familyImg} alt="Family" className="w-full h-auto object-contain object-bottom" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-[#F4F1FF]/95 to-[#F4F1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="absolute inset-0 p-4 lg:p-8 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-in-out translate-y-8 group-hover:translate-y-0 z-20 flex flex-col justify-between">
              <div>
                <h3 className="text-[15px] lg:text-[26px] font-bold text-[#1a113d] leading-tight mb-3 lg:mb-6">This isn't your usual term plan.<br/>Here's why.</h3>
                <ul className="space-y-2 lg:space-y-4">
                  <ListCheck text="Adjust your coverage when you need" />
                  <ListCheck text="Create a will for FREE" />
                  <ListCheck text="Pay less with zero commission" />
                </ul>
              </div>
              <button className="w-full bg-[#222222] text-white py-2.5 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-[13px] lg:text-[15px] hover:bg-black transition-colors shadow-lg">
                Check prices
              </button>
            </div>
          </div>

          {/* 2. Car Insurance */}
          <div className={`col-span-1 row-span-1 lg:col-span-3 lg:col-start-4 lg:row-start-1 relative bg-white border border-gray-100 rounded-[20px] lg:rounded-[32px] p-4 lg:p-6 overflow-hidden group cursor-pointer hover:shadow-md shadow-sm w-full h-full min-h-[170px] lg:min-h-[220px] flex flex-col transition-all duration-700 delay-[200ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative z-10 w-[85%] lg:w-[70%]">
              <h4 className="text-[15px] lg:text-[22px] font-bold text-[#1a113d] mb-1">Car insurance</h4>
              <p className="text-[11px] lg:text-[13px] text-gray-500 mb-2 lg:mb-3 leading-[1.3]"><span className="font-semibold text-[#582CDB]">Simple prices. Fast claims.</span><br/>That's our promise.</p>
              <TagBadge text="Starting at just ₹2094*" />
            </div>
            <HoverArrow />
            <div className="absolute bottom-2 -right-4 lg:right-4 w-[110px] lg:w-[130px] h-[70px] lg:h-[80px] flex justify-end items-end group-hover:scale-105 transition-transform duration-300 z-0">
              <img src={carImg} alt="Car" className="w-full h-full object-contain object-bottom" />
            </div>
          </div>

          {/* 3. Bike Insurance */}
          <div className={`col-span-1 row-span-1 lg:col-span-2 lg:col-start-4 lg:row-start-2 relative bg-white border border-gray-100 rounded-[20px] lg:rounded-[32px] p-4 lg:p-6 overflow-hidden group cursor-pointer hover:shadow-md shadow-sm w-full h-full min-h-[170px] lg:min-h-[220px] flex flex-col transition-all duration-700 delay-[300ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative z-10 pr-4 lg:pr-10 w-full">
              <h4 className="text-[15px] lg:text-[19px] font-bold text-[#1a113d] mb-1 lg:mb-2 leading-tight">Bike insurance</h4>
              <p className="text-[11px] lg:text-[13px] text-gray-500 leading-[1.3]">Insure your bike or scooter in just 1 minute</p>
            </div>
            <HoverArrow />
            <div className="absolute bottom-0 -right-2 lg:right-2 w-[85px] lg:w-[100px] h-[90px] lg:h-[100px] flex justify-end items-end group-hover:scale-105 transition-transform duration-300 z-0">
              <img src={bikeImg} alt="Bike" className="w-full h-full object-contain object-bottom" />
            </div>
          </div>

          {/* 4. Health Insurance */}
          <div className={`col-span-1 row-span-1 lg:col-span-3 lg:col-start-7 lg:row-start-1 relative bg-white border border-gray-100 rounded-[20px] lg:rounded-[32px] p-4 lg:p-6 overflow-hidden group cursor-pointer hover:shadow-md shadow-sm w-full h-full min-h-[170px] lg:min-h-[220px] flex flex-col transition-all duration-700 delay-[400ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative z-10 w-[90%] lg:w-[70%]">
              <h4 className="text-[15px] lg:text-[22px] font-bold text-[#1a113d] mb-1">Health insurance</h4>
              <p className="text-[11px] lg:text-[13px] text-gray-500 mb-2 lg:mb-3 leading-[1.3]"><span className="font-semibold text-[#582CDB]">100% hospital bill payments.</span><br/>No surprises.</p>
              <TagBadge text="From ₹600/month" />
            </div>
            <HoverArrow />
            <div className="absolute bottom-0 -right-2 lg:right-2 w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] flex justify-end items-end group-hover:scale-105 transition-transform duration-300 z-0">
              <img src={healthImg} alt="Health" className="w-full h-full object-contain object-bottom" />
            </div>
          </div>

          {/* 5. Travel Insurance */}
          <div className={`col-span-1 row-span-1 lg:col-span-2 lg:col-start-6 lg:row-start-2 relative bg-white border border-gray-100 rounded-[20px] lg:rounded-[32px] p-4 lg:p-6 overflow-hidden group cursor-pointer hover:shadow-md shadow-sm w-full h-full min-h-[170px] lg:min-h-[220px] flex flex-col transition-all duration-700 delay-[500ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative z-10 w-full">
              <h4 className="text-[15px] lg:text-[19px] font-bold text-[#1a113d] mb-1 lg:mb-2 leading-tight">Traveling soon?</h4>
              <p className="text-[11px] lg:text-[13px] text-gray-500 leading-[1.3]"><span className="font-semibold text-[#582CDB]">Travel insurance</span><br/>with emergency medical coverage in 150+ countries</p>
            </div>
            <HoverArrow />
            <div className="absolute bottom-0 -right-2 lg:right-2 w-[100px] lg:w-[120px] h-[75px] lg:h-[90px] flex justify-end items-end group-hover:scale-105 transition-transform duration-300 z-0">
              <img src={planeImg} alt="Plane" className="w-full h-full object-contain object-bottom" />
            </div>
          </div>

          {/* 6. Domestic AirPass */}
          <div className={`col-span-2 row-span-1 lg:col-span-2 lg:col-start-8 lg:row-start-2 relative bg-white border border-gray-100 rounded-[20px] lg:rounded-[32px] p-4 lg:p-6 overflow-hidden group cursor-pointer hover:shadow-md shadow-sm w-full h-full min-h-[140px] lg:min-h-[220px] flex flex-col transition-all duration-700 delay-[600ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative z-10 w-[60%] lg:w-full">
              <h4 className="text-[15px] lg:text-[19px] font-bold text-[#1a113d] mb-1 lg:mb-2 leading-tight">Domestic AirPass</h4>
              <p className="text-[11px] lg:text-[13px] text-gray-500 leading-[1.3]"><span className="font-semibold text-[#582CDB]">The only pass that pays you back</span><br className="hidden lg:block"/>for domestic flight disruptions</p>
            </div>
            <HoverArrow />
            <div className="absolute bottom-0 right-0 w-[120px] lg:w-[140px] h-[80px] lg:h-[100px] flex justify-end items-end group-hover:scale-105 transition-transform duration-300 z-0">
              <img src={cardImg} alt="Card" className="w-full h-full object-contain object-bottom right" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionOne;