import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Ensure this path correctly points to your video file
import claimsVideo from "../../../assets/Claim_video.webm";

const testimonials = [
  {
    id: 1,
    text: "I recently switched to ACKO Insurance and I'm thoroughly impressed! Their app is incredibly user-friendly, making it easy to purchase and manage policies. The claims process is also seamless and hassle-free.",
    name: "Sahil Roy",
    policy: "ACKO customer",
    initial: "S",
  },
  {
    id: 2,
    text: "Having claimed insurance with other providers in the past, I can confidently say that none of those experiences even come close to what ACKO delivered. The entire process was incredibly smooth and stress-free.",
    name: "Dheeraj Jha",
    policy: "ACKO car insurance",
    initial: "D",
  },
  {
    id: 3,
    text: "After my mom was diagnosed with cancer suddenly, the situation was overwhelming, but ACKO health insurance support team made it smooth and easy. Most of our hospital bills were covered, and the claims process was hassle-free.",
    name: "Pruthvi R",
    policy: "ACKO health insurance",
    initial: "P",
  },
];

const SectionTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white font-jakarta flex justify-center overflow-hidden"
    >
      <div className="w-full max-w-[1240px]">
        {/* --- TOP HEADER & STATS --- */}
        <div
          className={`mb-10 lg:mb-16 text-center transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl md:text-[36px] lg:text-[40px] font-extrabold text-[#222] mb-8 lg:mb-10 tracking-tight">
            Your trust isn't assumed, its earned
          </h2>

          <div className="flex flex-row justify-center items-center gap-6 md:gap-16">
            <div className="text-center group cursor-default">
              <h3 className="text-2xl md:text-[46px] font-bold text-[#a855f7] tracking-tight mb-1">7 mins</h3>
              <p className="text-[12px] md:text-[15px] text-gray-600 font-medium">Fastest claim</p>
            </div>
            <div className="w-px h-10 md:h-14 bg-gray-200"></div>
            <div className="text-center group cursor-default">
              <h3 className="text-2xl md:text-[46px] font-bold text-[#a855f7] tracking-tight mb-1">98.8%</h3>
              <p className="text-[12px] md:text-[15px] text-gray-600 font-medium">Claims settled</p>
            </div>
            <div className="hidden md:block w-px h-14 bg-gray-200"></div>
            <div className="text-center group cursor-default">
              <h3 className="text-2xl md:text-[46px] font-bold text-[#a855f7] tracking-tight mb-1">24x7</h3>
              <p className="text-[12px] md:text-[15px] text-gray-600 font-medium">Instant support</p>
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT TWO COLUMNS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* LEFT COLUMN: Phone Video */}
          <div
            className={`bg-[#f5f5f7] rounded-[30px] lg:rounded-[40px] pt-8 lg:pt-10 px-4 lg:px-8 flex flex-col items-center overflow-hidden relative min-h-[400px] lg:h-[600px] transition-all duration-700 delay-300 ease-out transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <h3 className="text-[20px] lg:text-[28px] font-bold text-[#222] mb-6 z-10 text-center">
              Claims shouldn't be hard
            </h3>

            <div className="relative w-[240px] md:w-[300px] lg:w-[340px] h-[280px] md:h-[350px] lg:h-[400px] bg-white border-[8px] lg:border-[12px] border-[#2A2B3D] border-b-0 rounded-t-[40px] lg:rounded-t-[56px] flex-shrink-0 mt-auto shadow-2xl">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[70px] lg:w-[90px] h-[20px] lg:h-[26px] bg-[#111] rounded-full z-20"></div>
              <div className="relative w-full h-full rounded-t-[32px] lg:rounded-t-[42px] overflow-hidden bg-white">
                <video
                  src={claimsVideo}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Testimonial Carousel */}
          <div
            className={`bg-[#f5f5f7] rounded-[30px] lg:rounded-[40px] p-6 lg:p-12 flex flex-col items-center justify-between min-h-[400px] lg:h-[600px] transition-all duration-700 delay-500 ease-out transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <h3 className="text-[20px] lg:text-[28px] font-bold text-[#222] mb-6 text-center">
              Promises made. Promises kept.
            </h3>

            <div className="flex items-center justify-between w-full gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 rounded-full bg-gray-200/70 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-md transition-all"
              >
                <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>

              <div className="flex flex-col items-center max-w-[280px] lg:max-w-sm px-2 overflow-hidden">
                <div key={currentIndex} className="animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center w-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                  <div className="h-[120px] lg:min-h-[140px] flex items-center justify-center w-full mb-6 text-center">
                    <p className="text-[13px] md:text-[15px] text-gray-700 leading-relaxed font-medium">
                      {currentTestimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-300/60 rounded-full flex items-center justify-center font-bold text-gray-700">
                      {currentTestimonial.initial}
                    </div>
                    <div className="text-left">
                      <h4 className="text-[14px] font-bold text-[#222]">{currentTestimonial.name}</h4>
                      <p className="text-[12px] text-gray-500">{currentTestimonial.policy}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 rounded-full bg-gray-200/70 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-md transition-all"
              >
                <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>

            <button className="mt-6 bg-[#111] text-white px-6 py-3 rounded-[14px] font-semibold text-[14px] lg:text-[15px] hover:bg-black transition-all">
              View more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;