import { pageMetadata } from '@/app/lib/metadata';
import { Metadata } from "next";
import  AiCallAgent from './AiCallAgentClient';
export async function generateMetadata() {
  return {
    title: 
"AI Call Agent | Automated Call Handling & Summaries",
    description:
"Let AI answer calls, capture enquiries, provide transcripts and sync actions directly into your calendar and tasks.",
    keywords:
"AI call agent, call automation, AI receptionist"  };
}
export default function page(){
  return <AiCallAgent/>
}