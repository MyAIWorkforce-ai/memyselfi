import { pageMetadata } from '@/app/lib/metadata';
import AiVoiceAssistant from './AiVoiceAssistantClient';

import { Metadata } from "next";
export async function generateMetadata() {
  return {
    title: 
"AI Voice Assistant | Hands-Free Personal Management",
    description:
"Control your life with voice. Schedule appointments, send messages and manage tasks using MeMyselfI.ai’s powerful voice assistant.",
    keywords:
"AI voice assistant, hands free productivity"  };
}
export default function page(){
  return <AiVoiceAssistant/>
}