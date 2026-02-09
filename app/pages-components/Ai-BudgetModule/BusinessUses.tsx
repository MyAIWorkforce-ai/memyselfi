'use client';
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
import { FaChartLine, FaMoneyBillWave, FaFileAlt } from "react-icons/fa"; // icons added
const items = [
  { 
    desc: "Manage project or department budgets with clarity, ensuring funds are allocated and utilized effectively.", 
    icon: FaChartLine 
  },
  { 
    desc: "Track operational costs in real time to maintain control over spending and avoid budget overruns.", 
    icon: FaMoneyBillWave 
  },
  { 
    desc: "Prepare detailed financial reports more quickly, enabling faster decision-making and strategic planning.", 
    icon: FaFileAlt 
  },
];
export const BusinessUses = () => {
  return (
    <section className="relative w-full flex   items-center justify-center bg-(--bg-bg) py-16 sm:py-20 md:py-25 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="relative z-10 max-w-6xl w-full  items-center text-center">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-14 w-full">  
          <SlideRight>
            <Hovering>
              <div className="w-[280px] h-[300px] sm:w-[340px] sm:h-[360px] md:w-[400px] md:h-[420px] shrink-0">
                <img src="Ai-BudgetModule/business-uses.png" alt="Right Inbox" className="object-cover w-full h-full rounded-3xl" />
              </div>
            </Hovering>
          </SlideRight>
          <SlideLeft>
            <div className="w-full max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[--text-primary] text-left">
                BUSINESS USES
              </h2>
              <SlideRight>
                <h1 className="text-(--text-secondary) text-left text-[15px] mb-8">
                  Efficiently manage company finances by tracking project and operational<br />
                  expenses, monitoring budget allocation for different departments, and <br />
                  identifying cost-saving opportunities to maximize profitability.
                </h1>
                <div className="space-y-8">
                  {items.map((item, i) => {
                    const Icon = item.icon; 
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-[#FFEF43] text-black font-bold shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
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
        </div>
      </div>
    </section>
  );
};
