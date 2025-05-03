import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "FAQ & Anfahrt | Kreismusikfest 2025",
  description:
    "Häufige Fragen und Antworten & Informationen zur Anfahrt für das Kreismusikfest Ludwigsburg 2025",
  alternates: { canonical: "https://www.kreismusikfest.com/faq" },
  openGraph: {
    title: "FAQ & Anfahrt | Kreismusikfest 2025",
    description:
      "Häufige Fragen und Antworten & Informationen zur Anfahrt für das Kreismusikfest Ludwigsburg 2025",
    url: "https://www.kreismusikfest.com/faq",
    images: [
      {
        url: "https://www.kreismusikfest.com/festumzug.jpeg",
        width: 1080,
        height: 810,
      },
    ],
  },
};

export default function Programm() {
  const faqs = [
    {
      question: "Kostet das Kreismusikfest Eintritt?",
      answer: (
        <>
          <p className="mb-2">
            Für das Konzert von{" "}
            <b>Fättes Blech & Druckluft am Freitag, 09.05.2025</b> kostet ein{" "}
            <b>Ticket 29€</b> (zzgl. VVK Gebühren). Die Tickets können auf{" "}
            <Link
              className="underline"
              href="https://mv-schwieberdingen.de/tickets"
              target="_blank"
            >
              https://mv-schwieberdingen.de/tickets
            </Link>{" "}
            erworben werden.
          </p>
          <p>
            Am <b>Samstag, Sonntag und Montag</b> (10.05. bis 12.05.2025) ist
            der <b>Eintritt frei</b>.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-4xl p-4">
      <Head>
        <link
          rel="canonical"
          href="https://www.kreismusikfest.com/faq"
          key="canonical"
        />
      </Head>
      <h1 className="mb-4 mt-4 text-xl font-bold">FAQs</h1>
      <p className="mb-4">
        Um Euch den{" "}
        <b>bestmöglichen Aufenthalt und eine reibungslosen Besuch</b> an unserem
        Fest zu gewährleisten, haben wir eine Liste der{" "}
        <b>häufigsten Fragen und Antworten</b> zusammengestellt. Sollten Ihr
        dennoch weitere Fragen haben, stehen wir Euch selbstverständlich gerne
        zur Verfügung.
      </p>
      <Accordion type="single" collapsible className="rounded-md bg-gray-100">
        {faqs.map((faq, faqIndex) => (
          <AccordionItem
            key={`${faqIndex}`}
            value={`${faqIndex}`}
            className="bg-gray-50 first:rounded-t-md last:rounded-b-md"
          >
            <AccordionTrigger className="px-4 hover:bg-gray-100">
              <div className="flex items-center gap-4">
                <span className="font-freeman">{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h1 className="mb-4 mt-4 text-xl font-bold">Anfahrt</h1>

      <p>
        Der Festplatz Schwieberdingen befindet sich direkt am Bahnhof
        Schwieberdingen. Bitte beachtet, dass auf dem Festplatz selbst keine
        Parkmöglichkeiten bestehen. Eine Übersicht aller verfügbaren Parkplätze
        findet ihr unten. Fahrräder können am Bahnhof sicher abgestellt werden.
        Wir empfehlen die Anreise mit öffentlichen Verkehrsmitteln wie Bus und
        Bahn.
      </p>
      <p className="mt-2">
        <b>Wichtiger Hinweis</b>: Am Sonntag kommt es aufgrund des Festumzugs
        zwischen 13:00 und 16:00 Uhr zu Änderungen im Linienverlauf und
        Straßensperrungen in Schwieberdingen. Eine detaillierte Übersicht dazu
        findet ihr auf der{" "}
        <Link
          href="https://www.schwieberdingen.de/23805415.html"
          target="_blank"
          className="underline"
        >
          Webseite der Gemeinde Schwieberdingen
        </Link>
        .
      </p>
      <p className="mt-2">
        Adresse:
        <br />
        <b>
          Festplatz Schwieberdingen
          <br />
          Bahnhofstr. 72
          <br />
          71701 Schwieberdingen
          <br />
        </b>
      </p>

      <Accordion
        type="single"
        collapsible
        className="mt-4 rounded-md bg-gray-100"
      >
        <AccordionItem
          key="parken"
          value="parken"
          className="bg-gray-50 first:rounded-t-md last:rounded-b-md"
        >
          <AccordionTrigger className="px-4 hover:bg-gray-100">
            <div className="flex items-center gap-4">
              <span className="font-freeman">Parkplatzübersicht</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            <ul className="my-2">
              <li>
                <b>P1</b>: Wiese (Fußweg 2min)
              </li>
              <li>
                <b>P2</b>: Parkplatz Turn- und Festhalle (Fußweg 8min)
              </li>
              <li>
                <b>P3</b>: Parkplatz Bürgerhaus (Fußweg 11min)
              </li>
              <li>
                <b>P4</b>: Parkplatz Rathaus (Fußweg 11min) -{" "}
                <i>3 Stunden mit Parkscheibe Mo-Fr 8-18 Uhr & Sa 8-12 Uhr</i>
              </li>
              <li>
                <b>P5</b> (nur Sonntag): Mitarbeiter Parkplatz Rathaus (Fußweg
                12min)
              </li>
            </ul>
            <iframe
              width="100%"
              height="1200px"
              frameBorder="0"
              allowFullScreen
              allow="geolocation"
              src="//umap.openstreetmap.de/de/map/parken-kreismusikfest-2025_91883?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"
            ></iframe>
            <p>
              <Link
                target="_blank"
                href="//umap.openstreetmap.de/de/map/parken-kreismusikfest-2025_91883?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"
                className="mt-2 block w-full rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
              >
                Vollbildanzeige
              </Link>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="rounded-md bg-gray-100">
        <AccordionItem
          key="öpnv"
          value="öpnv"
          className="mt-2 bg-gray-50 first:rounded-t-md last:rounded-b-md"
        >
          <AccordionTrigger className="px-4 hover:bg-gray-100">
            <div className="flex items-center gap-4">
              <span className="font-freeman">ÖPNV Haltestellen</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            <p>
              <b>Wichtiger Hinweis</b>: Am Sonntag kommt es aufgrund des
              Festumzugs zwischen 13:00 und 16:00 Uhr zu Änderungen im
              Linienverlauf und Straßensperrungen in Schwieberdingen. Eine
              detaillierte Übersicht dazu findet ihr auf der{" "}
              <Link
                href="https://www.schwieberdingen.de/23805415.html"
                target="_blank"
                className="underline"
              >
                Webseite der Gemeinde Schwieberdingen
              </Link>
              .
            </p>
            <p className="mt-2">
              Am Sonntag können Besucher außerdem den Besuch auf dem
              Kreismusikfest mit einer Fahrt in der historischen Dampflokomotive{" "}
              <b>Feuriger Elias</b> kombinieren. Alle Informationen dazu findet
              ihr auf der{" "}
              <Link
                href="https://www.ges-ev.de/museumsverkehr/kw/kw.htm"
                target="_blank"
                className="underline"
              >
                Webseite der GES Stuttgart
              </Link>
              .
            </p>
            <iframe
              className="mt-2"
              width="100%"
              height="1200px"
              frameBorder="0"
              allowFullScreen
              allow="geolocation"
              src="//umap.openstreetmap.de/de/map/opnv-kreismusikfest-2025_91888?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"
            ></iframe>
            <p>
              <Link
                target="_blank"
                href="//umap.openstreetmap.de/de/map/opnv-kreismusikfest-2025_91888?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"
                className="mt-2 block w-full rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
              >
                Vollbildanzeige
              </Link>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
