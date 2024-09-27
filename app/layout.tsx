import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const titillium_font = Titillium_Web({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nick Lusweti Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titillium_font.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
