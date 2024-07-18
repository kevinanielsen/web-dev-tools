import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} w-full h-full flex flex-col items-center`}>
        {children}
        <span className="fixed bottom-8 left-8">
          <Link href="github.com/kevinanielsen/web-dev-tools" target="_blank">
            <img className="w-12 h-12 hover:scale-90 transition-all" src="/github-mark.svg" alt="GitHub" />
          </Link>
        </span>
      </body>
    </html>
  );
}
