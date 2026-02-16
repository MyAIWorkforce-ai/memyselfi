"use client";
import Image from "next/image";
import { SlideLeft, SlideRight, SlideUp } from "@/app/components/Animations";
const items = [
  { title: "Choose Your AI Voice & Tone", desc: "Professional, casual, or friendly – customize how your AI agent represents you.", icon: "1 " },
  { title: "Front End Prompt Training", desc: "Give AI Agent context and key information about your business to answer queries and questions on calls.", icon: "2" },
  { title: "Train Your Preferences", desc: "Set rules for handling spam, booking appointments, acting as your AI receptionist, and managing important clients or specific scenarios.", icon: "3" },
  { title: "Get Instant Summaries", desc: "AI answers calls, records details, and sends you summaries instantly.", icon: "4" },
];
export const HowItWorks = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-20 px-4 sm:px-6 md:px-10 lg:px-6 bg-(--bg-bg)">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full pl-0 sm:pl-6">         
          <SlideLeft>
            <div className="w-full flex mt-8 justify-center">
              <img
          
                src="/Ai-CallAgent/how_work.svg"
                alt="How it works Dashboard"
                className="  rounded-xl"
              />
            </div>
          </SlideLeft>
          <SlideRight>
            <h1 className="text-(--text-primary) text-left text-3xl sm:text-4xl md:text-4xl lg:text-4xl mb-8 sm:mb-10 font-bold">
              How It Works
            </h1>
            <div className="space-y-6 sm:space-y-8">
              {items.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start gap-3">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-[#FFEF43] text-black font-bold shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-(--text-primary)">
                      {item.title}
                    </h3>
                    <p className="text-(--text-secondary) mt-1 text-[14px] sm:text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
};
