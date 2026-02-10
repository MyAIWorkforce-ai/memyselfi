'use client';
import Image from 'next/image';
import { TiMessages } from "react-icons/ti";
import { MdOutlineUploadFile } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { SlideLeft, SlideRight, Hovering } from '@/app/components/Animations';
const leftCards = [
  {
    id: 1,
    icon: TiMessages,
    title: 'AI Generated Events',
    desc: 'Let MeMyselfI.ai detect patterns in your emails, calls, and tasks, and automatically schedule relevant events. Confirm with one tap. Decline with confidence. ',
  },
  {
    id: 2,
    icon: MdOutlineUploadFile,
    title: 'Voice First Scheduling',
    desc: 'Say it, schedule it. “Book dinner with Sam tomorrow at 7pm.” Your AI assistant handles the rest, with optional confirmations and smart reminders.',
  },
];

const rightCards = [
  {
    id: 3,
    icon: GiElectric,
    title: 'Pending Events Queue',
    desc: 'Not ready to commit? Events added by AI show up in red until you approve them. One tap turns them green, and notifies relevant contacts.',
  },
  {
    id: 4,
    icon: TfiCommentsSmiley,
    title: 'Calendar That Thinks Ahead',
    desc: 'Get pro active suggestions: “Traffic looks heavy. Want me to move your 4pm meeting to 4:30?” or “Friday is blocked. Reschedule your trainer?”',
  },
];
const AiSmartSlider = () => {
  return (
    <section className="w-full bg-(--bg-bg) py-20 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        <SlideLeft>
          <h1 className="font-[Inter] font-bold text-[33px] leading-10 text-(--text-primary)">
            AI Smart Calendar
          </h1>
        </SlideLeft>
        <SlideRight>
          <p className="mt-2 font-[Inter] font-normal text-[18.6px] leading-7 text-(--text-primary)">
           Say goodbye to missed meetings, double bookings, and scattered<br/>
reminders. MeMyselfI.ai’s intelligent calendar merges your work and<br/>
personal life into one fluid, adaptive timeline, created by AI, confirmed by<br/>
you.
          </p>
        </SlideRight>
      </div>
      <div className="mt-8 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Cards */}
        <div className="col-span-12 lg:col-span-3 grid grid-cols-1 gap-6 justify-items-center">
          {leftCards.map((card) => {
            const Icon = card.icon;
            return (
              <Hovering key={`left-card-${card.id}`}>
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

        {/* Center Image */}
        <div className="col-span-12 lg:col-span-6 flex justify-center">
          <SlideRight>
            <Image
              src="/LandingCarousal/AI-Smart.png"
              alt="Vault Preview"
              width={420}
              height={490}
              className="max-w-[420px] scale-125"
            />
          </SlideRight>
        </div>

        {/* Right Cards */}
        <div className="col-span-12 lg:col-span-3 grid grid-cols-1 gap-6 justify-items-center">
          {rightCards.map((card) => {
            const Icon = card.icon;
            return (
              <Hovering key={`right-card-${card.id}`}>
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

export default AiSmartSlider;
