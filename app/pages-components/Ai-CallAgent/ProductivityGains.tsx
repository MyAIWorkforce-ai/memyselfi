"use client";
import { FC } from "react";
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
export const ProductivityImpact: FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-(--bg-bg)">
      <div className="max-w-7xl mx-auto rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start gap-6 sm:gap-8"
        style={{
          background: "linear-gradient(to right, rgba(250,245,234,0.2), #FAED96)", }} >
        {/* Left Side */}
        <SlideLeft>
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
              Productivity Impact
            </h2>
            <ul className="list-disc list-inside text-black text-lg sm:text-xl md:text-2xl space-y-1 sm:space-y-2">
              <li>Saves hours each week by reducing interruptions.</li>
              <li>Never miss important calls or forget details.</li>
              <li>Keeps your communication professional and consistent.</li>
              <li>
                Make the most of having you very own personal <br className="hidden md:block" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;assistant.
              </li>
            </ul>
          </div>
        </SlideLeft>
 {/* Right Side */}
        <SlideRight>
          <div className="flex flex-col -ml-4 gap-4 sm:gap-6">
            <div className="w-[300px] md:w-[365px] h-[100px] bg-[#FFED29] rounded-full flex flex-col justify-center items-center p-4">
              <span className="text-black text-3xl sm:text-4xl text-bold">94%</span>
              <span className="text-black text-base sm:text-lg">Accuracy Rate</span>
            </div>
            <div className="w-full sm:w-[300px] md:w-[365px] h-[100px] bg-[#FFED29] rounded-full flex flex-col justify-center items-center p-4">
              <span className="text-black text-3xl sm:text-4xl text-bold">24/7</span>
              <span className="text-black text-base sm:text-lg">Availability</span>
            </div>
          </div>
        </SlideRight>
      </div>
    </section>
  );
};
