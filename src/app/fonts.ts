import { MuseoModerno, Onest, Roboto_Condensed } from "next/font/google";

export const museo_font = MuseoModerno({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-museo",
});

export const robotocon_font = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-robotocon",
});

export const onest_font = Onest({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-onest",
});
