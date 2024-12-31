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
    <div>
      <h1>Festumzug</h1>
      <p>Willkommen auf dem Festumzug!</p>
    </div>
  );
}
