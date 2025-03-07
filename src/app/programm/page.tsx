import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export const metadata = {
  title: "Programm | Kreismusikfest 2025",
  description:
    "4 Tage abwechslungsreiches Programm beim Kreismusikfest vom 09. bis 12. Mai 2025",
  alternates: { canonical: "https://www.kreismusikfest.com/programm" },
  openGraph: {
    title: "Programm | Kreismusikfest 2025",
    description:
      "4 Tage abwechslungsreiches beim Kreismusikfest vom 09. bis 12. Mai 2025",
    url: "https://www.kreismusikfest.com/programm",
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
            Blech X-Plosion: Das Brass-Event des Jahres
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
          time: "14:00",
          title: 'Mitmachkonzert: "Jazz für Kinder"',
          description: (
            <>
              <figure>
                <Image
                  src="/logos/jazz_für_kinder.png"
                  alt="Jazz für Kinder"
                  width={639}
                  height={108}
                />
                <figcaption>© Jazz für Kinder</figcaption>
              </figure>
              <p className="mt-2">
                Während die Kinder ganz vorne sitzen, erleben sie eine Jazzband,
                die verschiedene Jazzstile und Kinderliedklassiker
                interpretiert. Ob tanzende Enten oder groovende Chinesen – die
                fantasievollen Darbietungen lassen nicht nur die Kinder, sondern
                auch ihre erwachsenen Begleiter in Stimmung kommen. „Jazz für
                Kinder“{" "}
                <b>
                  verbindet Spaß, Musik und Bewegung zu einem Erlebnis für alle
                  Sinne
                </b>
                . Mit ihrem kreativen und spielerischen Umgang mit Tönen und
                Rhythmen macht das Jazzquartett der HMDK vor allem
                <b>Lust auf eigene musikalische Entdeckungen</b> – auch weit
                über das Konzert hinaus. Das <b>Mitmachkonzert</b>, das sich an
                Kinder ab 3 Jahren, Eltern, Großeltern und Freunde richtet,
                beginnt um <b>14:00 Uhr und dauert eine vergnügte Stunde.</b>
              </p>
              <p className="mt-2">
                <b>Der Eintritt ist frei!</b>
              </p>
            </>
          ),
        },
        {
          time: "15:00",
          title: "Familiennachmittag",
          description: (
            <>
              <div className="mx-auto grid max-w-4xl grid-cols-2 justify-center gap-4 md:grid-cols-4">
                <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
                  <Image
                    className="rounded h-full"
                    alt="Familiennachmittag"
                    src="/familiennachmittag-2.jpg"
                    width={700}
                    height={467}
                    style={{ objectFit: "cover" }}
                  ></Image>
                </div>
                <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
                  <Image
                    className="rounded h-full"
                    alt="Familiennachmittag"
                    src="/Hüpfburg.jpg"
                    width={800}
                    height={600}
                    style={{ objectFit: "cover" }}
                  ></Image>
                </div>
                <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
                  <Image
                    className="rounded h-full"
                    alt="Familiennachmittag"
                    src="/familiennachmittag-3.jpg"
                    width={1200}
                    height={800}
                    style={{ objectFit: "cover" }}
                  ></Image>
                </div>
                <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
                  <Image
                    className="rounded h-full"
                    alt="Familiennachmittag"
                    src="/familiennachmittag-4.jpg"
                    width={1200}
                    height={800}
                    style={{ objectFit: "cover" }}
                  ></Image>
                </div>
              </div>
              <p className="mt-2">
                Auf der <b>Hüpfburg</b> und in der{" "}
                <b>
                  Spielstraße der{" "}
                  <a href="https://www.feuerwehr-schwieberdingen.de/">
                    Jugendfeuerwehr Schwieberdingen
                  </a>
                </b>{" "}
                können sich die Kinder austoben. Auf der Bühne gibt es ein{" "}
                <b>buntes Programm der Musikschule</b>. Neben dem{" "}
                <b>Vororchester</b>, den <b>Bläser- und Streicherklassen</b> und
                dem <b>Jugend-Kammer-Orchester</b> dürfen auch die{" "}
                <b>Jungmusiker aus den Kitas und der Cupsong AG</b> ihren großen
                Auftritt im Festzelt feiern. Zum Abschluss heizen die{" "}
                <b>Blaulichtband & Jilis</b> dem Publikum im Zelt nochmal
                richtig ein.
              </p>
              <figure className="mt-2">
                <Image
                  className="mx-auto"
                  src="/logos/Musikschule.jpg"
                  alt="Musikschule Schwieberdingen"
                  width={300}
                  height={199}
                />
                <figcaption className="text-center">© Musikschule Schwieberdingen</figcaption>
              </figure>
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
                breiten Repertoire werden sie Euch bestens auf die anschließende
                Party mit Knutschfleck einstimmen. Weitere Informationen gibt es
                auf der Webseite:{" "}
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
                <figcaption>Knutschfleck in Action</figcaption>
              </figure>
              <p className="my-4">
                Seit vielen Jahren ist die Band Knutschfleck ein fester
                Bestandteil des Musikfests in Schwieberdingen und begeistert das
                Publikum jedes Mal aufs Neue. Mit ihrer einzigartigen Mischung
                aus <b>Neuer Deutscher Welle (NDW) Hits</b> sorgen sie immer für
                <b>großartige Partystimmung im Festzelt</b>. Ihre
                energiegeladenen Auftritte und mitreißenden Showeinlagen
                garantieren beste Unterhaltung für Jung und Alt. Freut Euch auf
                einen
                <b>unvergesslichen Abend mit Knutschfleck</b>!
              </p>
              <figure>
                <Image
                  src="/knutschfleck_5.jpg"
                  alt="Knutschfleck"
                  width={1920}
                  height={1080}
                />
                <figcaption>Partystimmung für Jung und Alt</figcaption>
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
          description: (
            <>
              <figure>
                <Image
                  src="/Muttertagskonzert.jpg"
                  alt="Muttertagskonzert"
                  width={1080}
                  height={720}
                />
                <figcaption>Muttertagskonzert der Jugendkapelle</figcaption>
              </figure>
              <p className="mt-4">
                Das <b>Lieder- und Vororchester</b> der Musikschule
                Schwieberdingen sowie die <b>Jugendkapelle</b> des Musikvereins
                Schwieberdingen wollen ihren Müttern auf musikalische Weise
                danken. Freut Euch auf ein stimmungsvolles und herzergreifendes
                Programm, das die <b>Liebe und Wertschätzung für die Mütter</b>{" "}
                in den Mittelpunkt stellt.
              </p>
            </>
          ),
        },
        {
          time: "14:00",
          title: "Festumzug durch Schwieberdingen",
          description: (
            <>
              <figure>
                <Image
                  src="/festumzug.jpeg"
                  alt="Festumzug"
                  width={1080}
                  height={810}
                />
                <figcaption>
                  Zahlreiche Kapellen und Vereine werden beim Festumzug
                  teilnehmen
                </figcaption>
              </figure>
              <p className="my-4">
                Mit einem <b>großen Festumzug</b> durch Schwieberdingen feiern
                wir das <b>100-jährige Jubiläum</b> des Musikverein
                Schwieberdingen. Zahlreiche <b>Kapellen und Vereine</b> werden
                am Festumzug teilnehmen. Ziel des Festumzugs ist das{" "}
                <b>Kreismusikfest im Festzelt auf dem Festplatz</b> am Bahnhof.
              </p>
              <figure>
                <Image
                  src="/festumzug_2.jpg"
                  alt="Festumzug"
                  width={751}
                  height={500}
                />
                <figcaption>
                  Die Oldies beim Festumzug zum 90-jährigen Jubiläum
                </figcaption>
              </figure>
              <Link
                href="/festumzug"
                className="mb-6 mt-2 block w-full rounded bg-orange-500 px-6 py-2 text-center font-freeman text-lg text-white hover:bg-orange-600"
              >
                Informationen zum Festumzug
              </Link>
            </>
          ),
        },
        {
          time: "15:15",
          title: "Musikverein Kleinglattbach",
          description: (
            <>
              <figure>
                <Image
                  src="/Kleinglattbach.jpg"
                  alt="Musikverein Kleinglattbach"
                  width={1920}
                  height={1282}
                />
                <figcaption>© Musikverein Kleinglattbach</figcaption>
              </figure>
              <p className="mt-4">
                Mit rund <b>55 Musikerinnen und Musikern</b> und unter der
                musikalischen Leitung ihres Dirigenten Julian Metzger
                präsentieren Euch ein <b>beeindruckendes Repertoire</b>, das von
                traditioneller Blasmusik über abwechslungsreiche
                Unterhaltungsmusik bis hin zur sinfonischen/konzertanten
                Blasmusik reicht. Das Orchester ist bekannt für seine
                musikalische Vielfalt und seinen mitreißenden Spielstil, der das
                Publikum begeistert. Besucht die Webseite des Musikvereins
                Kleinglattbach für weitere Informationen:{" "}
                <Link
                  className="underline"
                  href="https://www.mvkleinglattbach.de/"
                  target="_blank"
                >
                  https://www.mvkleinglattbach.de/
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          time: "17:30",
          title: "Musikverein Münchingen",
          description: (
            <>
              <figure>
                <Image
                  src="/Muenchingen_2.jpg"
                  alt="Musikverein Münchingen"
                  width={2000}
                  height={700}
                />
                <figcaption>© Musikverein Münchingen</figcaption>
              </figure>
              <p className="mt-4">
                Der <b>Musikverein Münchingen</b> e.V. feierte 2020 sein
                100-jähriges Jubiläum und ist seit seiner Gründung im Jahr 1920
                ein fester Bestandteil des kulturellen Lebens der Region. Die
                engagierten Musiker präsentieren ein abwechslungsreiches
                Programm, das sowohl Tradition als auch Innovation
                widerspiegelt. Mehr Informationen gibt es auf der Webseite:{" "}
                <Link
                  className="underline"
                  href="https://www.musikverein-muenchingen.de/"
                  target="_blank"
                >
                  https://www.musikverein-muenchingen.de/
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          time: "19:45",
          title: "Musikverein Unterriexingen",
          description: (
            <>
              <figure>
                <Image
                  src="/Unterriexingen.jpg"
                  alt="Musikverein Unterriexingen"
                  width={1110}
                  height={500}
                />
                <figcaption>© Musikverein Unterriexingen</figcaption>
              </figure>
              <p className="mt-4">
                Mit einem Ensemble von fast <b>50 Musikern</b> wird das
                Blasorchester unter der Leitung von Dirigent Hermann Röser ein
                abwechslungsreiches Programm präsentieren, das von klassischen
                Marschstücken bis hin zu modernen Arrangements reicht. Auf der
                Webseite gibt es weitere Informationen:{" "}
                <Link
                  className="underline"
                  href="https://mv-unterriexingen.de/"
                  target="_blank"
                >
                  https://mv-unterriexingen.de/
                </Link>
              </p>
            </>
          ),
        },
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
          description: (
            <>
              <figure>
                <Image
                  src="/mittagstisch.jpg"
                  alt="Mittagstisch mit den Oldies"
                  width={920}
                  height={613}
                />
                <figcaption>
                  Die Oldies unterhalten die Gäste beim Mittagstisch
                </figcaption>
              </figure>
              <p className="my-4">
                Beim Mittagstisch kann man <b>sparen und genießen</b> bei bester
                Unterhaltung von den Oldies des Musikverein Schwieberdingen.
                Neben Fleischbrot und Göckele vom Holzkohlengrill gibt es ein
                großes Angebot an Speisen und Getränken. Die <b>Angebote</b>{" "}
                werden noch rechtzeitig vor dem Fest bekanntgegeben.
              </p>
              <figure>
                <Image
                  src="/Mittagstisch_3.jpg"
                  alt="Fleischbrot vom Holzkohlengrill"
                  width={700}
                  height={467}
                />
                <figcaption>
                  Das Highlight: Fleischbrot und Göckele vom Holzkohlengrill
                </figcaption>
              </figure>
            </>
          ),
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
          description: (
            <>
              <figure>
                <Image
                  src="/Muttertagskonzert.jpg"
                  alt="Jugendkapelle"
                  width={1080}
                  height={720}
                />
                <figcaption>
                  Jugendkapelle des Musikverein Schwieberdingen
                </figcaption>
              </figure>
              <p className="mt-4">
                Das <b>Lieder- und Vororchester</b> der Musikschule
                Schwieberdingen sowie die <b>Jugendkapelle</b> des Musikvereins
                Schwieberdingen eröffnen den letzten Nachmittag am
                Kreismusikfest.
              </p>
            </>
          ),
        },
        {
          time: "18:00",
          title: "Musikverein Ditzingen",
          description: (
            <>
              <figure>
                <Image
                  src="/Ditzingen.jpg"
                  alt="Musikverein Ditzingen"
                  width={2675}
                  height={950}
                />
                <figcaption>© Musikverein Ditzingen</figcaption>
              </figure>
              <p className="mt-4">
                Die Stadtkapelle des Musikverein Ditzingen besteht aus etwas
                mehr als <b>60 Musikerinnen und Musikern</b>. Das Repertoire der
                Stadtkapelle ist vielfältig und erstreckt sich von{" "}
                <b>böhmisch-mährischer Blasmusik</b> über sinfonische Blasmusik
                bis hin zu <b>Pop und Rock</b>. Auf der Webseite findet ihr
                weitere Informationen:{" "}
                <Link
                  className="underline"
                  href="https://mv-ditzingen.de/"
                  target="_blank"
                >
                  https://mv-ditzingen.de/
                </Link>
              </p>
            </>
          ),
        },
        {
          time: "20:30",
          title: "Showprogramm MVS",
          description: (
            <>
              <figure>
                <Image
                  src="/Montag.jpg"
                  alt="Montagabend Showprogramm"
                  width={1080}
                  height={720}
                />
                <figcaption>
                  Voller Einsatz beim Montagabend Showprogramm
                </figcaption>
              </figure>
              <p className="my-4">
                Das Montagabend Showprogramm ist immer der{" "}
                <b>krönende Abschluss</b> des Musikfests in Schwieberdingen. Mit{" "}
                <b>Tanzeinlagen, Spielen</b> und einem <b>bunten Partymix</b>{" "}
                für Jung und Alt feiern wir gemeinsam.
              </p>
              <figure>
                <Image
                  src="/Montag_2.jpg"
                  alt="Montagabend Showprogramm"
                  width={1080}
                  height={810}
                />
                <figcaption>
                  Das ganze Zelt feiert zum Abschluss zusammen
                </figcaption>
              </figure>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-3xl p-4">
      <Head>
        <link
          rel="canonical"
          href="https://www.kreismusikfest.com/programm"
          key="canonical"
        />
      </Head>
      <h1 className="mb-2 mt-4 text-xl font-bold">
        4 Tage abwechslungsreiches Programm!
      </h1>
      <p className="mb-4">
        Vom <b>09. bis 12. Mai 2025</b> erwartet Euch ein unvergessliches
        Wochenende voller Highlights. Freut Euch auf{" "}
        <b>Live-Musik mit tollen Bands und Orchestern</b>. Ob mit Freunden, der
        Familie oder allein – unser <b>abwechslungsreiches Programm</b> bietet
        für jeden etwas. Kommt vorbei und lasst Euch von der mitreißenden
        Atmosphäre verzaubern!
      </p>
      <div>
        <div className="mx-auto mb-8 grid max-w-4xl grid-cols-2 justify-center gap-4 md:grid-cols-4">
          <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
            <Image
              className="rounded"
              alt="Musikfest"
              src="/Musikfest-1.jpg"
              width={1080}
              height={720}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
            <Image
              className="rounded"
              alt="Musikfest"
              src="/Musikfest-2.jpg"
              width={1080}
              height={720}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
            <Image
              className="rounded"
              alt="Musikfest"
              src="/Musikfest-6.jpg"
              width={720}
              height={500}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
            <Image
              className="rounded"
              alt="Musikfest"
              src="/Musikfest-4.jpg"
              width={1080}
              height={720}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
        </div>
      </div>
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
      <div className="mx-auto mb-6 grid max-w-4xl grid-cols-2 justify-center gap-4 md:grid-cols-4">
        <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
          <Image
            className="rounded"
            alt="Musikfest"
            src="/Musikfest-3.jpg"
            width={1080}
            height={720}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
          <Image
            className="rounded"
            alt="Musikfest"
            src="/Musikfest-9.jpg"
            width={1080}
            height={720}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
          <Image
            className="rounded"
            alt="Musikfest"
            src="/Musikfest-7.jpg"
            width={920}
            height={613}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
          <Image
            className="rounded"
            alt="Musikfest"
            src="/Musikfest-8.jpg"
            width={1080}
            height={720}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </div>
    </div>
  );
}
