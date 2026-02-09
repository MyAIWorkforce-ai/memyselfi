"use client";
import Image from "next/image";
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
export default function EmailUsDirectly() {
    return (
        <section className="w-full py-20 bg-(--bg-bg)">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6 lg:px-20">
         <div className="shrink-0">
<SlideLeft> <Image
            src="/Support/email.png"
            alt="Section Image"
            width={484}
            height={408}
            className="object-contain"
          /></SlideLeft>        
        </div>
   <div className="flex flex-col gap-6">
                    <SlideLeft><h2 className=" text-[47px] font-bold text-(--text-primary) leading-tight "
                        style={{ fontFamily: "Inter, sans-serif" }} >
                       Email Us Directly
                    </h2></SlideLeft>
                    <SlideRight> <p className=" text-[14px] font-normal text-(--text-primary)  max-w-[520px]"
                        style={{ fontFamily: "Inter, sans-serif" }} >
                    Have a specific question or need personalized assistance? Feel free to reach out to us via email for detailed inquiries, feedback, or support requests. Our team is ready to help you with anything related to your MeMyselfI.ai experience, from troubleshooting to tailored guidance.<span className="font-bold"> We're just one message away!</span>
                    </p></SlideRight>
                    <SlideUp> <Hovering><a href="#support"><button className=" w-fit px-6 py-3 rounded-md  bg-[#FFED29] text-black   font-semibold text-sm hover:opacity-90 transition " >
                        Talk to Support
                    </button></a></Hovering>  </SlideUp>
                </div>
      </div>
    </section>);}

