import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  const faqs = [
    {
      question: "Kostet das Kreismusikfest Eintritt?",
      answer: (
        <>
          <p>
            Am Freitag, 09.05.2025 kostet ein Ticket 29€. Am Samstag, Sonntag
            und Montag (10.05. bis 12.05.) ist der Eintritt frei.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-4xl p-4">
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

      <h1 className="mb-4 mt-4 text-xl font-bold">Anfahrt & Parken</h1>
      <p>
        Hier werden wir Euch noch rechtzeitig vor dem Fest über die Anfahrt und
        Parkmöglichkeiten informieren.
      </p>
    </div>
  );
}
