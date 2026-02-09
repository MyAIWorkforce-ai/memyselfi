"use client";
import Image from "next/image";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FaPlane ,FaBook} from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { SlideLeft, SlideRight, SlideUp } from "@/app/components/Animations";
const items = [
  {
    title: "Plan Holidays",
    desc: "Get personalized travel recommendations and itineraries.",
    icon: <FaPlane size={22} strokeWidth={2} />,
  },
  {
    title: "Manage Personal Diary",
    desc: "Keep track of memories and important life events.",
    icon: <FaBook size={22} strokeWidth={2} />,
  },
  {
    title: "Remember Birthdays",
    desc: "Never miss important dates and celebrations again.",
    icon: <FaCakeCandles size={22} strokeWidth={2} />,
  },
  {
    title: "Track Goals",
    desc: "Monitor progress and achieve personal milestones.",
    icon: <MdOutlineTrackChanges  size={22}  />,
  },
];
export const PersonalUses= () => {
  return (
    <section className="w-full py-20 px-6 bg-(--bg-bg) ">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SlideUp>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--text-primary) text-center">
            Personal Uses
          </h2>
          <p className="text-(--text-secondary) mt-3 text-center text-lg">
           Enhance your personal life with AI assistance
          </p>
        </SlideUp>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pl-16 w-full">
          <SlideRight>
            <div className="space-y-8">
              {items.map((item, i) => (
                <div key={i} className="flex -ml-16 md:ml-0 items-center gap-5">
 <div     className="w-12 h-12 flex items-center justify-center rounded-xl    bg-[#FFD93D]/10  shrink-0 text-[#FFD600]  shadow-[0_2px_8px_rgba(0,0,0,0.08)]  ">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-(--text-primary)">
                      {item.title}
                    </h3>
                    <p className="text-(--text-secondary) mt-1 text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </SlideRight>

              <SlideLeft>
            <div className="w-full flex justify-center">
              <Image
                src="/Ai-VoiceAssistant/assistantchat.png" 
                alt="Personal Dashboard"
                width={450}
                height={300}
                className="rounded-4xl -ml-12"
              />
            </div>
          </SlideLeft>

        </div>
      </div>
    </section>
  );
};
