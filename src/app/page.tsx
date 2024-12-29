import Image from "next/image";
import Countdown from "./countdown";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Highlights Section */}
      <section className="bg-gray-50 p-4 md:p-6">
        <h2 className="mb-6 text-center text-2xl font-semibold">Highlights</h2>

        {/* Feature Box */}
        <Link href="/programm" className="cursor-pointer">
          <div className="relative mb-6 w-full transform rounded-lg bg-white p-2 shadow-sm transition-transform hover:scale-105 md:p-4">
            <Image
              src="/blech-x-plosion.webp"
              alt="Blech X-Plosion 2025"
              width={1500}
              height={844}
              priority
            />
          </div>
        </Link>

        <Countdown />

        {/* Event Grid - Mobile: Stack, Desktop: 2 columns */}
        <div className="mt-6 space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
          {[
            "Freitag, 09.05.2025",
            "Samstag, 10.05.2025",
            "Sonntag, 11.05.2025",
            "Montag, 12.05.2025",
          ].map((date) => (
            <div
              key={date}
              className="relative rounded-lg bg-white p-4 shadow-sm"
            >
              <div className="absolute -ml-[24px] -mt-[24px] inline-block rounded bg-orange-500 px-3 py-1 font-freeman text-xl text-white">
                {date}
              </div>
              <div className="h-32">{/* Event content placeholder */}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex w-full items-center justify-center">
          <button className="w-full rounded bg-orange-500 px-6 py-2 font-freeman text-white hover:bg-orange-600 md:w-auto">
            Das komplette Programm
          </button>
        </div>
      </section>

      {/* Competition Section */}
      <section className="border-t bg-white p-4 md:p-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-2 text-lg">
            Blasmusik Kreisverband Ludwigsburg e.V.
          </h2>
          <h3 className="mb-6 text-xl font-bold">Wertungsspiel</h3>
          <button className="w-full rounded bg-orange-500 px-6 py-2 text-white hover:bg-orange-600 md:w-auto">
            Informationen zum Wertungsspiel
          </button>
        </div>
      </section>

      {/* Anniversary Section */}
      <section className="border-t bg-gray-50 p-4 md:p-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-2 text-xl font-bold">Jubiläum 100 Jahre</h2>
          <h3>Musikverein Schwieberdingen</h3>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="border-t bg-white p-4 md:p-6">
        <h2 className="mb-6 text-center text-xl font-bold">Sponsoren</h2>
        <div className="flex justify-center">
          <div className="rounded bg-gray-50 p-4 shadow-sm">VR-Bank Logo</div>
        </div>
      </section>
    </main>
  );
}
