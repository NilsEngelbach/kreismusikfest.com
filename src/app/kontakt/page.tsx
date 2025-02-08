import Head from "next/head";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Kontakt | Kreismusikfest 2025",
  description:
    "Ansprechpartner für alle Fragen rund um das Kreismusikfest Ludwigsburg 2025",
  alternates: { canonical: "https://www.kreismusikfest.com/kontakt" },
  openGraph: {
    title: "Kontakt | Kreismusikfest 2025",
    description:
      "Ansprechpartner für alle Fragen rund um das Kreismusikfest Ludwigsburg 2025",
    url: "https://www.kreismusikfest.com/kontakt",
    images: [
      {
        url: "https://www.kreismusikfest.com/programm.png",
        width: 1920,
        height: 1358,
      },
    ],
  },
};

export default function Programm() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <Head>
        <link
          rel="canonical"
          href="https://www.kreismusikfest.com/kontakt"
          key="canonical"
        />
      </Head>
      <h1 className="mb-4 mt-4 text-xl font-bold">Kontakt</h1>

      <p className="mb-6">
        Wir freuen uns auf Eure Anfragen und stehen Euch für alle Fragen rund um
        das Kreismusikfest gerne zur Verfügung.
      </p>

      <h3 className="mb-2 text-lg font-bold">Helfen</h3>
      <div className="mx-auto mb-2 grid max-w-4xl grid-cols-2 justify-center gap-4 md:grid-cols-4">
        <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
          <Image
            className="rounded"
            alt="Helfen"
            src="/helfen-1.webp"
            width={920}
            height={613}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
          <Image
            className="rounded"
            alt="Helfen"
            src="/helfen-8.webp"
            width={920}
            height={613}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
          <Image
            className="rounded"
            alt="Helfen"
            src="/helfen-2.webp"
            width={920}
            height={613}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
          <Image
            className="rounded"
            alt="Helfen"
            src="/helfen-9.webp"
            width={920}
            height={613}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </div>
      <div className="mb-6">
        Ihr möchtet als Helfer mit anpacken oder einen Kuchen spenden:
        <ul className="mt-1">
          <li className="mb-2">
            <span>
              <b>Christl Rapp</b>
              <br />
              <span className="text-gray-500">
                Stellv. Vorsitzende Wirtschaftsausschuss
              </span>
              <br />
              <span className="text-gray-500">
                Musikverein Schwieberdingen e.V.
              </span>
              <br />
              vorstand@mv-schwieberdingen.de
            </span>
          </li>
          <li className="mb-2">
            <span>
              <b>Timo Heim</b>
              <br />
              <span className="text-gray-500">Jugendleiter</span>
              <br />
              <span className="text-gray-500">
                Musikverein Schwieberdingen e.V.
              </span>
              <br />
              jugendleitung@mv-schwieberdingen.de
            </span>
          </li>
        </ul>
      </div>

      <h3 className="mb-2 text-lg font-bold">Sponsoring</h3>
      <div className="mb-6">
        Ihr möchtet uns als Sponsor unterstützen:
        <ul className="mt-1">
          <li className="mb-2">
            <span>
              <b>Elke Schwan-Köhr</b>
              <br />
              <span className="text-gray-500">Stellv. Schriftführerin</span>
              <br />
              <span className="text-gray-500">
                Musikverein Schwieberdingen e.V.
              </span>
              <br />
              schriftfuehrer@mv-schwieberdingen.de
            </span>
          </li>
        </ul>
      </div>

      <h3 className="mb-2 text-lg font-bold">Wertungsspiel</h3>
      <div className="mb-6">
        Bei Fragen rund um das Wertungsspiel wendet Euch bitte an:
        <ul className="mt-1">
          <li className="mb-2">
            <span>
              <b>Erwin Gutmann</b>
              <br />
              <span className="text-gray-500">
                Leiter Geschäftsbereich Musik
              </span>
              <br />
              <span className="text-gray-500">
                Blasmusik Kreisverband Ludwigsburg e.V.
              </span>
              <br />
              erwin.gutmann@kvlb.de
            </span>
          </li>
          <li>
            <span>
              <b>Birgit Schoppel</b>
              <br />
              <span className="text-gray-500">
                Leiterin Geschäftsbereich Musikorganisation
              </span>
              <br />
              <span className="text-gray-500">
                Blasmusik Kreisverband Ludwigsburg e.V.
              </span>
              <br />
              birgit.schoppel@kvlb.de
            </span>
          </li>
        </ul>
      </div>

      <h3 className="mb-2 text-lg font-bold">Sonstiges</h3>
      <div className="mb-4">
        Für alle Fragen & Anliegen:
        <ul className="mt-1">
          <li className="mb-2">
            <span>
              <b>Manuel Krahl</b>
              <br />
              <span className="text-gray-500">Schriftführer</span>
              <br />
              <span className="text-gray-500">
                Musikverein Schwieberdingen e.V.
              </span>
              <br />
              vorstand@mv-schwieberdingen.de
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
