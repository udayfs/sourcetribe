import { inter_font } from "@/app/fonts";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Tixio",
  description: "Events and entertainment management",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter_font.className}>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
