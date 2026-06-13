import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, 
  CreditCard, 
  CalendarClock, 
  Siren, 
  IdCard, 
  Activity, 
  Star,
  Wifi,
  Signal,
  BatteryFull
} from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

// Imported Assets
import Slide1 from '../../../Assets/Images/slide1.webp';
import Slide2 from '../../../Assets/Images/slide2.webp';
import Slide3 from '../../../Assets/Images/slide3.webp';
import Slide4 from '../../../Assets/Images/slide4.webp';
import Slide5 from '../../../Assets/Images/slide5.webp';
import Car from '../../../Assets/Images/car_image.webp';
import Ambulance from '../../../Assets/Images/ambulance_image.webp';

// Feature Data mapping slides to active styles
const features = [
  // --- LEFT SIDE: Vehicles ---
  { id: 0, side: 'left', title: 'Check and pay traffic fines', icon: FileText, slide: Slide1, activeBg: 'bg-[#f0fdf4]', activeBorder: 'border-[#86efac]' },
  { id: 1, side: 'left', title: 'FASTag low balance alerts', icon: CreditCard, slide: Slide2, activeBg: 'bg-[#f0fdf4]', activeBorder: 'border-[#86efac]' },
  { id: 2, side: 'left', title: 'PUCC expiry reminders', icon: CalendarClock, slide: Slide3, activeBg: 'bg-[#f0fdf4]', activeBorder: 'border-[#86efac]' },
  
  // --- RIGHT SIDE: Health ---
  { id: 3, side: 'right', title: 'Emergency services', icon: Siren, slide: Slide4, activeBg: 'bg-[#fdf2f8]', activeBorder: 'border-[#f9a8d4]' },
  { id: 4, side: 'right', title: 'Create ABHA cards', icon: IdCard, slide: Slide5, activeBg: 'bg-[#f5f3ff]', activeBorder: 'border-[#c4b5fd]' },
  // Placeholder for the 6th item since 5 slides were provided
  { id: 5, side: 'right', title: 'Analyse health policy', icon: Activity, slide: Slide1, activeBg: 'bg-[#f5f3ff]', activeBorder: 'border-[#c4b5fd]' }, 
];

const SectionFour = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger entry animations when scrolling into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-jakarta overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-[1280px] mx-auto w-full">
        
        {/* --- HEADER --- */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-[38px] font-bold text-[#1a113d] mb-3">
            Explore FREE helpful services on our app
          </h2>
          <p className="text-[17px] text-[#4b5563] mb-8 font-medium">
            Even if you are not our customer
          </p>
          
          <button className="inline-flex items-center gap-3 bg-[#111111] text-white px-6 py-3.5 rounded-[20px] font-semibold text-[15px] hover:bg-black hover:scale-105 active:scale-95 transition-all mb-6 shadow-md hover:shadow-lg">
             <div className="flex -space-x-1">
                <FaApple className="w-5 h-5 text-[#3b82f6] relative z-10 bg-white rounded-full p-0.5" />
                <FaGooglePlay className="w-5 h-5 text-[#10b981] relative z-0 bg-white rounded-full p-0.5" />
             </div>
             Download the app
          </button>
          
          <div className="flex justify-center items-center gap-8">
            <div className="flex gap-1.5">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-[22px] h-[22px] fill-[#FFC107] text-[#FFC107]" />
              ))}
              <div className="relative w-[22px] h-[22px]">
                 <Star className="w-full h-full text-[#FFC107] absolute inset-0" />
                 <div className="w-1/2 h-full overflow-hidden absolute inset-0">
                    <Star className="w-[22px] h-[22px] fill-[#FFC107] text-[#FFC107]" />
                 </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center group cursor-default">
                <p className="text-[24px] font-black text-[#1a113d] leading-none mb-1 group-hover:scale-110 transition-transform">4.6</p>
                <p className="text-[11px] text-gray-500 font-medium">Play Store</p>
              </div>
              <div className="text-center group cursor-default">
                <p className="text-[24px] font-black text-[#1a113d] leading-none mb-1 group-hover:scale-110 transition-transform">4.8</p>
                <p className="text-[11px] text-gray-500 font-medium">App Store</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- THREE COLUMN LAYOUT --- */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12 relative">
          
          {/* LEFT: Vehicles Grid (Slides in from Left) */}
          <div className={`w-full lg:w-[340px] xl:w-[380px] order-2 lg:order-1 relative mt-8 lg:mt-0 z-10 transition-all duration-700 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#dcfce7] opacity-60 pointer-events-none transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <h3 className="text-[20px] font-bold text-[#1a113d] text-center mb-8 relative z-10">
                  Real-time insights<br/>for your vehicles
                </h3>
                
                <div className="grid grid-cols-2 gap-4 pb-20 relative z-10">
                  {features.filter(f => f.side === 'left').map((feature) => {
                    const isActive = activeIndex === feature.id;
                    const Icon = feature.icon;
                    return (
                      <div 
                        key={feature.id}
                        onClick={() => setActiveIndex(feature.id)}
                        className={`rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-sm cursor-pointer transition-all duration-300
                          ${isActive ? `${feature.activeBg} border ${feature.activeBorder} scale-105 z-10 shadow-md` : 'bg-[#f3f4f6] border border-transparent hover:shadow-md hover:-translate-y-1'}
                        `}
                      >
                        <Icon className={`w-7 h-7 transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-700'}`} strokeWidth={1.5} />
                        <p className="text-[13px] leading-snug font-medium text-gray-600">{feature.title}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Decorative Car Image */}
                <div className="absolute bottom-2 right-2 w-[160px] h-[100px] z-20 pointer-events-none hover:scale-105 transition-transform duration-500">
                    <img src={Car} alt="Car" className="w-full h-full object-contain drop-shadow-xl" />
                </div>
            </div>
          </div>

          {/* CENTER: Exact Mobile Frame Match (Scales & slides up) */}
          <div className={`order-1 lg:order-2 z-20 flex-shrink-0 -mt-10 lg:mt-0 relative drop-shadow-2xl transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            {/* Outer Phone Bezel */}
            <div className="relative w-[300px]  md:w-[400px] lg:w-[400px] h-[440px] md:h-[600px] lg:h-[580px] bg-[#1a113d] rounded-[52px] border-[12px] border-[#1a113d] shadow-2xl overflow-hidden mx-auto hover:-translate-y-2 transition-transform duration-500">
              
              {/* Inner Phone Screen */}
              <div className="relative w-full h-full bg-slate-900 rounded-[40px] overflow-hidden">
                
                {/* Hardware Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[28px] bg-[#1a113d] rounded-b-[20px] z-50"></div>

                {/* iOS Status Bar Overlay */}
                <div className="absolute top-0 w-full h-[40px] flex justify-between items-start px-7 pt-3.5 z-40 pointer-events-none mix-blend-difference text-white">
                </div>
                
                {/* Image Slides */}
                {features.map((feature, index) => (
                  <img
                    key={feature.id}
                    src={feature.slide}
                    alt={feature.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  />
                ))}

              </div>
            </div>
          </div>

          {/* RIGHT: Health Grid (Slides in from Right) */}
          <div className={`w-full lg:w-[340px] xl:w-[380px] order-3 relative mt-8 lg:mt-0 z-10 transition-all duration-700 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
             <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-bl from-white via-white to-[#fce7f3] opacity-60 pointer-events-none transition-opacity duration-500 group-hover:opacity-100"></div>

                <h3 className="text-[20px] font-bold text-[#1a113d] text-center mb-8 relative z-10">
                  Stay prepared for<br/>health emergencies
                </h3>
                
                <div className="grid grid-cols-2 gap-4 pb-20 relative z-10">
                  {features.filter(f => f.side === 'right').map((feature) => {
                    const isActive = activeIndex === feature.id;
                    const Icon = feature.icon;
                    // Adding col-start-2 to the last item to center it
                    const gridClass = feature.id === 5 ? "col-start-2" : "";
                    
                    return (
                      <div 
                        key={feature.id}
                        onClick={() => setActiveIndex(feature.id)}
                        className={`${gridClass} rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-sm cursor-pointer transition-all duration-300
                          ${isActive ? `${feature.activeBg} border ${feature.activeBorder} scale-105 z-10 shadow-md` : 'bg-[#f3f4f6] border border-transparent hover:shadow-md hover:-translate-y-1'}
                        `}
                      >
                        <Icon className={`w-7 h-7 transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-700'}`} strokeWidth={1.5} />
                        <p className="text-[13px] leading-snug font-medium text-gray-600">{feature.title}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Decorative Ambulance Image */}
                <div className="absolute bottom-4 left-2 w-[160px] h-[100px] z-20 pointer-events-none hover:scale-105 transition-transform duration-500">
                    <img src={Ambulance} alt="Ambulance" className="w-full h-full object-contain drop-shadow-xl" />
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionFour;