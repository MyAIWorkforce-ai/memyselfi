import { pageMetadata } from "@/app/lib/metadata";
import PrivacyPolicy from "./PrivacyPolicyClient";
import {Footer} from "@/app/pages-components/landingPage/Footer"
import { Metadata } from "next";
export async function generateMetadata() {
  return {
    title: 
": Privacy Policy | MeMyselfI.ai",
    description:
"Learn how MeMyselfI.ai handles your data, integrations and privacy while delivering powerful AI automation.",
    keywords:
"privacy policy, AI privacy"  };
}
export default function Page() {
  return(
  <> <PrivacyPolicy/>
  <Footer /> </>
  );
}
