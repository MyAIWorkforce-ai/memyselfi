'use client';
import { useState ,useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon, Bars3Icon, XMarkIcon, SunIcon, MoonIcon} from '@heroicons/react/24/solid';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
     setIsFeaturesOpen(false);
    }, 300); 
  };

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current); 
    }
  };
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
const isMobileActive = (path: string) => pathname === path;
  const isActive = (path: string) => pathname === path;
  const hoverColor = theme === 'dark' ? 'hover:text-[#FFED29]' : 'hover:text-[#FFED29]';
  const goToPricing = () => {
    if (pathname === "/") {
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#pricing";
    }
  };

  const goToTestimonials = () => {
    if (pathname === "/") {
      document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#testimonials";
    }
  };

  const goToContact = () => {
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const featurePaths = [
    "/UnifiedInbox",
    "/AiSmartCalendar",
    "/AiDiaryVoicenotes",
    "/AiVoiceAssistant",
    "/AiCallAgent",
    "/AiBudgetModule",
    "/Vault",
    "/AiHealthTracking"
  ];
  const isAnyFeatureActive = featurePaths.includes(pathname);

  return (
    <nav
      className="w-full shadow-sm fixed top-0 left-0 z-50 text-base font-inter font-regular"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        <Link
          href="/"
          className={`flex items-center justify-center  transition-colors duration-200
          `}
        >
          <img
            src={theme === 'light'
              ? "/landingpage-images/light-theme-logo.png"
              : "/landingpage-images/dark-theme-logo.png"
            }
            alt="Main Logo"      
            className='w-60 h-12'
            
          />
        </Link>
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6" >
          {/* FEATURES DROPDOWN */}
          <div className="relative"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}>
            <button
              className={`
                flex items-center gap-1 text-base transition-colors duration-200
                ${isAnyFeatureActive || isFeaturesOpen ? "text-[#FFED29]" : "text-(--text-primary)"}
                ${!isAnyFeatureActive && !isFeaturesOpen ? hoverColor : ""}
              `}
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
               >

              Features
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform duration-300 ${isFeaturesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isFeaturesOpen && (
              <div
                className="absolute top-8 left-0 rounded-lg shadow-lg w-44 py-2 border transition-colors"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  borderColor: theme === 'dark' ? '#374151' : '#E5E7EB'
                }} >

                <Link href="/UnifiedInbox"
                  className={`block px-4 py-2 text-base transition-colors duration-200
                    ${isActive('/UnifiedInbox') ? 'text-[#FFED29]' : hoverColor}`} onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
>Unified Inbox </Link>

                <Link href="/AiSmartCalendar"
                  className={`block px-4 py-2 text-base transition-colors duration-200
                    ${isActive('/AiSmartCalendar') ? 'text-[#FFED29]' : hoverColor}`} onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
>AI Smart Calendar</Link>

                <Link href="/AiDiaryVoicenotes"
                  className={`block px-4 py-2 text-base transition-colors duration-200
                    ${isActive('/AiDiaryVoicenotes') ? 'text-[#FFED29]' : hoverColor}`} onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
>AI Diary & Voice Notes</Link>

                <Link href="/AiVoiceAssistant"
                  className={`block px-4 py-2 text-base transition-colors duration-200
                    ${isActive('/AiVoiceAssistant') ? 'text-[#FFED29]' : hoverColor}`} onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
>AI Voice Assistant</Link>

                <Link href="/AiCallAgent"
                  className={`block px-4 py-2 text-base transition-colors duration-200
                    ${isActive('/AiCallAgent') ? 'text-[#FFED29]' : hoverColor}`} onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
>AI Call Agent</Link>

                <Link href="/AiBudgetModule"
                  className={`block px-4 py-2 text-base transition-colors duration-200
                    ${isActive('/AiBudgetModule') ? 'text-[#FFED29]' : hoverColor}`} onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
>AI Budget Module</Link>

                <Link href="/Vault"
                  className={`block px-4 py-2 text-base transition-colors duration-200
                    ${isActive('/Vault') ? 'text-[#FFED29]' : hoverColor}`} onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
>Vault</Link>

                        <Link href="/AiHealthTracking"
                  className={`block px-4 py-2 text-base transition-colors duration-200
                    ${isActive('/AiHealthTracking') ? 'text-[#FFED29]' : hoverColor}`} onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
>AI Health Tracking</Link>
              </div>
            )}
          </div>


          <button
            onClick={goToPricing}
            className={`text-base transition-colors duration-200 ${hoverColor}`}
          >
            Pricing
          </button>

          <button
            onClick={goToTestimonials}
            className={`text-base transition-colors duration-200 ${hoverColor}`}
          >
            Testimonials
          </button>

          <button
            onClick={goToContact}
            className={`text-base transition-colors duration-200 ${hoverColor}`}
          >
            Contact
          </button>

          <button onClick={toggleTheme} className="p-2 rounded-full transition-colors duration-200">
            {theme === 'light'
              ? <MoonIcon className="w-5 h-5" />
              : <SunIcon className="w-5 h-5" />
            }
          </button>

          <Link
            href="https://app.memyselfi.ai/login" target='blank'
            className="px-4 py-1 rounded-lg text-base transition-colors duration-200 border-transparent border-2 hover:border-[#FFED29]"
          >
            Log In
          </Link>

          <Link
            href="https://app.memyselfi.ai/signup" target='blank'
            className="px-4 py-1 rounded-lg font-semibold  text-black  transition-colors bg-[#FFED29] duration-200  hover:bg-[#000000] hover:text-[#FFED29]"
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}
          >
          <Bars3Icon className="w-7 h-7" style={{ color: 'var(--text-primary)' }} />
        </button>
      </div>
{/* MOBILE MENU PANEL */}
{mobileMenuOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-60 md:hidden z-50 "
    onClick={() => setMobileMenuOpen(false)}  >
    <div
      className="absolute right-0 top-0 h-full w-3/4 p-6 shadow-lg text-base"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
        onClick={(e) => e.stopPropagation()}   
  onTouchStart={(e) => e.stopPropagation()}
    >
      <button className="mb-6" onClick={() => setMobileMenuOpen(false)}>
        <XMarkIcon className="w-7 h-7" />
      </button>

     <div 
          className="flex flex-col items-start gap-4 w-full"
          
        >
             {/* FEATURES COLLAPSIBLE */}
        <div className="flex flex-col ">
          <button 
            className={`flex items-center justify-between  py-1 text-left ${hoverColor}`}
            onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
          >
            Features
            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
          </button>
 {isFeaturesOpen && (
  <div className="flex flex-col pl-4 mt-1 gap-1">
    <Link href="/UnifiedInbox" onClick={() => setMobileMenuOpen(false)} className={`${isMobileActive('/UnifiedInbox') ? 'text-yellow-400' : hoverColor}`}>Unified Inbox</Link>
    <Link href="/AiSmartCalendar" onClick={() => setMobileMenuOpen(false)} className={`${isMobileActive('/AiSmartCalendar') ? 'text-yellow-400' : hoverColor}`}>AI Smart Calendar</Link>
    <Link href="/AiDiaryVoicenotes" onClick={() => setMobileMenuOpen(false)} className={`${isMobileActive('/AiDiaryVoicenotes') ? 'text-yellow-400' : hoverColor}`}>AI Diary & Voice Notes</Link>
    <Link href="/AiVoiceAssistant" onClick={() => setMobileMenuOpen(false)} className={`${isMobileActive('/AiVoiceAssistant') ? 'text-yellow-400' : hoverColor}`}>AI Voice Assistant</Link>
    <Link href="/AiCallAgent" onClick={() => setMobileMenuOpen(false)} className={`${isMobileActive('/AiCallAgent') ? 'text-yellow-400' : hoverColor}`}>AI Call Agent</Link>
    <Link href="/AiBudgetModule" onClick={() => setMobileMenuOpen(false)} className={`${isMobileActive('/AiBudgetModule') ? 'text-yellow-400' : hoverColor}`}>AI Budget Module</Link>
    <Link href="/Vault" onClick={() => setMobileMenuOpen(false)} className={`${isMobileActive('/Vault') ? 'text-yellow-400' : hoverColor}`}>Vault</Link>
    <Link href="/AiHealthTracking" onClick={() => setMobileMenuOpen(false)} className={`${isMobileActive('/AiHealthTracking') ? 'text-yellow-400' : hoverColor}`}>AI Health Tracking</Link>
  </div>
)}
</div>
<Link href="/#pricing" onClick={() => setMobileMenuOpen(false)} className={`${pathname === "/#pricing" ? 'text-yellow-400' : hoverColor}`}>Pricing</Link>
<Link href="/#testimonials" onClick={() => setMobileMenuOpen(false)} className={`${pathname === "/#testimonials" ? 'text-yellow-400' : hoverColor}`}>Testimonials</Link>
<Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className={`${pathname === "/#contact" ? 'text-yellow-400' : hoverColor}`}>Contact</Link>
        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="mt-4 p-2 w-12 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ backgroundColor: theme === 'dark' ? '#374151' : '#E5E7EB' }}
        >
          {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
        </button>
        {/* LOGIN / SIGNUP */}
        <Link href="https://app.memyselfi.ai/login" className="mt-6 px-4 py-2 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Log In</Link>
        <Link href="https://app.memyselfi.ai/signup" className="px-4 py-2 rounded-lg text-center hover:bg-yellow-500 transition-colors">Sign Up</Link>
      </div>
    </div>
  </div>

  
)}
    
 
    </nav>



  );
}
