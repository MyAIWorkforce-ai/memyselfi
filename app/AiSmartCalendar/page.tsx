import { pageMetadata } from "@/app/lib/metadata";
import AiSmartCalendarClient from "./AiSmartCalendarClient";
import { Metadata } from "next";
export async function generateMetadata() {
  return {
    title: 
"AI Smart Calendar | Automatic Scheduling & Voice Reminders",
    description:
"Organise personal and work schedules with an AI smart calendar that books meetings, manages reminders and adapts automatically using voice commands.",
    keywords:
"AI calendar app, smart scheduling, voice calendar"  };
}
export default function Page() {
  return <AiSmartCalendarClient />;
}
