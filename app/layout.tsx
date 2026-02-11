import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "AI Personal Assistant App | MeMyselfI.ai – Your Life. All in One Place. Powered by AI",
  description: "MeMyselfI.ai is an all-in-one AI personal assistant app that unifies your inbox, calendar, tasks, calls and budgeting into one intelligent platform — helping manage personal life and work when needed.",
  keywords: [
    "AI personal assistant app", 
    "all in one AI app", 
    "life management AI", 
    "productivity assistant", 
    "unified inbox AI", 
    "smart calendar AI"
  ],
 
 openGraph: {
  title: "AI Personal Assistant App | MeMyselfI.ai – Your Life. All in One Place. Powered by AI",
  description: "MeMyselfI.ai is an all-in-one AI personal assistant app that unifies your inbox, calendar, tasks, calls and budgeting into one intelligent platform — helping manage personal life and work when needed.",
    url: "https://memyselfi-ai-website.vercel.app/",
    siteName: "memyselfi-ai",
    type: "website",
    },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
