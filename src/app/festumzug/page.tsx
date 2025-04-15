import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Festumzug | Kreismusikfest 2025",
  description:
    "Festumzug zum 100-jährigen Jubiläum des Musikverein Schwieberdingen am 11. Mai 2025",
  alternates: { canonical: "https://www.kreismusikfest.com/festumzug" },
  openGraph: {
    title: "Festumzug | Kreismusikfest 2025",
    description:
      "Festumzug zum 100-jährigen Jubiläum des Musikverein Schwieberdingen am 11. Mai 2025",
    url: "https://www.kreismusikfest.com/festumzug",
    images: [
      {
        url: "https://www.kreismusikfest.com/festumzug.jpeg",
        width: 1080,
        height: 810,
      },
    ],
  },
};

export default function Festumzug() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <Head>
        <link
          rel="canonical"
          href="https://www.kreismusikfest.com/festumzug"
          key="canonical"
        />
      </Head>
      <h1 className="mb-4 mt-4 text-xl font-bold">Festumzug</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <p className="mb-4">
            Begleitet von <b>befreundeten Musikvereinen, Gruppen</b> und{" "}
            <b>begeisterten Zuschauern</b> ziehen wir durch die Straßen von
            Schwieberdingen, um das 100-jährige Bestehen des Musikverein
            Schwieberdingen zu feiern. Dieses besondere Jubiläum bietet uns
            nicht nur die Gelegenheit, auf eine stolze Geschichte
            zurückzublicken, sondern auch die musikalische Gemeinschaft und den
            Zusammenhalt unserer Region zu feiern. Freuen Sie sich auf einen
            unvergesslichen Tag voller Musik, Freude und Gemeinschaft! Ziel des
            Umzugs ist das <b>Festzelt auf dem Festplatz am Bahnhof</b>.
          </p>
          <p className="mb-4">
            Nach dem Einzug des Umzugs ins Festzelt werden die{" "}
            <b>Erbgebnisse des Wertungsspiels</b> verkündet.
          </p>
        </div>
        <div className="flex-1">
          <figure className="mb-4 px-4 md:mb-0">
            <Image
              alt="Festumzug"
              src="/festumzug.jpeg"
              height={1080}
              width={810}
            ></Image>
          </figure>
        </div>
      </div>

      <h3 className="mb-3 text-lg font-bold">Helfen</h3>
      <p className="mb-6">
        Damit der Festumzug reibungslos durchgeführt werden kann, sind wir{" "}
        <b>auf Unterstützung</b> angewiesen! Wenn du uns bei einer der
        zahlreichen Aufgaben Rund um dev Festumzug <b>unter die Arme greifen</b>{" "}
        möchtest melde dich gerne!
      </p>

      <h3 className="mb-3 text-lg font-bold">Teilnehmer</h3>
      <ul className="mb-6">
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.ejw-schwieberdingen.de/"
          >
            Evangelisches Jugendwerk mit Posaunenchor
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.fw-hardtschoenbuehlhof.de/"
          >
            Freiwillige Feuerwehr Hardt- und Schönbühlhof
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.feuerwehr-schwieberdingen.de/"
          >
            Freiwillige Feuerwehr Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.instagram.com/gagerbachhexen/"
          >
            Gagerbach Hexen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.schwieberdingen.de/start.html"
          >
            Gemeinderat Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.hbs-schwieberdingen.net/"
          >
            Hermann-Butzer-Schule Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.hkk-schwieberdinger-gruppe.de/"
          >
            Heimat- und Kulturkreis 'Schwieberdinger Gruppe' e.V.
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.drk-schwieberdingen.de/jrk.html"
          >
            Jugendrotkreuz Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.schwieberdingen.de/start/bildung+_+betreuung/Kindergaerten.html"
          >
            KiTa Sonnenschein
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.schwieberdingen.de/start/bildung+_+betreuung/Kindergaerten.html"
          >
            KiTa Herrenwiesenweg
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.schwieberdingen.de/start/bildung+_+betreuung/Kindergaerten.html"
          >
            KiTa Pusteblume
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.schwieberdingen.de/start/bildung+_+betreuung/Kindergaerten.html"
          >
            KiTa Wirbelwind
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.landfrauen-schwieberdingen.de/"
          >
            Landfrauen Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://mv-ahausen.de/"
          >
            MV Ahausen
          </Link>
        </li>
        <li>
          {" "}
          <Link className="underline" target="_blank" href="https://mv-p.de/">
            MV Poppenweiler
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://mv-schwieberdingen.de/"
          >
            MV Schwieberdingen 'Oldies'
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://mv-schwieberdingen.de/"
          >
            MV Schwieberdingen 'Jugendkapelle & Blasorchester'
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.mv-ditzingen.de/"
          >
            MV Stadtkapelle Ditzingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://mvfreiberg.de/"
          >
            MV Stadtkapelle Freiberg
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://musikvereingerlingen.de/"
          >
            MV Stadtkapelle Gerlingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.musikverein-oberriexingen.de/"
          >
            MV Stadtkapelle Oberriexingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="http://www.musikschule-schwieberdingen.de/"
          >
            Musikschule Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://ogv-schwieberdingen.de/"
          >
            Obst- und Gartenbauverein Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://saengerbund-schwieberdingen.de/"
          >
            Sängerbund Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.sv-schwieberdingen.de/"
          >
            Schützenverein Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="http://www.szfzhemmingen.de/"
          >
            SZFZ Musikzug Hemmingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.sz-schwieberdingen.de/"
          >
            Skizunft Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://spv-schwieberdingen.de/"
          >
            Städte-Partnerschaftsverein Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.tc-schwieberdingen.de/"
          >
            Tennisclub Schwieberdingen
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://tsv-schwieberdingen.de/abteilungen/fussball"
          >
            TSV Schwieberdingen 'Jugendfußball'
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.tsv-schwieberdingen.de/abteilungen/turnen"
          >
            TSV Schwieberdingen 'Turnen'
          </Link>
        </li>
      </ul>

      <p className="mb-6">
        Unterstüzt wird der Festumzug darüber hinaus vom{" "}
        <Link
          className="underline"
          target="_blank"
          href="https://www.tsv-schwieberdingen.de/abteilungen/turnen"
        >
          Deutschen Hilfsdienst, Kreisverein Ludwigsburg e.V.
        </Link>{" "}
        und dem{" "}
        <Link
          className="underline"
          target="_blank"
          href="https://www.drk-schwieberdingen.de/"
        >
          DRK Schwieberdingen
        </Link>
        .
      </p>

      <h3 className="mb-3 text-lg font-bold">Strecke</h3>
      <p className="mb-6">
        Sobald der genaue Ablauf feststeht stellen wir ihn hier für Euch bereit.
      </p>
    </div>
  );
}
