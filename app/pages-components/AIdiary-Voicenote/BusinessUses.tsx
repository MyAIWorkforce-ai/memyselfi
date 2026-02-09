'use client';
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
export const BusinessUses = () => {
  return (
    <section className="relative w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-12 bg-(--bg-bg) py-12 sm:py-16 md:py-25 px-4 sm:px-6 md:px-12 lg:px-20">
      <SlideRight>
        <Hovering>
          <div className="w-full sm:w-[350px] md:w-[400px] h-[300px] sm:h-[380px] md:h-[420px] shrink-0 mb-8 lg:mb-0">
            <img
              src="AIdiary-Voicenote/business-uses.png"
              alt="Right Inbox"
              className="object-cover w-full h-full" />
          </div>
        </Hovering>
      </SlideRight>
      {/* Content */}
      <div className="relative z-10 max-w-full sm:max-w-3xl lg:max-w-6xl w-full flex flex-col items-center text-center lg:text-left">
        <SlideLeft>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center  lg:text-4xl font-bold mb-4 sm:mb-6 text-[#FFF15C] transition-colors duration-500">
            Business Uses
          </h2>
      <ul className="text-(--text-primary) text-sm sm:text-base md:text-lg px-4 sm:px-10 list-none space-y-2 lg:space-y-3">
            <li>• Meeting Notes on the Go: Record client calls or brainstorming sessions and convert them into text instantly.</li>
            <li>• Project Documentation: Maintain organized logs of tasks,deadlines, and key discussions.</li>
            <li>• Team Collaboration: Share select voice notes or written updates with colleagues securely for faster communication.</li>
            <li>• Log the work you did that day, where, times, hrs, who with, ect and options to share with your boss, so boss knows what &nbsp;&nbsp;&nbsp;employee did what each day , team sharing in business</li>
            <li>• Record client calls, brainstorming sessions, or meetings, AI transcribes them instantly and provides key points with clear &nbsp;&nbsp;&nbsp;summaries.</li>
          </ul>
        </SlideLeft>
      </div>
    </section>
  );
};
