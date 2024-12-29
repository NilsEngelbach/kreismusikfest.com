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
  title: "Kreismusikfest 2025",
  description: "Kreismusikfest 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <div className="min-h-screen bg-gray-100">
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

                  <div className="my-2 flex flex-col text-center font-freeman text-3xl text-orange-500 md:my-8 md:text-5xl lg:flex-row">
                    <span>09.-12.05.2025</span>
                    <span className="hidden px-4 lg:block">|</span>
                    <span>Festplatz Schwieberdingen</span>
                  </div>
                </div>

                <Navigation />
              </div>
            </header>

            <main className="flex-grow">{children}</main>

            <footer className="border-t bg-gray-800">
              <div className="p-4 text-white md:p-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                  <div>
                    <h3 className="mb-4 font-bold">Über Uns</h3>
                    <div className="flex flex-col gap-4">
                      {/* Logo placeholders */}
                      <a href="https://www.bvbw-ludwigsburg.de" target="_blank">
                        <div className="relative rounded bg-white p-4 shadow-sm">
                          <Image
                            src="/kvlb-logo.svg"
                            alt="Blasmuik Kreisverband Ludwigsburg Logo"
                            width={2613}
                            height={871}
                            priority
                          />
                        </div>
                      </a>
                      <a
                        href="https://www.mv-schwieberdingen.de"
                        target="_blank"
                      >
                        <div className="relative rounded bg-white p-4 shadow-sm">
                          <Image
                            src="/mvs-logo-100.svg"
                            alt="100 Jahre Musikverein Schwieberdingen"
                            width={1080}
                            height={700}
                            priority
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 font-bold">Seiten</h3>
                    <ul className="space-y-2">
                      {[
                        "Programm",
                        "Wertungsspiel",
                        "Tickets",
                        "FAQ & Anfahrt",
                        "Kontakt",
                      ].map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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
