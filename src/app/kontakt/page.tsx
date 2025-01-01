import React from "react";

export const metadata = {
  title: "Kontakt | Kreismusikfest 2025",
  description:
    "Ansprechpartner für alle Fragen rund um das Kreismusikfest Ludwigsburg 2025",
  alternates: { canonical: "https://kreismusikfest.com/kontakt" },
  openGraph: {
    title: "Kontakt | Kreismusikfest 2025",
    description:
      "Ansprechpartner für alle Fragen rund um das Kreismusikfest Ludwigsburg 2025",
    url: "https://kreismusikfest.com/kontakt",
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
  return (
    <div>
      <h1>Kontakt</h1>
      <p>Hier können sie uns kontaktieren</p>
      <h3>Sponsoring & Werbung</h3>
    </div>
  );
}
