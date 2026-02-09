"use client";
import Image from "next/image";
import { FC } from "react";
import { useTheme } from "../../components/ThemeProvider";
import { SlideUp, SlideLeft, SlideRight, Hovering } from "@/app/components/Animations";
const FamilySharing: FC = () => {
  const { theme } = useTheme();

  return (
   <SlideUp>  <section
    className="relative w-full py-10 px-6 flex flex-col-reverse gap-4 md:flex-row items-center justify-between max-w-7xl mx-auto bg-(--dw-bg)">
<div
  className="absolute bottom-0 left-0 translate-x-0 w-[400px] h-[400px] rounded-full blur-[140px]"
  style={{
    background: "var(--bg-button)",
    opacity: theme === "dark" ? 0.25 : 0.25, 
    filter: "blur(140px)",
  }}
/>
{theme === "dark" && (
  <div
    className="absolute bottom-0 left-0 translate-x-0 w-[600px] h-[600px] rounded-full blur-[180px]"
    style={{
      background: "var(--bg-button)",
      opacity: 0.15,
      filter: "blur(180px)",
    }}
  />
)}
 {/* LEFT CONTENT WITH GLOW */}
      <div className="max-w-xl relative  pl-6 md:pl-10">
 <SlideLeft>   <h2 className="text-4xl md:text-5xl font-bold mb-6 text-(--text-primary)">
          Family Sharing
        </h2> </SlideLeft>

 <SlideRight> <p className="text-(--text-secondary) leading-relaxed mb-6">
         Keep your whole family’s schedule in one place without the chaos of constant group chats or last-minute surprises. Merge calendars for up to five family members, assign each a unique color (excluding red, green, yellow), and instantly see everyone’s plans at a glance. Whether it’s school events, weekend trips, or shared chores, you’ll know exactly who’s free, and when.
        </p></SlideRight> 

<SlideUp> <div
          className="inline-block px-4 py-2 rounded-lg shadow-[0_0_20px_var(--bg-button)] mb-4 relative"
          style={{
            background: "var(--bg-button)",
          }}
        >
          <span className="font-semibold text-black">
            From soccer practice to Sunday dinners — it’s all in one calendar.
          </span>
        </div></SlideUp>  
      </div>

      {/* RIGHT IMAGE */}
 <Hovering>    <div className="md:mt-0 ">
        <img
          src="/Smart-ai-calendar/family_sharing.svg"
          alt="family sharing Calendar Preview"
         
          className="rounded-t-4xl h-96 md:mr-32 "
        />
      </div></Hovering> 
    </section> </SlideUp>
  );
};

export default FamilySharing;
