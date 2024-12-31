import React from "react";

export const metadata = {
  title: "FAQ & Anfahrt | Kreismusikfest 2025",
  description:
    "Häufige Fragen und Antworten & Informationen zur Anfahrt für das Kreismusikfest Ludwigsburg 2025",
  alternates: { canonical: "https://kreismusikfest.com/faq" },
  openGraph: {
    title: "FAQ & Anfahrt | Kreismusikfest 2025",
    description:
      "Häufige Fragen und Antworten & Informationen zur Anfahrt für das Kreismusikfest Ludwigsburg 2025",
    url: "https://kreismusikfest.com/faq",
    images: [
      {
        url: "https://kreismusikfest.com/festumzug.jpeg",
        width: 1080,
        height: 810,
      },
    ],
  },
};

export default function Programm() {
  return (
    <div>
      <h1>FAQ</h1>
      <p>Willkommen bei den FAQ</p>
    </div>
  );
}
