import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kreismusikfest Ludwigsburg 2025",
  description:
    "Kreismusikfest Ludwigsburg 2025 | 09. bis 12. Mai 2025 | Festplatz Schwieberdingen",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen min-w-[360px] antialiased`}
      >
        <div className="min-h-screen min-w-[360px] bg-gray-100">
          {/* Container for boxed layout */}
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col bg-white shadow-lg">
            {/* Header */}
            <header className="w-full border-b">
              <div className="p-2">
                {/* Logo */}
                <div className="flex flex-col items-center">
                  <div className="relative h-36 w-full max-w-3xl md:h-72">
                    <Link href="/">
                      <Image
                        src="/logo.svg"
                        alt="Kreismusikfest 2025"
                        fill={true}
                        style={{ objectFit: "contain" }}
                        priority
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-grow">{children}</main>

            <footer className="border-t bg-gray-800">
              <div className="flex items-center justify-center bg-gray-900 p-2 text-sm">
                <Link
                  href="/impressum"
                  className="text-gray-400 hover:text-gray-200"
                >
                  Impressum
                </Link>
                <span className="px-2 text-gray-500">|</span>
                <Link
                  href="/impressum#datenschutz"
                  className="text-gray-400 hover:text-gray-200"
                >
                  Datenschutz
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
