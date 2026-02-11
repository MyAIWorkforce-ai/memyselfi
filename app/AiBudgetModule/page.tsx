import { pageMetadata } from "@/app/lib/metadata";
import AiBudgetModule from "./AiBudgetModuleClient";
import { Metadata } from "next";
export async function generateMetadata() {
  return {
    title: 
"AI Budget Tracker | Smart Expense & Spending Insights",
    description:
"Track expenses, manage income and receive AI-powered financial insights to stay in control of your money.",
    keywords:
"AI budget tracker, expense tracking app"
  };
}
export default function Page() {
  return <AiBudgetModule/>;
}
