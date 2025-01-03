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
          <div className="relative w-full transform rounded-lg bg-white p-2 shadow-sm transition-transform md:mb-6 md:p-4 md:hover:scale-105">
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
        <div className="mt-6 space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
          <Link
            href="/programm"
            className="relative flex h-full cursor-pointer items-center rounded-lg bg-white p-2 shadow-sm transition-transform md:hover:scale-105"
          >
            <div className="absolute top-0 z-10 -ml-[16px] -mt-[16px] rounded bg-orange-500 px-3 py-1 font-freeman text-xl text-white">
              Freitag, 09.05.2025
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="relative flex-1 p-2">
                <Image
                  className="max-h-40 md:max-h-56"
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
            className="relative flex h-full cursor-pointer items-center rounded-lg bg-white p-2 shadow-sm transition-transform md:hover:scale-105"
          >
            <div className="absolute top-0 z-10 -ml-[16px] -mt-[16px] rounded bg-orange-500 px-3 py-1 font-freeman text-xl text-white">
              Samstag, 10.05.2025
            </div>
            <div className="flex flex-col items-center items-stretch justify-center pt-4 xs:flex-row">
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="max-h-16 flex-1 md:max-h-24"
                  alt="Knutschfleck"
                  src="/knutschfleck.svg"
                  height={400}
                  width={1080}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span className="md:text-md text-sm">Party mit</span>
                  <br />
                  <span className="text-md md:text-lg">Knutschfleck</span>
                </p>
              </div>
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="max-h-24 flex-1"
                  alt="Familiennachmittag"
                  src="/familiennachmittag.svg"
                  height={880}
                  width={880}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span className="md:text-md text-sm">
                    Für Groß und Klein:
                  </span>
                  <br />
                  <span className="text-md md:text-lg">Familiennachmittag</span>
                </p>
              </div>
              <div className="relative flex flex-col justify-between p-2 md:hidden lg:flex">
                <Image
                  className="max-h-24 flex-1"
                  alt="Wertungsspiel"
                  src="/wertungsspiel.svg"
                  height={600}
                  width={1080}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span className="md:text-md text-sm">Für Orchester:</span>
                  <br />
                  <span className="text-md md:text-lg">Wertungsspiel</span>
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/programm"
            className="relative flex h-full cursor-pointer items-center rounded-lg bg-white p-2 shadow-sm transition-transform md:hover:scale-105"
          >
            <div className="absolute top-0 z-10 -ml-[16px] -mt-[16px] rounded bg-orange-500 px-3 py-1 font-freeman text-xl text-white">
              Sonntag, 11.05.2025
            </div>
            <div className="flex flex-col items-center items-stretch justify-center pt-4 xs:flex-row">
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="max-h-24 flex-1"
                  alt="Festumzug"
                  src="/festumzug.svg"
                  height={600}
                  width={1080}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span className="md:text-md text-sm">Großer</span>
                  <br />
                  <span className="text-md md:text-lg">Festumzug</span>
                </p>
              </div>
              <div className="relative flex flex-col justify-between p-2">
                <Image
                  className="max-h-24 flex-1"
                  src="/mvs-logo-100.svg"
                  alt="100 Jahre Musikverein Schwieberdingen"
                  width={1080}
                  height={700}
                />
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span className="md:text-md text-sm">Jubiläum 100 Jahre</span>
                  <br />
                  <span className="text-md md:text-lg">MV Schwieberdingen</span>
                </p>
              </div>
              <div className="relative flex flex-col justify-between p-2 md:hidden lg:flex">
                <Image
                  className="max-h-24 flex-1"
                  alt="Feuriger Elias"
                  src="/zug.svg"
                  height={830}
                  width={830}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span className="md:text-md text-sm">Anreisen mit dem</span>
                  <br />
                  <span className="text-md md:text-lg">Feurigen Elias</span>
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/programm"
            className="relative flex h-full cursor-pointer items-center rounded-lg bg-white p-2 shadow-sm transition-transform md:hover:scale-105"
          >
            <div className="absolute top-0 z-10 -ml-[16px] -mt-[16px] rounded bg-orange-500 px-3 py-1 font-freeman text-xl text-white">
              Montag, 12.05.2025
            </div>
            <div className="flex flex-col items-center items-stretch justify-center pt-4 xs:flex-row">
              <div className="relative flex flex-col justify-between p-1 md:p-2">
                <Image
                  className="max-h-24 flex-1"
                  alt="Mittagstisch"
                  src="/mittagstisch.svg"
                  height={800}
                  width={1080}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span className="md:text-md text-sm">
                    Sparen und genießen beim
                  </span>
                  <br />
                  <span className="text-md md:text-lg">Mittagstisch</span>
                </p>
              </div>
              <div className="relative flex flex-col justify-between p-1 md:p-2">
                <Image
                  className="max-h-24 flex-1"
                  alt="Montagabendshow"
                  src="/montagabend.svg"
                  height={880}
                  width={1080}
                ></Image>
                <p className="mt-2 text-center font-freeman text-orange-500">
                  <span className="md:text-md text-sm">
                    Festausklang mit der
                  </span>
                  <br />
                  <span className="text-md md:text-lg">Montagabendshow</span>
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
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-2 text-lg">
            Blasmusik Kreisverband Ludwigsburg e.V.
          </h2>
          <h3 className="mb-6 text-xl font-bold">Wertungsspiel</h3>
          <div className="mb-4 flex w-full flex-col-reverse items-center gap-4 text-justify md:flex-row">
            <div className="flex-1">
              <figure className="mb-4 transform transition-transform md:mb-0 md:hover:scale-105">
                <Link href="/wertungsspiel">
                  <Image
                    alt="Wertungsspiel"
                    src="/orchestra.jpg"
                    height={1000}
                    width={667}
                  ></Image>
                </Link>
                <figcaption className="text-center text-sm text-gray-600">
                  Beim Wertungsspiel können sich die Kapellen messen
                </figcaption>
              </figure>
            </div>
            <div className="flex-1">
              <p className="mb-4">
                Der <b>Blasmusik-Kreisverband Ludwigsburg</b> lädt herzlich zum{" "}
                <b>Wertungsspiel am Samstag 10. Mai 2025</b> ein. Ziel des
                Wertungsspiels ist es, den <b>musikalischen Austausch</b> zu
                fördern, die <b>musikalische Qualität zu steigern</b> und den
                teilnehmenden Ensembles wertvolle Rückmeldungen von erfahrenen
                Fachjuroren zu geben. Das Wertungsspiel ist eine ausgezeichnete
                Gelegenheit für alle Blasorchester, Jugendblasorchester,
                Solisten, Ensembles und Bläserklassen, ihre Fähigkeiten unter
                Beweis zu stellen, <b>neue Impulse zu erhalten</b> und sich mit
                anderen <b>Blasmusikkapellen der Region zu messen</b>.
              </p>
              <p>
                Das Wertungsspiel findet im <b>Widdumhof</b> in{" "}
                <b>Korntal-Münchingen</b> statt.
              </p>
            </div>
          </div>
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
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-2 text-lg">Musikverein Schwieberdingen e.V.</h2>
          <h3 className="mb-6 text-xl font-bold">Jubiläum 100 Jahre</h3>

          <div className="mb-4 flex flex-col items-center gap-4 md:flex-row">
            <div className="flex-1 text-justify">
              <p className="mb-4">
                Seit seiner <b>Gründung im Jahr 1925</b> hat der Musikverein
                Schwieberdingen die lokale Kultur durch seine Musik bereichert
                und Generationen von Musikliebhabern begeistert. Von festlichen
                Konzerten bis hin zu stimmungsvollen Festen bedient der
                Musikverein <b>alle Facetten der Blasmusik</b>.
              </p>
              <p>
                Das kommende Jubiläum ist nicht nur eine Gelegenheit, auf eine{" "}
                <b>reiche Geschichte zurückzublicken</b>, sondern auch ein
                Moment des Stolzes und der Freude. Wir laden alle herzlich ein,
                mit uns dieses{" "}
                <b>bedeutende Jubiläum beim Kreismusikfest zu feiern</b>.
              </p>
            </div>
            <div className="flex-1">
              <figure className="transform transition-transform md:hover:scale-105">
                <Link href="https://www.mv-schwieberdingen.de" target="_blank">
                  <Image
                    alt="Musikverein Schwieberdingen 100 Jahre"
                    src="/MVS-100.png"
                    height={1080}
                    width={960}
                  ></Image>
                </Link>
                <figcaption className="text-sm text-gray-600">
                  Jugendkapelle, Blasorchester und Oldies des Musikverein
                  Schwieberdingen
                </figcaption>
              </figure>
            </div>
          </div>

          <Link
            href="https://www.mv-schwieberdingen.de"
            target="_blank"
            className="inline-block w-full rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
          >
            Homepage Musikverein Schwieberdingen
          </Link>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="border-t bg-white p-4 text-center md:p-6">
        <h2 className="mb-2 text-lg">Vielen Dank an alle</h2>
        <h3 className="mb-6 text-xl font-bold">Sponsoren & Unterstützer</h3>
        <div className="flex justify-center">
          <div className="bg-white-50 transform rounded p-4 shadow-md transition-transform md:hover:scale-105">
            <Link
              href="https://www.vrbank-lb.de/startseite.html"
              target="_blank"
            >
              <Image
                alt="VR-Bank Ludwigsburg"
                src="/sponsoren/VR-Bank-Ludwigburg.jpg"
                height={1303}
                width={275}
              ></Image>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-4 max-w-4xl text-center">
          <Link
            href="/kontakt"
            className="inline-block w-full rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
          >
            Sponsor werden
          </Link>
        </div>
      </section>

      {/* Anniversary Section */}
      <section className="border-t bg-gray-50 p-4 text-center md:p-6">
        <h2 className="mb-2 text-lg">Über 30 Stunden Live Musik</h2>
        <h3 className="mb-6 text-xl font-bold">Auf der Bühne & Festumzug</h3>

        <div className="grid-col-2 mx-auto mb-4 grid max-w-4xl justify-center gap-4 md:grid-cols-4">
          <div className="col-span-2 flex transform items-center justify-center rounded bg-white p-4 shadow-md transition-transform md:hover:scale-105">
            <Link href="/programm">
              <Image
                alt="Fättes Blech"
                src="/logos/Fättes-blech.png"
                width={1136}
                height={403}
                style={{ objectFit: "contain" }}
              ></Image>
            </Link>
          </div>
          <div className="col-span-2 flex transform items-center justify-center rounded bg-white p-4 shadow-md transition-transform md:hover:scale-105">
            <Link href="/programm">
              <Image
                alt="Druckluft"
                src="/logos/Druckluft.png"
                width={3326}
                height={1239}
                style={{ objectFit: "contain" }}
              ></Image>
            </Link>
          </div>
          <div className="flex transform items-center justify-center rounded bg-white p-4 shadow-md transition-transform md:hover:scale-105">
            <Link href="/programm">
              <Image
                alt="Musikverein Ahausen"
                src="/logos/MV-Ahausen.png"
                width={3375}
                height={1312}
                style={{ objectFit: "contain" }}
              ></Image>
            </Link>
          </div>
          <div className="flex transform items-center justify-center rounded bg-white p-4 shadow-md transition-transform md:hover:scale-105">
            <Link href="/programm">
              <Image
                alt="Knutschfleck"
                src="/logos/Knutschfleck.png"
                width={1209}
                height={422}
                style={{ objectFit: "contain" }}
              ></Image>
            </Link>
          </div>
          <div className="flex transform items-center justify-center rounded bg-white p-4 shadow-md transition-transform md:hover:scale-105">
            <Link href="/programm">
              <Image
                alt="Musikschule Schwieberdingen"
                src="/logos/Musikschule.jpg"
                width={300}
                height={199}
                style={{ objectFit: "contain" }}
              ></Image>
            </Link>
          </div>
          <div className="flex transform items-center justify-center rounded bg-white p-4 shadow-md transition-transform md:hover:scale-105">
            <Link href="/programm">
              <Image
                alt="Musikverein Kleinglattbach"
                src="/logos/MV-Kleinglattbach.jpg"
                width={640}
                height={214}
                style={{ objectFit: "contain" }}
              ></Image>
            </Link>
          </div>
          <div className="flex transform items-center justify-center rounded bg-white p-4 shadow-md transition-transform md:hover:scale-105">
            <Link href="/programm">
              <Image
                alt="Musikverein Münchingen"
                src="/logos/MV-Münchingen.webp"
                width={350}
                height={190}
                style={{ objectFit: "contain" }}
              ></Image>
            </Link>
          </div>
          <div className="flex transform items-center justify-center rounded bg-white p-4 shadow-md transition-transform md:hover:scale-105">
            <Link href="/programm">
              <Image
                alt="Musikverein Unterriexingen"
                src="/logos/MV-Unterriexingen.png"
                width={143}
                height={55}
                style={{ objectFit: "contain" }}
              ></Image>
            </Link>
          </div>
          <div className="flex transform items-center justify-center rounded bg-white p-4 shadow-md transition-transform md:hover:scale-105">
            <Link href="/programm">
              <Image
                alt="Musikverein Ditzingen"
                src="/logos/MV-Ditzingen.gif"
                width={591}
                height={591}
                style={{ objectFit: "contain" }}
              ></Image>
            </Link>
          </div>
          <div className="flex transform items-center justify-center rounded bg-white p-4 shadow-md transition-transform md:hover:scale-105">
            <Link href="/programm">
              <Image
                alt="Musikverein Schwieberdingen"
                src="/logos/MV-Schwieberdingen.png"
                width={500}
                height={141}
                style={{ objectFit: "contain" }}
              ></Image>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-4 max-w-4xl text-center">
          <Link
            href="/programm"
            className="inline-block w-full rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
          >
            Das komplette Programm
          </Link>
        </div>
      </section>
    </main>
  );
}
