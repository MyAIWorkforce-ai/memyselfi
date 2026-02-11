import { pageMetadata } from '@/app/lib/metadata';
import AiDiaryVoicenotes from './AiDiaryVoicenotesClient';
import { Metadata } from "next";
export async function generateMetadata() {
  return {
    title: 
"AI Diary & Voice Notes | Intelligent Journaling",
    description:
"Capture ideas, voice notes and reflections with an AI diary that organises your thoughts and provides meaningful insights.",
    keywords:
"AI diary, voice notes app, digital journal AI"  };
}
export default  function page(){
  return <AiDiaryVoicenotes/>
}