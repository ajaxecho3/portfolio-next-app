import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/hooks/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bernardino Ochoa",
  description: "Bernardino Ochoa Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-black dark:text-white  dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
