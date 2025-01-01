import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Programm | Kreismusikfest 2025",
  description:
    "4 Tage abwechslungsreiches Programm beim Kreismusikfest vom 09. bis 12. Mai 2025",
  alternates: { canonical: "https://kreismusikfest.com/programm" },
  openGraph: {
    title: "Programm | Kreismusikfest 2025",
    description:
      "4 Tage abwechslungsreiches beim Kreismusikfest vom 09. bis 12. Mai 2025",
    url: "https://kreismusikfest.com/programm",
    images: [
      {
        url: "https://kreismusikfest.com/programm.png",
        width: 1920,
        height: 1358,
      },
    ],
  },
};

export default function Programm() {
  const schedule = [
    {
      date: "Freitag, 09.05.2025",
      ticketInfo: "Tickets 29€",
      events: [
        {
          time: "19:00",
          title: "Einlass",
          description: "Die Türen öffnen sich für einen fantastischen Abend!",
        },
        {
          time: "20:00",
          title: "Fättes Blech x DRUCKLUFT",
          description: (
            <>
              <h3 className="mb-2 text-lg font-bold">
                Druckluft: Brass-Power in Vollendung
              </h3>
              <figure>
                <Image
                  src="/Druckluft.jpg"
                  alt="Druckluft"
                  width={1024}
                  height={768}
                />
                <figcaption>© Druckluft (Jan Hendrik Borggreven)</figcaption>
              </figure>
              <p className="mb-4 mt-2">
                Den Auftakt macht <b>Druckluft</b>. Die Band hat sich mit
                energiegeladenen Brass-Sounds und außergewöhnlichen
                Interpretationen einen Namen gemacht. Ob Pop, Rock oder
                elektronische Einflüsse – <b>Druckluft</b> schafft es, Genres zu
                verschmelzen und jedes Publikum mitzureißen. Mit druckvollen
                Rhythmen und einer Prise Humor verspricht diese Show pure
                Unterhaltung
              </p>
              <h3 className="mb-2 text-lg font-bold">
                Fättes Blech: Fulminante Brass-Revolution
              </h3>
              <figure>
                <Image
                  src="/Fättes-Blech.jpg"
                  alt="Fättes Blech"
                  width={683}
                  height={1024}
                />
                <figcaption>© Fättes Blech (Tobias Epp)</figcaption>
              </figure>
              <p className="mb-2 mt-2">
                Nach dem mitreißenden Opening geht es weiter mit{" "}
                <b>Fättes Blech</b>, eine Brassband, die mit unverwechselbarem
                Sound und einzigartigem Groove begeistert. Die Band kombiniert
                traditionelle Blasmusik mit modernen Beats und einer Prise
                Hip-Hop. <b>Fättes Blech</b> steht für Energie pur und
                entfesselt auf der Bühne eine Atmosphäre, die niemanden
                stillstehen lässt. Freut Euch auf ein musikalisches Feuerwerk
                aus bekannten Hits, funkigen Eigenkompositionen und einer Show,
                die Gänsehaut garantiert.
              </p>
            </>
          ),
        },
      ],
      description: (
        <>
          <h2 className="text-lg font-bold">
            Blech X-Plosion 2025: Das Brass-Event des Jahres
          </h2>
          <p className="mb-2 mt-2">
            Erlebt mit <b>Fättes Blech & Druckluft</b> zwei der angesagtesten
            Brassbands Deutschlands auf der Bühne im großen Festzelt! Seid
            dabei, wenn sich fetzige Blasmusik mit{" "}
            <b>modernem Sound und mitreißender Bühnenshow</b> vereint.{" "}
            <Link href="https://mv-schwieberdingen.de/tickets">
              Tickets sind im Vorverkauf für 29 Euro
            </Link>{" "}
            (+ VVK-Gebühren) erhältlich – sichert Euch jetzt Euren Platz für
            diesen besonderen Abend.
          </p>
        </>
      ),
      additionalInfo: (
        <>
          <Link
            href="https://www.mv-schwieberdingen.de/tickets"
            target="_blank"
            className="mb-6 mt-2 block w-full rounded bg-orange-500 px-6 py-2 text-center font-freeman text-lg text-white hover:bg-orange-600"
          >
            Tickets
          </Link>
        </>
      ),
    },
    {
      date: "Samstag, 10.05.2025",
      ticketInfo: "Eintritt frei!",
      events: [
        {
          time: "15:00",
          title: "Familiennachmittag",
          description: (
            <>
              <p>
                Das genaue Programm für den Familiennachmittag wird rechtzeitig
                vor dem Fest hier bekannt gegeben.
              </p>
            </>
          ),
        },
        {
          time: "18:00",
          title: "Musikverein Ahausen",
          description: (
            <>
              <figure>
                <Image
                  src="/Ahausen.jpg"
                  alt="Musikverein Ahausen"
                  width={1920}
                  height={1080}
                />
                <figcaption>© Musikverein Ahausen</figcaption>
              </figure>
              <p className="mt-2">
                Der <b>Musikverein Ahausen</b> wurde bereits 1872 gegründet. Für
                das Kreismusikfest reisen sie <b>extra vom Bodensee</b> nach
                Schwieberdingen an, um das Publikum mit ihrer Musik zu
                begeistern. Mit ihrer Leidenschaft für Blasmusik und einem
                breiten Repertoire werden sie euch gut auf die anschließende
                Party mit Knutschfleck einstimmen. Weitere Informationen gibt es
                auf der Webseite{" "}
                <Link
                  href="https://mv-ahausen.de/"
                  target="_blank"
                  className="underline"
                >
                  https://mv-ahausen.de/
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          time: "21:00",
          title: "Party mit Knutschfleck",
          description: (
            <>
              <figure>
                <Image
                  src="/knutschfleck_3.jpg"
                  alt="Knutschfleck"
                  width={920}
                  height={613}
                />
                <figcaption>© Musikverein Schwieberdingen</figcaption>
              </figure>
              <p className="my-4">
                Seit vielen Jahren ist die Band Knutschfleck ein fester
                Bestandteil des Musikfests in Schwieberdingen und begeistert das
                Publikum jedes Mal aufs Neue. Mit ihrer einzigartigen Mischung
                aus <b>Neuer Deutscher Welle (NDW) Hits</b> sorgen sie immer für
                <b>großartige Partystimmung im Festzelt</b>. Ihre
                energiegeladenen Auftritte und mitreißenden Showeinlagen
                garantieren beste Unterhaltung für Jung und Alt. Freut euch auf
                einen
                <b>unvergesslichen Abend mit Knutschfleck</b>!
              </p>
              <figure>
                <Image
                  src="/knutschfleck_5.jpg"
                  alt="Musikverein Ahausen"
                  width={1920}
                  height={1080}
                />
                <figcaption>© Musikverein Schwieberdingen</figcaption>
              </figure>
            </>
          ),
        },
      ],
      additionalInfo: (
        <>
          <div className="mt-2 text-sm text-gray-600">
            Informationen zum Wertungsspiel gibt es{" "}
            <Link
              className="underline hover:text-orange-500"
              href="/wertungsspiel"
            >
              hier
            </Link>
            .
          </div>
        </>
      ),
    },
    {
      date: "Sonntag, 11.05.2025",
      ticketInfo: "Eintritt frei!",
      events: [
        {
          time: "11:00",
          title: "Muttertagskonzert der Jugendorchester",
          description: "",
        },
        {
          time: "14:00",
          title: "Festumzug durch Schwieberdingen",
          description: "",
        },
        { time: "15:15", title: "Musikverein Kleinglattbach", description: "" },
        { time: "17:30", title: "Musikverein Münchingen", description: "" },
        { time: "19:45", title: "Musikverein Unterriexingen", description: "" },
      ],
      additionalInfo: (
        <>
          <div className="mt-2 text-sm text-gray-600">
            Am Sonntag historisch anreisen mit der{" "}
            <Link
              className="underline hover:text-orange-500"
              href="https://www.ges-ev.de/museumsverkehr/kw/kw.htm"
              target="_blank"
            >
              Dampflokomotive Feuriger Elias
            </Link>
            .
          </div>
        </>
      ),
    },
    {
      date: "Montag, 12.05.2025",
      ticketInfo: "Eintritt frei!",
      events: [
        {
          time: "11:30",
          title: "Mittagstisch mit den Oldies",
          description: "",
        },
        {
          time: "13:30",
          title: "Pause",
          description: (
            <>
              <span>
                Wir schnaufen noch einmal durch und machen von{" "}
                <b>13:30 bis 16:30 Pause</b>, um dann frisch gestärkt zum Finale
                anzusetzen!
              </span>
            </>
          ),
        },
        {
          time: "16:30",
          title: "Jugendorchester",
          description: "",
        },
        { time: "18:00", title: "Musikverein Ditzingen", description: "" },
        { time: "20:30", title: "Showprogramm MVS", description: "" },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-2 mt-4 text-xl font-bold">
        4 Tage abwechslungsreiches Programm!
      </h1>
      <p className="mb-8">
        Vom <b>09. bis 12. Mai 2025</b> erwartet Euch ein unvergessliches
        Wochenende voller Highlights. Freut Euch auf{" "}
        <b>Live-Musik mit tollen Bands und Orchestern</b>. Ob mit Freunden, der
        Familie oder allein – unser <b>abwechslungsreiches Programm</b> bietet
        für jeden etwas. Kommt vorbei und lasst Euch von der mitreißenden
        Atmosphäre verzaubern!
      </p>
      {schedule.map((day, index) => (
        <div key={day.date} className="mb-8">
          <div className="mb-2 flex items-center gap-4">
            <div className="rounded bg-orange-500 px-3 py-1 font-freeman text-xl text-white md:-ml-[16px]">
              {day.date}
            </div>
            <div className="font-freeman text-orange-500">{day.ticketInfo}</div>
          </div>

          {day.description}

          <Accordion
            type="single"
            collapsible
            className="rounded-md bg-gray-100"
          >
            {day.events.map((event, eventIndex) => (
              <AccordionItem
                key={`${event.time}-${event.title}`}
                value={`${index}-${eventIndex}`}
                className="bg-gray-50 first:rounded-t-md last:rounded-b-md"
              >
                <AccordionTrigger className="px-4 hover:bg-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="font-medium">{event.time}</span>
                    <span className="font-freeman">{event.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2">
                  {event.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {day.additionalInfo}
        </div>
      ))}
      <p className="mb-6">
        Der <b>Blasmusik Kreisverband Ludwigsburg e.V.</b> und der{" "}
        <b>Musikverein Schwieberdingen e.V.</b> freuen sich auf euren Besuch.
      </p>
    </div>
  );
}
