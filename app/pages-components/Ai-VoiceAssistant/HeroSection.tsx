"use client";
import Image from "next/image";
import { Hovering, SlideUp } from "@/app/components/Animations";
import { useTheme } from "@/app/components/ThemeProvider";
export default function HeroSection() {
  const { theme } = useTheme();
  return (
    <section className="relative w-full h-screen   mt-10 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={
            theme === "light"
              ? "/Ai-VoiceAssistant/Hero-light.png"
              : "/Ai-VoiceAssistant/HeroSection.png"
          }
          alt="Hero Background"
          className="object-cover w-screen h-screen "
        />
      </div>
      <div className="text-center  max-w-full sm:max-w-xl md:max-w-3xl px-4 sm:px-6 -mt-40 sm:-mt-20">
        <SlideUp>
          <div className="px-4 sm:px-6 py-2 bg-[#FFEF43] rounded-md inline-flex items-center justify-center shadow-md">
            <p className="text-black font-semibold text-xs sm:text-sm tracking-wide">
              AI VOICE ASSISTANT
            </p>
          </div>
        </SlideUp>
        <h1
          className={
            theme === "light"
              ? "text-(--text-primary) text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg mt-4"
              : "text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg mt-4"
          } >
          Your Personal & Professional <br />
          AI Assistant
        </h1>
        <p
          className={
            theme === "light"
              ? "mt-2 text-base sm:text-lg md:text-xl text-(--text-primary) max-w-full sm:max-w-2xl mx-auto"
              : "mt-2 text-base sm:text-lg md:text-xl text-white/80 max-w-full sm:max-w-2xl mx-auto"
          } >
          Let your AI Assistant handle the thinking, organizing, and reminding so you
          can focus on what truly matters — whether it’s your personal life or your business.
        </p>
       <Hovering> <a href="https://app.memyselfi.ai/signup" target="blank">
        <button className="mt-4 mb-[70px] cursor-pointer sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 rounded-xl bg-[#FFEF43] text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
          Get Started
        </button>
        </a></Hovering>
      </div>
    </section>
  );
}
