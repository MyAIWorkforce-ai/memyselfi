import { HeroSection } from './pages-components/landingPage/HeroSection';
import { PowerfullFeatures } from './pages-components/landingPage/PowerfullFeatures';
import { DontWorrySection } from './pages-components/landingPage/DontWorrySection';
import { YourData } from './pages-components/landingPage/YourData';
import { ControlYourLife } from './pages-components/landingPage/ControllYourLife';
import { ExperienceMemySelf } from './pages-components/landingPage/ExperienceMemySelf';
import TransparentPricing from './pages-components/landingPage/TransparentPricing';
import { Footer } from './pages-components/landingPage/Footer';
import WhatUserSays from './pages-components/landingPage/whatUserSays';
import ContactSection from './pages-components/landingPage/ContactSection';
import LandingCarousel from './pages-components/landingPage/LandingCarousal';

export async function generateMetadata() {
  return {
    title: 
"AI Personal Assistant App | MeMyselfI.ai – Your Life. All in One Place. Powered by AI",
    description:
"MeMyselfI.ai is an all-in-one AI personal assistant app that unifies your inbox, calendar, tasks, calls and budgeting into one intelligent platform — helping manage personal life and work when needed.",    keywords:
"AI personal assistant app, all in one AI app, life management AI, productivity assistant, unified inbox AI, smart calendar AI" };
}
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PowerfullFeatures />
      <DontWorrySection />
      <YourData />
      <LandingCarousel />
      <ControlYourLife />

      <section id="testimonials">
        <WhatUserSays />
      </section>
      <ExperienceMemySelf />

      <section id="pricing">
        <TransparentPricing />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}


