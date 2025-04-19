import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Wertungsspiel | Kreismusikfest 2025",
  description: "Wertungsspiel beim Kreismusikfest Ludwigsburg am 10. Mai 2025",
  alternates: { canonical: "https://www.kreismusikfest.com/wertungsspiel" },
  openGraph: {
    title: "Wertungsspiel | Kreismusikfest 2025",
    description:
      "Wertungsspiel beim Kreismusikfest Ludwigsburg am 10. Mai 2025",
    url: "https://www.kreismusikfest.com/wertungsspiel",
    images: [
      {
        url: "https://www.kreismusikfest.com/orchestra.jpg",
        width: 1000,
        height: 667,
      },
    ],
  },
};

export default function Wertungsspiel() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <Head>
        <link
          rel="canonical"
          href="https://www.kreismusikfest.com/wertungsspiel"
          key="canonical"
        />
      </Head>
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

      <p className="pb-4">
        Die <b>Bekanntgabe der Ergebnisse</b> findet am{" "}
        <b>Sonntag, 11. Mai 2025</b>, im Anschluss an den großen Festzug beim
        Kreismusikfest im <b>Festzelt in Schwieberdingen</b> statt. Das
        Orchester, welches am Wettbewerb bei uns die höchste Punktezahl
        erreicht, kann an der BRAWISSIMO im Rahmen der Brawo-Messe teilnehmen.
      </p>

      <h3 className="mb-3 text-lg font-bold">Helfen</h3>
      <p className="mb-6">
        Damit das Wertungsspiel reibungslos durchgeführt werden kann, sind wir{" "}
        <b>auf Unterstützung</b> angewiesen! Wenn du uns bei einer der
        zahlreichen Aufgaben Rund um des Wertungsspiels (Bühnendienst,
        Orchester-/ Gruppenbegleiter, Betreuer, Aufsicht, ...){" "}
        <b>unter die Arme greifen</b> möchtest melde dich gerne!
      </p>
      <h3 className="mb-3 text-lg font-bold">Zuhören</h3>
      <div className="mb-8">
        <Accordion type="single" collapsible className="rounded-md bg-gray-100">
          <AccordionItem
            key="1"
            value="1"
            className="bg-gray-50 first:rounded-t-md last:rounded-b-md"
          >
            <AccordionTrigger className="px-4 hover:bg-gray-100">
              <div className="flex items-center gap-4">
                <span className="font-medium">9:00</span>
                <span className="font-freeman">
                  Vororchester des Musikverein Stadtkapelle Ditzingen /
                  Jugendmusikschule Ditzingen
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              Leitung: <b>Alexander Heinz</b> – Kategorie 2 <br />
              • A Day at Disneyland (arr. Michael Story) <br />
              • Rhythm of the World (Markus Götz) <br />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            key="2"
            value="2"
            className="bg-gray-50 first:rounded-t-md last:rounded-b-md"
          >
            <AccordionTrigger className="px-4 hover:bg-gray-100">
              <div className="flex items-center gap-4">
                <span className="font-medium">9:30</span>
                <span className="font-freeman">
                  Jugendblasorchester des Musikverein Stadtkapelle Ditzingen /
                  Jugendmusikschule Ditzingen
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              Leitung: <b>Alexander Heinz</b> – Kategorie 3 <br />
              • Music From Pirates of the caribbean (Klaus Badelt, arr. Michael
              Brown) <br />
              • Tarzan Soundtrack Highlights (Phil Collins, arr. Paul Murtha){" "}
              <br />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            key="3"
            value="3"
            className="bg-gray-50 first:rounded-t-md last:rounded-b-md"
          >
            <AccordionTrigger className="px-4 hover:bg-gray-100">
              <div className="flex items-center gap-4">
                <span className="font-medium">10:30</span>
                <span className="font-freeman">
                  Musikverein Sersheim 1921 e.V.
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              Leitung: <b>Peter Kopp</b> – Kategorie 3 <br />
              • Selbstwahlstück: Lignum (Thiemo Kraas) <br />
              • Pflichtstück: A Huntingdon Celebration (Philip Sparke)
              <br />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            key="4"
            value="4"
            className="bg-gray-50 first:rounded-t-md last:rounded-b-md"
          >
            <AccordionTrigger className="px-4 hover:bg-gray-100">
              <div className="flex items-center gap-4">
                <span className="font-medium">11:15</span>
                <span className="font-freeman">Orchesterverein Horrheim</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              Leitung: <b>Andrea Schneider</b> – Kategorie 3 <br />
              • Selbstwahlstück: Wings to fly (Thomas Doss) <br />
              • Pflichtstück: Tangents Angulár (Roland Barret) <br />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            key="5"
            value="5"
            className="bg-gray-50 first:rounded-t-md last:rounded-b-md"
          >
            <AccordionTrigger className="px-4 hover:bg-gray-100">
              <div className="flex items-center gap-4">
                <span className="font-medium">12:00</span>
                <span className="font-freeman">
                  Musikverein Stadtkapelle Bönnigheim
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              Leitung: <b>Rainer Falk</b> - Kategorie 4 <br />
              • Selbstwahlstück: Cry of the last Unicorn (Rossano Gallente){" "}
              <br />
              • Pflichtstück: Towards a New Horizon (Steven Reinecke) <br />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
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
    </div>
  );
}
