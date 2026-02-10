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
    title: 'All in One View',
    desc: 'Access messages from Email, WhatsApp, SMS, and more, all inside a single unified screen. No more app switching or missed updates.',
  },
  {
    id: 2,
    icon: MdOutlineUploadFile,
    title: 'Real Time Sync',
    desc: "New messages update instantly across platforms. MeMyselfI.ai keeps your inbox fresh and always up to date, whether you're on mobile or desktop.",
  },
  {
    id: 3,
    icon: GiElectric,
    title: 'AI Powered Replies',
    desc: 'Respond smarter, faster. Get context aware, one sensitive reply suggestions for every message, saving time and reducing mental load.',
  },
  {
    id: 4,
    icon:TfiCommentsSmiley,
    title: 'Voice Interaction',
    desc: "Too busy to type? Just ask. Use voice to read, reply to, or summarize your inbox, hands free, while you're on the move.",
  },
];

const UnifiedInboxSlider = () => {
  return (
    <section className="w-full bg-(--bg-bg) py-20 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
  <SlideLeft> <h1 className="font-[Inter] font-bold text-[33px] leading-10 text-(--text-primary)">
        Unified Inbox
        </h1></SlideLeft>     
<SlideRight><p className="mt-2 font-[Inter] font-normal text-[18.6px] leading-7 text-(--text-primary)">
Bring all your communications into one calm, organized space. Whether it’s business<br/>
emails, WhatsApp chats, or SMS alerts, MeMyselfI.ai keeps everything in sync,<br/>
accessible, and intelligently managed.
        </p></SlideRight>        
      </div>
<div className="mt-8 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="col-span-12 lg:col-span-5 flex justify-center">
   <SlideRight>  <Image
      src="/LandingCarousal/UnifiedInbox.png"
      alt="Vault Preview"
      width={420}
      height={490}
      className="max-w-[420px] scale-105"
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

export default UnifiedInboxSlider;
