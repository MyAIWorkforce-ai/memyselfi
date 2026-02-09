'use client';
import { SlideLeft, SlideRight, SlideUp ,Hovering } from "@/app/components/Animations";
export const PersonalUses = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-center bg-(--bg-bg) py-25 px-4 sm:px-6 md:px-15">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">
      <SlideUp>   
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 md:mb-20 text-(--text-primary) transition-colors duration-500">
          From Personal to Business <br/>Vault Fits All
        </h2>
      </SlideUp>

       <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 w-full">
         <SlideLeft> 
          <div className="flex flex-col items-start text-left px-4 sm:px-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#FFF15C] transition-colors duration-500">
              Personal Uses
            </h2>
            <ul className="text-(--text-primary) space-y-2 text-left">
              <li>• Store passports, ID cards, and legal documents securely for quick access when traveling or filling forms.</li>
              <li>• Keep medical records, prescriptions, and health reports organized and shareable with doctors in seconds.</li>
              <li>• Save family photos, videos, and precious memories in a protected environment with no risk of accidental deletion.</li>
            </ul>
          </div>
        </SlideLeft> 

        <SlideRight>
          <Hovering>
            <div className="w-full sm:w-[370px] h-[300px] flex justify-center md:justify-start shrink-0 mt-6 md:mt-0">
              <img
                src="/Vault/Personal.svg"
                alt="Right Inbox"
                className="object-cover clear-both mix-blend-multiply rounded-[15px] drop-shadow-[0_0_10px_rgba(255,239,67,0.8)]"
              />
            </div>
          </Hovering> 
        </SlideRight>      
      </div>
      </div>
    </section>
  );
};
