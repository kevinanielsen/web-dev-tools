import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web development tools",
  description: "A user curated collection of web development tools",
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
        <Link href="#top" className="fixed bottom-8 right-8 border rounded-full p-2 hover:bg-primary/5 transition-all">
          <img src="/scroll.svg" alt="Scroll to top" className="w-6 h-6" />
          <span className="sr-only">Scroll to top</span>
        </Link>
      </body>
      <GoogleAnalytics gaId="G-P585GSZG7M" />
    </html>
  );
}
