'use client';
import Image from "next/image";
import { SlideUp, SlideLeft, SlideRight , Hovering} from "@/app/components/Animations";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[900px] mt-4 lg:mt-8  bg-cover md:bg-contain  bg-center lg:bg-bottom   bg-no-repeat px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-center"
      style={{
        backgroundImage: "url('/Vault/hero-bg.png')",
      }}
    >
      <div className="flex flex-col items-center text-center space-y-2 sm:space-y-6 md:space-y-8 lg:space-y-5 max-w-full sm:max-w-xl md:max-w-3xl">
 <SlideLeft><h1 className="text-(--text-primary) text-5xl  md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
            Secure Your Documents <br />
            with <span className="text-[#FFED29]"> Vault</span>
          </h1></SlideLeft>         
        
<SlideRight> <p className=" text-base sm:text-lg md:text-xl lg:text-xl max-w-full sm:max-w-2xl text-(--text-primary)">
          Protect your sensitive documents with Vault's advanced encryption and secure storage solutions. Access your files anytime, anywhere, with peace of mind.
        </p></SlideRight>       

<SlideUp> <Hovering>        <a href="https://app.memyselfi.ai/signup" target="blank">
  <button className="px-6 cursor-pointer sm:px-8 py-2 sm:py-3 rounded-xl bg-[#FFEF43] text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
          Get Started
        </button></a></Hovering></SlideUp>     

<Hovering>
         <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[700px] mt-2 sm:mt-6 md:mt-8  ">
          <Image
            src="/Vault/heroimage1.jpeg"
            alt="Hero Illustration"
            width={800}
            height={600}
            className="object-contain w-full  rounded-[30px] border-14 border-[#FFED29]"
            priority
          />
        </div></Hovering> 
      </div>
    </section>
  );
}
