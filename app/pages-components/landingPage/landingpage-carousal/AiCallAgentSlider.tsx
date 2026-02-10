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
    title: 'Human Like Call Handling',
    desc: 'Your AI agent answers and manages calls just like a real assistant  greeting, responding, and ensuring no inquiry goes unattended.',
  },
  {
    id: 2,
    icon: MdOutlineUploadFile,
    title: 'All in One Call Log',
    desc: 'View daily, weekly, and monthly call histories in one clean dashboard. Check accepted, missed, or declined calls at a glance.',
  },
  {
    id: 3,
    icon: GiElectric,
    title: 'Audio + Text Recordings',
    desc: 'Every call is stored with audio playback and AI-genrated transcripts, so you can listen or read conversations anytime, anywhere.',
  },
  {
    id: 4,
    icon:TfiCommentsSmiley,
    title: 'Smart Scheduling',
    desc: 'Book, cancel, or reschedule meetings directly from calls. The agent syncs with your calendar automatically, eliminating back and forth.',
  },
];

const AiCallAgentSlider = () => {
  return (
    <section className="w-full bg-(--bg-bg) py-20 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
  <SlideLeft> <h1 className="font-[Inter] font-bold text-[33px] leading-10 text-(--text-primary)">
        AI Call Agent
        </h1></SlideLeft>     
<SlideRight><p className="mt-2 font-[Inter] font-normal text-[18.6px] leading-7 text-(--text-primary)">
Whether it’s personal calls, business inquiries, or scheduled meetings,<br/>
MeMyselfI.ai keeps your conversations organized, trackable, and always<br/>
accessible. Answer, review, or revisit your calls  all synced and<br/>
intelligently managed in one smart dashboard.
        </p></SlideRight>        
      </div>
<div className="mt-8 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
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
<div className="col-span-12 lg:col-span-5 flex justify-center">
   <SlideRight>  <Image
      src="/LandingCarousal/AICall-Agent.png"
      alt="Vault Preview"
      width={420}
      height={490}
      className="max-w-[420px] scale-125"
    /></SlideRight> 
  </div>
</div>
  </section>
  );
};

export default AiCallAgentSlider;
