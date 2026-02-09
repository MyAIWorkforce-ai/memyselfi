"use client";
import Image from "next/image";
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
export default function LiveChatAssistant() {
    return (
        <section className="w-full py-20 bg-(--bg-bg)">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6 lg:px-20">
   <div className="flex flex-col gap-6">
                    <SlideLeft><h2 className=" text-[47px] font-bold text-(--text-primary) leading-tight "
                        style={{ fontFamily: "Inter, sans-serif" }} >
                       Live Chat Assistant
                    </h2></SlideLeft>
                    <SlideRight> <p className=" text-[14px] font-normal text-(--text-primary)  max-w-[520px]"
                        style={{ fontFamily: "Inter, sans-serif" }} >
                       Need help navigating your day or solving a task? Our AI assistant is always by your side, ready to provide instant answers, manage your calendar, reply to messages, and more. Whether it’s a quick fix or a detailed walkthrough, MeMyself.ai makes support feel seamless and personal.
                    </p></SlideRight>
                    <Hovering>  <a href="#support">     <button className=" w-fit px-6 py-3 rounded-md  bg-[#FFED29] text-black   font-semibold text-sm hover:opacity-90 transition " >
                        Talk to Support
                    </button></a></Hovering>
                </div>
        <div className="shrink-0">
          <Image
            src="/Support/chatassistant.png"
            alt="Section Image"
            width={399}
            height={337}
            className="object-contain"
          />
        </div>
      </div>
    </section>);}

