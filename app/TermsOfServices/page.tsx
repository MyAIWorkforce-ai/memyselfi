import { pageMetadata } from "@/app/lib/metadata";
import TermOfServices from "./TermsOfServicesClient";
import { Metadata } from "next";
export async function generateMetadata() {
  return {
    title: "Terms of Service | MeMyselfI.ai",
    description:"Review the legal terms governing use of the MeMyselfI.ai platform, subscriptions and services.",
    keywords:"terms of service, user agreement"
  };
}
export default function Page() {
  return <TermOfServices/>;
}
