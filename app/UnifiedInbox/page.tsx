import { pageMetadata } from "@/app/lib/metadata";
import { Metadata } from "next";
import UnifiedInbox from "./UnifiedInboxClient";

export async function generateMetadata() {
  return {
    title: "Unified Inbox AI | Combine Email, SMS, WhatsApp & Social Messages",
    description:"One inbox for everything. Combine email, SMS, WhatsApp, Instagram and more into one AI-powered unified inbox with smart sorting, summaries and replies.",
    keywords:"unified inbox AI, combined inbox, AI message management"
  };
}
export default function Page() {
  return <UnifiedInbox/>;
}
