'use client';
import { useState, useEffect, useRef } from 'react';
import VaultSlider from './landingpage-carousal/VaultSlider';
import AiAssistantSlider from './landingpage-carousal/AiAssistantSlider';
import AiCallAgentSlider from './landingpage-carousal/AiCallAgentSlider';
import AiDiaryNotesSlider from './landingpage-carousal/AiDiaryNotesSlider';
import AiSmartSlider from './landingpage-carousal/AiSmartSlider';
import AibBudgetTrackingSlider from './landingpage-carousal/AiBudgetTrackingSlider';
import UnifiedInboxSlider from './landingpage-carousal/UnifiedInboxSlider';

const sliders = [
  UnifiedInboxSlider,
   AiSmartSlider,
  AiDiaryNotesSlider,
   AiAssistantSlider,
  AiCallAgentSlider,
  AibBudgetTrackingSlider,
  VaultSlider
];
const extendedSliders = [...sliders, sliders[0]];
const LandingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.style.transition = 'transform 1.5s ease-in-out';
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
    if (currentIndex === sliders.length) {
      setTimeout(() => {
        container.style.transition = 'none';
        container.style.transform = 'translateX(0%)';
        setCurrentIndex(0);
      }, 1500);
    }
  }, [currentIndex]);
  return (
    <div className="relative w-full overflow-hidden">
      <div ref={containerRef} className="flex w-full">
        {extendedSliders.map((SliderComponent, idx) => (
          <div key={idx} className="flex-[0_0_100%] w-full">
            <SliderComponent />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingCarousel;
