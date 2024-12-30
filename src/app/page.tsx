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
          <Link
            href="/programm"
            className="relative flex h-full cursor-pointer items-center rounded-lg bg-white p-2 shadow-sm transition-transform hover:scale-105"
          >
            <div className="absolute top-0 z-10 -ml-[16px] -mt-[16px] rounded bg-orange-500 px-3 py-1 font-freeman text-xl text-white">
              Freitag, 09.05.2025
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="relative flex-1 p-2">
                <Image
                  className="max-h-40 md:max-h-64"
                  alt="Blech X-Plosion 2025"
                  src="/blech-2.svg"
                  height={600}
                  width={1080}
                ></Image>
              </div>
            </div>
          </Link>

          <Link
            href="/programm"
            className="relative flex h-full cursor-pointer items-center rounded-lg bg-white p-2 shadow-sm transition-transform hover:scale-105"
          >
            <div className="absolute top-0 z-10 -ml-[16px] -mt-[16px] rounded bg-orange-500 px-3 py-1 font-freeman text-xl text-white">
              Samstag, 10.05.2025
            </div>
            <div className="flex flex-row items-center items-stretch justify-center">
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="flex-1"
                  alt="Knutschfleck"
                  src="/knutschfleck.svg"
                  height={400}
                  width={1080}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span>Party mit</span>
                  <br />
                  <span className="text-lg">Knutschfleck</span>
                </p>
              </div>
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="h-24 flex-1"
                  alt="Familiennachmittag"
                  src="/familiennachmittag.svg"
                  height={880}
                  width={880}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span>Für Groß und Klein:</span>
                  <br />
                  <span className="text-lg">Familiennachmittag</span>
                </p>
              </div>
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="flex-1"
                  alt="Wertungsspiel"
                  src="/wertungsspiel.svg"
                  height={600}
                  width={1080}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span>Für Orchester:</span>
                  <br />
                  <span className="text-lg">Wertungsspiel</span>
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/programm"
            className="relative flex h-full cursor-pointer items-center rounded-lg bg-white p-2 shadow-sm transition-transform hover:scale-105"
          >
            <div className="absolute top-0 z-10 -ml-[16px] -mt-[16px] rounded bg-orange-500 px-3 py-1 font-freeman text-xl text-white">
              Sonntag, 11.05.2025
            </div>
            <div className="flex flex-row items-center items-stretch justify-center">
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="flex-1"
                  alt="Festumzug"
                  src="/festumzug.svg"
                  height={600}
                  width={1080}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span>Großer</span>
                  <br />
                  <span className="text-lg">Festumzug</span>
                </p>
              </div>
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="flex-1"
                  src="/mvs-logo-100.svg"
                  alt="100 Jahre Musikverein Schwieberdingen"
                  width={1080}
                  height={700}
                />
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span>Jubiläum 100 Jahre</span>
                  <br />
                  <span className="text-lg">MV Schwieberdingen</span>
                </p>
              </div>
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="flex-1"
                  alt="Feuriger Elias"
                  src="/zug.svg"
                  height={830}
                  width={830}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span>Anreisen mit dem</span>
                  <br />
                  <span className="text-lg">Feurigen Elias</span>
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/programm"
            className="relative flex h-full cursor-pointer items-center rounded-lg bg-white p-2 shadow-sm transition-transform hover:scale-105"
          >
            <div className="absolute top-0 z-10 -ml-[16px] -mt-[16px] rounded bg-orange-500 px-3 py-1 font-freeman text-xl text-white">
              Montag, 12.05.2025
            </div>
            <div className="flex flex-row items-center items-stretch justify-center">
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="flex-1"
                  alt="Mittagstisch"
                  src="/mittagstisch.svg"
                  height={800}
                  width={1080}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span>Sparen und genießen beim</span>
                  <br />
                  <span className="text-lg">Mittagstisch</span>
                </p>
              </div>
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="flex-1"
                  alt="Montagabendshow"
                  src="/montagabend.svg"
                  height={880}
                  width={1080}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span>Festausklang mit der</span>
                  <br />
                  <span className="text-lg">Montagabendshow</span>
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-6 flex w-full items-center justify-center">
          <Link
            href="/programm"
            className="inline-block w-full rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
          >
            Das komplette Programm
          </Link>
        </div>
      </section>

      {/* Competition Section */}
      <section className="border-t bg-white p-4 md:p-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-2 text-lg">
            Blasmusik Kreisverband Ludwigsburg e.V.
          </h2>
          <h3 className="mb-6 text-xl font-bold">Wertungsspiel</h3>
          <Link
            href="/wertungsspiel"
            className="inline-block w-full rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
          >
            Informationen zum Wertungsspiel
          </Link>
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
