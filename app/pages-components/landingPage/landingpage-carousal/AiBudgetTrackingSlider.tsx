'use client';
import Image from 'next/image';
import { TiMessages } from "react-icons/ti";
import { MdOutlineUploadFile } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { SlideLeft, SlideRight, SlideUp, Hovering } from '@/app/components/Animations';
const cards = [
  {
    id: 1,
    icon: TiMessages,
    title: 'All in One Dashboard',
desc:'Files are neatly organized. Track income, expenses, and savings in a single, intuitive dashboard. From groceries to bills, everything is in one place.'  },
  {
    id: 2,
    icon: MdOutlineUploadFile,
    title: 'Real Time Sync',
    desc: 'Stay up to date with instant syncing across bank accounts, credit cards, and wallets. Your budget reflects changes the moment they happen.',
  },
  {
    id: 3,
    icon: GiElectric,
    title: 'AI Powered Insights',
    desc: 'Get smarter with your money. AI categorizes spending, highlights unusual expenses, and suggests adjustments to meet your savings goals.',
  },
  {
    id: 4,
    icon:TfiCommentsSmiley,
    title: 'Smart Reminders',
    desc: 'Never miss a bill or forget a budget limit. The system sends gentle nudges when you’re close to overspending or have upcoming payments.',
  },
];
const AibBudgetTrackingSlider = () => {
  return (
    <section className="w-full bg-(--bg-bg) py-20 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
  <SlideLeft> <h1 className="font-[Inter] font-bold text-[33px] leading-10 text-(--text-primary)">
        AI Budget Tracking
        </h1></SlideLeft>     
<SlideRight><p className="mt-2 font-[Inter] font-normal text-[18.6px] leading-7 text-(--text-primary)">
Whether it’s income, expenses, or savings goals, MeMyselfI.ai keeps your finances<br/>
organized, trackable, and always accessible. Record, analyze, or revisit your spending<br/>
 all synced and intelligently managed in one smart dashboard.
        </p></SlideRight>        
      </div>
<div className="mt-8 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="col-span-12 lg:col-span-5 flex justify-center">
   <SlideRight>  <Image
      src="/LandingCarousal/AI-Smart.png"
      alt="Vault Preview"
      width={420}
      height={490}
      className="max-w-[420px] scale-125"
    /></SlideRight> 
  </div>
  <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-x-14 justify-items-center">
{cards.map((card) => {
  const Icon = card.icon;
  return (
    <Hovering key={`vault-card-${card.id}`}>
      <div className="bg-[#FFED291A] p-5 text-left w-[300px] sm:w-[320px] lg:w-[329px] lg:h-[238px] rounded-xl mx-auto">
        <SlideLeft>
          <div className="w-8 h-8 bg-[#FFED29] rounded flex items-center justify-center mb-3">
            <Icon size={18} color="#000" />
          </div>
        </SlideLeft>
        <SlideLeft>
          <h3 className="font-[Inter] font-semibold text-[17px] leading-7">
            {card.title}
          </h3>
        </SlideLeft>
        <SlideRight>
          <p className="font-[Inter] font-normal text-[13px] leading-[22px] mt-1">
            {card.desc}
          </p>
        </SlideRight>
      </div>
    </Hovering>
  );
})}
  </div>
</div>
  </section>
  );
};

export default AibBudgetTrackingSlider;
