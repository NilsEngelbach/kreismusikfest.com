import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Wertungsspiel | Kreismusikfest 2025",
  description: "Wertungsspiel beim Kreismusikfest Ludwigsburg am 10. Mai 2025",
  alternates: { canonical: "https://kreismusikfest.com/wertungsspiel" },
  openGraph: {
    title: "Wertungsspiel | Kreismusikfest 2025",
    description:
      "Wertungsspiel beim Kreismusikfest Ludwigsburg am 10. Mai 2025",
    url: "https://kreismusikfest.com/wertungsspiel",
    images: [
      {
        url: "https://kreismusikfest.com/orchestra.jpg",
        width: 1000,
        height: 667,
      },
    ],
  },
};

export default function Wertungsspiel() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-4 mt-4 text-xl font-bold">Wertungsspiel</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <p className="mb-4">
            Der <b>Blasmusik-Kreisverband Ludwigsburg</b> lädt herzlich zum{" "}
            <b>Wertungsspiel am Samstag 10. Mai 2025</b> ein. Ziel des
            Wertungsspiels ist es, den <b>musikalischen Austausch</b> zu
            fördern, die <b>musikalische Qualität zu steigern</b> und den
            teilnehmenden Ensembles wertvolle Rückmeldungen von erfahrenen
            Fachjuroren zu geben. Das Wertungsspiel ist eine ausgezeichnete
            Gelegenheit für alle Blasorchester, Jugendblasorchester, Solisten,
            Ensembles und Bläserklassen, ihre Fähigkeiten unter Beweis zu
            stellen, <b>neue Impulse zu erhalten</b> und sich mit anderen{" "}
            <b>Blasmusikkapellen der Region zu messen</b>.
          </p>
          <p className="mb-4">
            Das Wertungsspiel findet im <b>Widdumhof</b> in{" "}
            <b>Korntal-Münchingen</b> statt.
          </p>
        </div>
        <div className="flex-1">
          <figure className="mb-4 px-4 md:mb-0">
            <Image
              alt="Wertungsspiel"
              src="/orchestra.jpg"
              height={1000}
              width={667}
            ></Image>
          </figure>
        </div>
      </div>
      <p className="mb-4">
        <b>Anmeldungen</b> sind bis zum <b>20. Januar 2025</b> möglich.
      </p>
      <Link
        href="/Ausschreibung_Wertungsspiel2025.pdf"
        target="_blank"
        className="mb-4 inline-block w-full rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
      >
        Ausschreibung Wertungsspiel 2025 (PDF)
      </Link>
      <p className="pb-4">
        Die <b>Bekanntgabe der Ergebnisse</b> findet am{" "}
        <b>Sonntag, 11. Mai 2025</b>, im Anschluss an den großen Festzug beim
        Kreismusikfest im <b>Festzelt in Schwieberdingen</b> statt.
      </p>
      <h3 className="mb-4 text-lg font-bold">Anmeldung</h3>
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <Link
          href="/Anmeldung_Erwachsenenorchester.pdf"
          target="_blank"
          className="flex-1 rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
        >
          Erwachsenenorchester (PDF)
        </Link>
        <Link
          href="/Anmeldung_Jugendorchester.pdf"
          target="_blank"
          className="flex-1 rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
        >
          Jugendorchester (PDF)
        </Link>
        <Link
          href="/Anmeldung_Kammermusik.pdf"
          target="_blank"
          className="flex-1 rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
        >
          Kammermusik (PDF)
        </Link>
      </div>

      <h3 className="mb-3 text-lg font-bold">Helfen</h3>
      <p className="mb-6">
        Damit das Wertungsspiel reibungslos durchgeführt werden kann, sind wir{" "}
        <b>auf Unterstützung</b> angewiesen! Wenn du uns bei einer der
        zahlreichen Aufgaben Rund um des Wertungsspiels (Bühnendienst,
        Orchester-/ Gruppenbegleiter, Betreuer, Aufsicht, ...){" "}
        <b>unter die Arme greifen</b> möchtest melde dich gerne!
      </p>
      <h3 className="mb-3 text-lg font-bold">Zuhören</h3>
      <p className="mb-6">
        Sobald der genaue Ablauf & Zeitplan feststeht stellen wir ihn hier für
        Euch bereit.
      </p>
      <h3 className="mb-3 text-lg font-bold">Kontakt</h3>
      <div className="mb-4">
        Bei Fragen wendet Euch bitte an:
        <ul className="mt-1">
          <li className="mb-2">
            <span>
              <b>Erwin Gutmann</b>
              <br />
              <span className="text-gray-500">
                Leiter Geschäftsbereich Musik
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
              birgit.schoppel@kvlb.de
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
