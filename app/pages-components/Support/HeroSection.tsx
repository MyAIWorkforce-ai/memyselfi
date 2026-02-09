"use client";
import Image from "next/image";
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
 import { FiClock, FiShield, FiMic } from "react-icons/fi";
 import { PiRobotLight } from "react-icons/pi";
export default function HeroSection() {
    return (
        <section
            className=" w-full min-h-screen mt-20 bg-(--bg-bg) px-6 lg:px-20 ">
            <div className="max-w-7xl w-full   mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center items-center">
                    <SlideRight> <Image
                        src="/Support/herosection.png"
                        alt="Hero Image"
                        width={450}
                        height={385}
                        className="object-contain"
                        priority
                    /></SlideRight>
                </div>
                <div className="flex flex-col gap-6">
                    <SlideLeft><h1 className=" text-2xl md:text-[47px] font-bold text-(--text-primary) leading-tight "
                        style={{ fontFamily: "Inter, sans-serif" }} >
                        AI Support that Works With You, Not Just For You
                    </h1></SlideLeft>
                    <SlideRight> <p className=" text-[14px] font-normal text-(--text-primary)  max-w-[520px]"
                        style={{ fontFamily: "Inter, sans-serif" }} >
                        MeMyselfI.ai offers 24/7 smart assistance for your daily productivity,scheduling, and communication needs, backed by a support system built to help you succeed.
                    </p></SlideRight>
                    <SlideUp> <Hovering><a href="https://app.memyselfi.ai/signup" target="blank"><button className=" w-fit px-6 py-3 rounded-md  bg-[#FFED29] text-black   font-semibold text-sm hover:opacity-90 transition " >
                        Get Started
                    </button></a></Hovering>   </SlideUp>
                </div>
            </div>
            {/* FEATURES ROW */}
<div className="mt-12">
  <h2
    className="text-[22px] font-bold mb-6 text-(--text-primary)"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    Why choose our platform
  </h2>

  <div className="flex flex-wrap justify-between gap-4">
    {[
      { icon: <PiRobotLight size={22} />, text: "Smart, AI-powered responses" },
      { icon: <FiClock size={22} />, text: "24/7 availability" },
      { icon: <FiShield size={22} />, text: "Secure and privacy-first support" },
      { icon: <FiMic size={22} />, text: "Voice-activated assistance" },
    ].map((item, i) => (
      <div key={i}
        className=" w-full md:w-[290px] h-[95px] flex items-center gap-3 hover:-translate-y-4 duration-300 px-4 bg-[#1A1A1A] rounded-lg">
<SlideLeft><span className="text-(--text-primary)">{item.icon}</span></SlideLeft>        
 <SlideRight> <p className="text-[14px] font-medium text-white leading-snug"
          style={{ fontFamily: "Inter, sans-serif" }} >
          {item.text}
        </p></SlideRight>      
      </div>
    ))}
  </div>
</div>
        </section>
    );
}
