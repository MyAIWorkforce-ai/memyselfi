'use client';
import { SlideLeft, SlideRight, SlideUp ,Hovering } from "@/app/components/Animations";
export const BusinessUses = () => {
  return (
    <section className="relative w-full flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 bg-(--bg-bg) py-25 px-4 sm:px-15">
      
      <SlideRight>
        <Hovering>
          <div className="w-full sm:w-[420px] h-[300px] flex justify-center md:justify-start shrink-0 mb-6 md:mb-0">
            <img
              src="/Vault/Businessvault.svg"
              alt="Right Inbox"
              className="object-cover rounded-[15px] clear-both  drop-shadow-[0_0_10px_rgba(255,239,67,0.8)]"
            />
          </div>
        </Hovering>
      </SlideRight> 

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center md:text-left">
        <SlideLeft> 
          <div className="flex flex-col   w-full">
            <h2 className="text-4xl sm:text-5xl md:pl-18  font-bold mb-6 text-[#FFF15C] transition-colors duration-500">
              Business Uses
            </h2>

            <ul className="text-(--text-primary) space-y-2 text-left px-4 sm:px-20">
              <li>• Store contracts, proposals, invoices, and business reports for &nbsp;&nbsp;&nbsp;instant  retrieval during meetings.</li>
              <li>• Keep confidential client data in an encrypted space that meets &nbsp;&nbsp;&nbsp;compliance standards.</li>
              <li>• Share project files, design drafts, and presentations directly with &nbsp;&nbsp;&nbsp;team members or clients via secure links.</li>
            </ul>
          </div>
        </SlideLeft>  
      </div>
    </section>
  );
};
