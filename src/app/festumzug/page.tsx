import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Festumzug | Kreismusikfest 2025",
  description:
    "Festumzug zum 100-jährigen Jubiläum des Musikverein Schwieberdingen am 11. Mai 2025",
  alternates: { canonical: "https://kreismusikfest.com/festumzug" },
  openGraph: {
    title: "Festumzug | Kreismusikfest 2025",
    description:
      "Festumzug zum 100-jährigen Jubiläum des Musikverein Schwieberdingen am 11. Mai 2025",
    url: "https://kreismusikfest.com/festumzug",
    images: [
      {
        url: "https://kreismusikfest.com/festumzug.jpeg",
        width: 1080,
        height: 810,
      },
    ],
  },
};

export default function Festumzug() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-4 mt-4 text-xl font-bold">Festumzug</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <p className="mb-4">
            Begleitet von <b>befreundeten Musikvereinen, Gruppen</b> und
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
      <p className="mb-6">
        Sobald alle Teilnehmer feststehen stellen wir sie hier eine Übersicht
        für Euch bereit.
      </p>

      <h3 className="mb-3 text-lg font-bold">Strecke</h3>
      <p className="mb-6">
        Sobald der genaue Ablauf feststeht stellen wir ihn hier für Euch bereit.
      </p>
    </div>
  );
}
