import { pageMetadata } from "@/app/lib/metadata";
import Vault from "./VaultClient";
import { Metadata } from "next";

export async function generateMetadata() {
  return {

        title:"Secure Digital Vault | Store Personal Documents & Records",
    description:"Store important documents, IDs and records in one secure digital vault with instant access whenever you need it.",
    keywords: [
      "digital vault",
      "document storage app"
    ],
  }}

export default function Page() {
  return 
  <Vault/>;
}
