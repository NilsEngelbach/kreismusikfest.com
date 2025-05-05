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
            Begleitet von <b>über 30 befreundeten Musikvereinen, Gruppen</b> und{" "}
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
            Heimat- und Kulturkreis &quot;Schwieberdinger Gruppe&quot; e.V.
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
            MV Schwieberdingen &quot;Oldies&quot;
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://mv-schwieberdingen.de/"
          >
            MV Schwieberdingen &quot;Jugendkapelle & Blasorchester&quot;
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
            href="https://www.strohgaeu-sinfonieorchester.de/"
          >
            Strohgäu Sinfonieorchester
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
            TSV Schwieberdingen &quot;Jugendfußball&quot;
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.tsv-schwieberdingen.de/abteilungen/turnen"
          >
            TSV Schwieberdingen &quot;Turnen&quot;
          </Link>
        </li>
      </ul>

      <p className="mb-6">
        Unterstüzt wird der Festumzug darüber hinaus vom{" "}
        <Link
          className="underline"
          target="_blank"
          href="http://www.deutscher-hilfsdienst-ludwigsburg.de/"
        >
          Deutschen Hilfsdienst - Kreisverein Ludwigsburg e.V.
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
      <p className="mb-2">
        Der Festumzug startet um <b>14 Uhr</b> im <b>Vöhinger Weg</b> und führt
        über die <b>Stuttgarter Straße</b> und die <b>Bahnhofstraße</b> bis zum{" "}
        <b>Festplatz</b>.
      </p>
      <iframe
        width="100%"
        height="900px"
        frameBorder="0"
        allowFullScreen
        allow="geolocation"
        src="//umap.openstreetmap.de/de/map/festumzug-kreismusikfest-2025_91928?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"
      ></iframe>
      <p>
        <Link
          target="_blank"
          href="//umap.openstreetmap.de/de/map/festumzug-kreismusikfest-2025_91928?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"
          className="mt-2 block w-full rounded bg-orange-500 px-6 py-2 text-center font-freeman text-white hover:bg-orange-600 md:w-auto"
        >
          Vollbildanzeige
        </Link>
      </p>

      <h3 className="mb-3 mt-6 text-lg font-bold">Hinweise für Anwohner</h3>
      <div className="mb-6 flex flex-col md:flex-row">
        <div className="flex-1">
          <p className="mb-2">
            Aufgrund des Festumzugs am Sonntag, 11.05.2025 sind für den Zeitraum
            13:00 Uhr bis zirka 16:00 Uhr mehrere Straßen in Schwieberdingen
            gesperrt und Umleitungen eingerichtet. Auch im Busverkehr kommt es
            von 13:00 bis 16:00 zu Einschränkungen und Anpassungen am
            Linienverlauf. <br />
          </p>
          <p>
            Alle Informationen dazu gibt es auf der{" "}
            <Link
              className="underline"
              target="_blank"
              href="https://www.schwieberdingen.de/23805415.html"
            >
              Webseite der Gemeinde Schwieberdingen
            </Link>
            .
          </p>
        </div>
        <div className="flex-1">
          <Link
            className="underline"
            target="_blank"
            href="https://www.schwieberdingen.de/23805415.html"
          >
            <div className="flex transform items-center justify-center rounded bg-white shadow-md transition-transform md:hover:scale-105">
              <Image
                className="rounded"
                alt="Festumzug - Straßensperrungen & Umleitungen"
                src="/festumzug_straßensperren.jpg"
                height={2107}
                width={1434}
                style={{ objectFit: "contain" }}
              ></Image>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
