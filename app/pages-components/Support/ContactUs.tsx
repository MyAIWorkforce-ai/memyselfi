"use client";
import Contact from "@/app/components/Contact";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="w-full py-20 bg-(--bg-bg)">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-3 px-6 lg:px-20">
 <Contact/>
        <div className="shrink-0">
          <Image
            src="/Support/contactUs.png" 
            alt="Contact Us"
            width={399}
            height={337}
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
