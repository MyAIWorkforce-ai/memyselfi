'use client';
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
import { FaFileInvoiceDollar,  FaWallet } from "react-icons/fa"; 
import { FiSettings } from "react-icons/fi";
const items = [
  {
    desc: "Track and manage your daily expenses along with upcoming monthly bills to stay on top of payments.",
    icon: FaFileInvoiceDollar,
  },
  {
    desc: "Monitor your savings progress and stay motivated for big purchases, planned trips, or future goals.",
    icon: FiSettings,
  },
  {
    desc: "Identify hidden spending leaks and cut unnecessary costs to improve your overall financial health. Let AI auto schedule bill reminders from relevant emails, or voice commands.",
    icon: FaWallet,
  },
];

export const PersonalUses = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-(--bg-bg) py-16 sm:py-20 md:py-25 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">  
        <SlideUp>
          <h2 className="text-2xl  md:text-5xl font-bold mb-12 sm:mb-16 md:mb-20 text-(--text-primary) transition-colors duration-500">
            From Personal Memories to<br /> Business Notes, for Every Moment
          </h2>
        </SlideUp>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-12 w-full">      
          <SlideLeft>
            <div className="w-full max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[--text-primary] text-left">
                PERSONAL USES
              </h2>
              <SlideRight>
                <h1 className="text-(--text-secondary) text-left text-[15px] mb-8">
                  Easily manage your finances by tracking daily expenses and monthly bills,<br />
                  monitoring savings progress for big purchases or trips, and spotting spending <br />
                  leaks to cut unnecessary costs.
                </h1>
                <div className="space-y-8">
                  {items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full
                                        bg-[#FFEF43] text-black font-bold
                                        shadow-[0_2px_8px_rgba(0,0,0,0.08)]" >
                          <Icon size={24} /> 
                        </div>
                        <div>
                          <p className="text-(--text-secondary) mt-1 text-left text-[15px] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SlideRight>
            </div>
          </SlideLeft>
          {/* Right Image */}
          <SlideRight>
            <Hovering>
              <div className="w-[280px] h-[300px] sm:w-[340px] sm:h-[360px] md:w-[400px] md:h-[420px] shrink-0">
                <img
                  src="Ai-BudgetModule/personal-uses.png"
                  alt="Right Inbox"
                  className="object-cover w-full h-full rounded-3xl" />
              </div>
            </Hovering>
          </SlideRight>
        </div>
      </div>
    </section>
  );
};
