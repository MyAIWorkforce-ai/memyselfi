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
    title: 'Voice Controlled Planning',
    desc: '"Simply say, ‘What are my plans tomorrow?’ and your AI Assistant reads out your schedule, from morning workouts and project deadlines to grocery runs and family dinners, all perfectly organized in the right time slots ',
  },
  {
    id: 2,
    icon: MdOutlineUploadFile,
    title: 'Emotionally Intelligent Nudges',
    desc: '“Tomorrow’s your anniversary, want to book the same restaurant?” Your assistant connects dots you might miss, like love, care, and timing.',
  },
  {
    id: 3,
    icon: GiElectric,
    title: 'No Hands Productivity',
    desc: 'Cooking, walking, driving? Just speak. Schedule, set reminders, or reply to texts, all while you stay focused on life.',
  },
  {
    id: 4,
    icon:TfiCommentsSmiley,
    title: 'Memory Reinforcement',
    desc: 'Did you forget what you promised your friend last week? Your AI recalls it instantly, from “movie plans” to “don’t forget to call uncle.”',
  },
];

const AiAssistantSlider = () => {
  return (
    <section className="w-full bg-(--bg-bg) py-20 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
  <SlideLeft> <h1 className="font-[Inter] font-bold text-[33px] leading-10 text-(--text-primary)">
        AI Voice Assistant
        </h1></SlideLeft>     
<SlideRight><p className="mt-2 font-[Inter] font-normal text-[18.6px] leading-7 text-(--text-primary)">
Whether it’s remembering your friend’s birthday, prepping your weekly<br/>
grocery list, or syncing dinner reservations, MeMyselfI.ai acts like your<br/>
invisible co pilot, anticipating your needs and organizing life before you ask.<br/>
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
      src="/LandingCarousal/AI-Assistant.png"
      alt="Vault Preview"
      width={320}
      height={320}
      className="max-w-[500px]  scale-110"
    /></SlideRight> 
  </div>
</div>
  </section>
  );
};

export default AiAssistantSlider;
