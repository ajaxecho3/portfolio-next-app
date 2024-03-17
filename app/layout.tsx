import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/hooks/ThemeProvider";
import Header from "@/components/Header";
import { getSocials } from "@/sanity/sanity.utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bernardino Ochoa",
  description: "Bernardino Ochoa Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socials = await getSocials();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} text-black dark:text-white  dark:bg-gray-900`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header socials={socials} />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
