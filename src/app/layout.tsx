import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const font = localFont({ src: "../../public/FantasqueSansMNF.ttf" });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={font.className} lang="en">
            <body className="bg-zinc-200 text-slate-700">{children}</body>
        </html>
    );
}
