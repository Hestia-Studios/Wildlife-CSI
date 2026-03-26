import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Wildlife CSI Academy",
    description:
        "Immersive, hands-on wildlife crime investigation training for law enforcement, investigators, and civilians.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${geist.className} bg-[#0A0908] text-[#F5EDD8]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}