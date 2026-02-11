import { pageMetadata } from "@/app/lib/metadata";
import Support from "./SupportClient";
import { Metadata } from "next";
export async function generateMetadata() {
  return {
    title:
"Support & Help Centre | MeMyselfI.ai Customer Support",
    description:
"Get help with setup, features and troubleshooting. Contact MeMyselfI.ai support for fast assistance with your AI personal assistant.",
    keywords:
"AI support, help centre, customer support, MeMyselfI help",
  };
}
export default function Page() {
  return <Support/>;
}
