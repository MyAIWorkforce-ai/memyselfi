"use client";
import Image from "next/image";
import { FC } from "react";
import { useTheme } from "../../components/ThemeProvider";
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
export  const YearlyCalendar: FC = () => {
  const { theme } = useTheme();
  return (
<SlideUp><section
      className="relative  w-full py-20 lg:px-20 sm:px-6 md:px-15 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto bg-(--dw-bg)">
{/* ==== MAIN SECTION GLOW (Left Bottom → Mid) ==== */}
<div
  className="absolute bottom-0 right-10 sm:right-20 w-[250px] sm:w-[400px] md:w-[500px] h-[150px] sm:h-[250px] md:h-[300px] rounded-full blur-[60px] sm:blur-[120px] md:blur-[140px]"
  style={{
    background: "var(--bg-button)",
    opacity: theme === "dark" ? 0.25 : 0.25, 
    filter: "blur(140px)",
  }}
/>
{theme === "dark" && (
  <div
    className="absolute bottom-0 right-10 sm:right-20  w-[250px] sm:w-[350px] md:w-[400px] h-[150px] sm:h-[250px] md:h-[300px] rounded-full blur-[120px] sm:blur-[160px] md:blur-[180px]"
    style={{
      background: "var(--bg-button)",
      opacity:  0.25,
      filter: "blur(180px)",
    }}
  />
)}
      {/* RIGHT IMAGE */}
 <Hovering> <div className="relative w-[500px] h-[450px] ">
   <Image
     src="/Smart-ai-calendar/yearly_calendar.png"
     alt="Yearly Calendar Preview"
     fill
     className="object-contain drop-shadow-[0_0_40px_rgba(255,239,67,0.8)]"
   />
 </div></Hovering> 
       {/* LEFT CONTENT WITH GLOW */}
      <div className="max-w-full sm:max-w-xl relative pl-6 sm:pr-6 md:pr-10">
<SlideRight><h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-(--text-primary)">
          Yearly Calendar
        </h2></SlideRight>    

<SlideLeft>     <p className="text-(--text-secondary) leading-relaxed mb-6 text-sm  sm:text-base">
        Your year, perfectly mapped out. Look ahead and see your year unfold, from that big work project you’ve been planning, to your 
          <span className="font-semibold text-(--text-primary)"> {" "}dream vacation </span>{" "}
         , to  <span className="font-semibold text-(--text-primary)"> {" "}birthday </span>{" "}that mean the world to you. It’s all right there, in one place, so you can stay on top of things, hit your goals, and never miss a moment that matters.
        </p></SlideLeft>   

 <SlideUp><div
          className="inline-block px-4 py-2 rounded-lg shadow-[0_0_20px_var(--bg-button)] mb-4 relative"
          style={{
            background: "var(--bg-button)",
          }}
        >
          <span className="font-semibold text-black">
            Productivity Impact:
          </span>
        </div></SlideUp> 
        <ul className="text-(--text-secondary) relative text-sm sm:text-base">
             <li>• Plan 12 months in advance.</li>
          <li>• Boost annual goal achievement rate by 30%.</li>
          <li>• Just say it and it’s done: “Add my best friend’s birthday on 31st October”, no typing, no fuss..</li>
        </ul>
      </div>
    </section></SlideUp> 
  );
};
