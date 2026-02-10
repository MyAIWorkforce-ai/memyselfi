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
    title: 'All in One Journal',
    desc: 'Write entries, record voice notes, and attach moments all in one seamless diary. No need for multiple apps to capture your thoughts.',
  },
  {
    id: 2,
    icon: MdOutlineUploadFile,
    title: 'Real Time Sync',
    desc: 'Every note and memory is instantly saved and synced across devices. Whether on your phone or laptop, your diary is always with you.',
  },
  {
    id: 3,
    icon: GiElectric,
    title: 'AI Powered Reflectionss',
    desc: 'Get gentle insights from your entries. The AI can highlight moods, track recurring themes, and even suggest healthier habits over time.',
  },
  {
    id: 4,
    icon:TfiCommentsSmiley,
    title: 'Voice to Text Ease',
    desc: 'Too tired to write? Just speak. The AI turns your voice into clean, searchable text  so your late night thoughts or quick reminders are never lost.',
  },
];

const AiDiaryNotesSlider = () => {
  return (
    <section className="w-full bg-(--bg-bg) py-20 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
  <SlideLeft> <h1 className="font-[Inter] font-bold text-[33px] leading-10 text-(--text-primary)">
        AI Diary & Notes Modules
        </h1></SlideLeft>     
<SlideRight><p className="mt-2 font-[Inter] font-normal text-[18.6px] leading-7 text-(--text-primary)">
Whether it’s personal reflections, voice notes, or daily logs, MeMyselfI.ai<br/>
keeps your Diary entries organized, searchable, and always accessible.<br/>
Write, record, or re visit your moments  all synced and intelligently<br/>
managed in one calm space.
        </p></SlideRight>        
      </div>
<div className="mt-4 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
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
      src="/LandingCarousal/AI-Diary.png"
      alt="Vault Preview"
      width={420}
      height={420}
      className="max-w-[420px] scale-90 "
    /></SlideRight> 
  </div>
</div>
  </section>
  );
};

export default AiDiaryNotesSlider;
