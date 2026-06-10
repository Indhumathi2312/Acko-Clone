import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// You may need to adjust this path based on your project structure
import claimsVideo from '../../../assets/Claim_video.webm';

const testimonials = [
  {
    id: 1,
    text: "I recently switched to ACKO Insurance and I'm thoroughly impressed! Their app is incredibly user-friendly, making it easy to purchase and manage policies. The claims process is also seamless and hassle-free.",
    name: "Sahil Roy",
    policy: "ACKO customer",
    initial: "S"
  },
  {
    id: 2,
    text: "Having claimed insurance with other providers in the past, I can confidently say that none of those experiences even come close to what ACKO delivered. The entire process was incredibly smooth and stress-free.",
    name: "Dheeraj Jha",
    policy: "ACKO car insurance",
    initial: "D"
  },
  {
    id: 3,
    text: "After my mom was diagnosed with cancer suddenly, the situation was overwhelming, but ACKO health insurance support team made it smooth and easy. Most of our hospital bills were covered, and the claims process was hassle-free.",
    name: "Pruthvi R",
    policy: "ACKO health insurance",
    initial: "P"
  }
];

const SectionTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans flex justify-center overflow-hidden">
      <div className="w-full max-w-[1240px]">
        
        {/* --- TOP HEADER & STATS --- */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-[36px] lg:text-[40px] font-extrabold text-[#222] mb-10 tracking-tight">
            Your trust isn't assumed, its earned
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <h3 className="text-4xl md:text-[46px] font-bold text-[#a855f7] tracking-tight mb-2">7 mins</h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 font-medium">Fastest claim settlement</p>
            </div>
            
            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-14 bg-gray-200"></div>
            
            <div className="text-center">
              <h3 className="text-4xl md:text-[46px] font-bold text-[#a855f7] tracking-tight mb-2">98.8%</h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 font-medium">Claims settled in 1 week</p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-14 bg-gray-200"></div>
            
            <div className="text-center">
              <h3 className="text-4xl md:text-[46px] font-bold text-[#a855f7] tracking-tight mb-2">24x7</h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 font-medium">Instant claims support</p>
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT TWO COLUMNS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* LEFT COLUMN: Phone Video Mockup */}
          <div className="bg-[#f5f5f7] rounded-[40px] pt-10 px-8 flex flex-col items-center overflow-hidden relative h-[500px] lg:h-[600px]">
            <h3 className="text-[24px] lg:text-[28px] font-bold text-[#222] mb-8 z-10 text-center">
              Claims shouldn't be hard
            </h3>
            
            {/* Custom Dynamic Island Phone Frame */}
            <div className="relative w-full max-w-[300px] lg:max-w-[340px] h-[330px] md:h-[350px] lg:h-[400px] bg-white border-[12px] border-[#2A2B3D] border-b-0 rounded-t-[56px] flex-shrink-0 mt-auto shadow-2xl">
              
              {/* Dynamic Island Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-[#111] rounded-full z-20"></div>
              
              {/* Screen / Video */}
              <div className="relative w-full h-full rounded-t-[42px] overflow-hidden bg-white">
                <video 
                  src={claimsVideo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover scale-[1.01]"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Testimonial Carousel */}
          <div className="bg-[#f5f5f7] rounded-[40px] p-8 md:p-12 flex flex-col items-center justify-between h-[500px] lg:h-[600px]">
            
            <div className="w-full flex flex-col items-center">
              <h3 className="text-[24px] lg:text-[28px] font-bold text-[#222] mb-12 text-center">
                Promises made. Promises kept.
              </h3>
              
              <div className="flex items-center justify-between w-full gap-4">
                
                {/* Left Arrow */}
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-200/70 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-md transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Content Container */}
                <div className="flex flex-col items-center max-w-sm px-2">
                  
                  {/* 5 Stars */}
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="min-h-[140px] flex items-center justify-center w-full mb-8">
                    <p className="text-center text-[14px] md:text-[15px] text-gray-700 leading-relaxed font-medium transition-opacity duration-300">
                      {currentTestimonial.text}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300/60 rounded-full flex items-center justify-center text-lg font-bold text-gray-700">
                      {currentTestimonial.initial}
                    </div>
                    <div className="text-left">
                      <h4 className="text-[15px] font-bold text-[#222]">{currentTestimonial.name}</h4>
                      <p className="text-[13px] text-gray-500">{currentTestimonial.policy}</p>
                    </div>
                  </div>

                </div>

                {/* Right Arrow */}
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-200/70 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-md transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

              </div>
            </div>

            {/* View More Button */}
            <div className="mt-8">
              <button className="bg-[#111] text-white px-8 py-3.5 rounded-[14px] font-semibold text-[15px] hover:bg-black transition-colors shadow-lg">
                View more
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionTwo;