import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Kreismusikfest Ludwigsburg 2025 – Rückblick",
  description:
    "Rückblick auf das Kreismusikfest Ludwigsburg 2025 – vier unvergessliche Tage Blasmusik in Schwieberdingen.",
  alternates: { canonical: "https://www.kreismusikfest.com" },
  openGraph: {
    title: "Kreismusikfest Ludwigsburg 2025 – Rückblick",
    description:
      "Rückblick auf das Kreismusikfest Ludwigsburg 2025 – vier unvergessliche Tage Blasmusik in Schwieberdingen.",
    url: "https://www.kreismusikfest.com",
  },
};

const images = [
  { src: "/rückblick/NE_01244.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/NE_01307.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/NE_01542.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/NE_01567.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/NE_01989.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/NE_02274.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/NE_02302.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/NE_02343.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/NE_02484.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/NE_02525.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/NE_02774.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/DSC_4843.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/DSCF2320.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/DSCF2383 (1).jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/A7404184.jpg", alt: "Kreismusikfest 2025" },
  { src: "/rückblick/A7404192.jpg", alt: "Kreismusikfest 2025" },
  {
    src: "/rückblick/WhatsApp Image 2026-05-08 at 13.55.18.jpeg",
    alt: "Kreismusikfest 2025",
  },
  {
    src: "/rückblick/WhatsApp Image 2026-05-08 at 13.55.18 (1).jpeg",
    alt: "Kreismusikfest 2025",
  },
];

export default function Home() {
  return (
    <main>
      {/* Rückblick Text */}
      <section className="bg-white p-4 md:p-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-center text-lg text-gray-500">
            09.–12. Mai 2025 · Schwieberdingen
          </h2>
          <h1 className="mb-8 text-center font-freeman text-3xl text-orange-500 md:text-4xl">
            Rückblick Kreismusikfest 2025
          </h1>
          <div className="space-y-4 text-justify leading-relaxed text-gray-700">
            <p>
              Vier Tage lang stand die Blasmusik im Mittelpunkt: Vom{" "}
              <b>9. bis 12. Mai 2025</b> feierte der Blasmusik-Kreisverband
              Ludwigsburg sein großes Kreismusikfest 2025. Musikerinnen und
              Musiker aus dem gesamten Landkreis kamen zusammen, um ihr Können
              zu präsentieren, sich auszutauschen und gemeinsam zu feiern.
              Veranstaltungsort war das Musikfest anlässlich des{" "}
              <b>100. Jubiläums des Musikverein Schwieberdingen</b>.
            </p>
            <p>
              Der Auftakt am Freitagabend stand ganz im Zeichen{" "}
              <b>mitreißender Brassmusik</b>: Unter dem Motto „Blech X-Plosion"
              heizten <b>Druckluft</b> und <b>Fättes Blech</b> dem Publikum
              ordentlich ein. Mit energiegeladenen Rhythmen, präzisem
              Zusammenspiel und humorvoller Bühnenshow sorgten die beiden
              Ensembles für eine ausgelassene Stimmung und einen unvergesslichen
              Start ins Festwochenende.
            </p>
            <p>
              Am Samstag folgten die <b>Wertungsspiele</b>, bei denen zahlreiche
              Orchester ihr musikalisches Können unter Beweis stellten. Die Jury
              bewertete die Beiträge nach Klangqualität, Interpretation und
              technischer Ausführung. Punktsieger wurde der{" "}
              <b>Orchesterverein Horrheim</b>, der mit seiner Darbietung die
              höchste Bewertung des Tages erzielte und für seine musikalische
              Leistung großen Applaus erhielt.
            </p>
            <p>
              Der Sonntag war traditionell der Tag für die ganze Familie: Ein{" "}
              <b>farbenfroher Festumzug</b> durch die Straßen lockte zahlreiche
              Besucher an. Musikvereine aus dem gesamten Landkreis präsentierten
              sich in Uniform, mit klingendem Spiel und bester Stimmung. Der
              Umzug war ein Höhepunkt des Wochenendes und zeigte die Vielfalt
              und den Gemeinschaftsgeist der Blasmusikszene in der Region. Dies
              wurde auch im anschließenden <b>Massenchor</b> deutlich: alle
              beteiligten Musikgruppen führten gemeinsam die Auftragskomposition
              zum Kreismusikfest <b>„Ludwigsburg unitis"</b> auf.
            </p>
            <p>
              Der Blasmusik-Kreisverband Ludwigsburg und der Musikverein
              Schwieberdingen blicken auf ein rundum gelungenes Fest zurück
              und danken allen Beteiligten für die gute Zusammenarbeit. Das
              Kreismusikfest setzte ein eindrucksvolles Zeichen für die
              Lebendigkeit und Begeisterung der Blasmusik in der Region.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="border-t bg-gray-50 p-4 md:p-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center font-freeman text-2xl text-orange-500">
            Impressionen
          </h2>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Links */}
      <section className="border-t bg-white p-4 md:p-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-freeman text-2xl text-orange-500">
            Veranstalter
          </h2>
          <div className="flex flex-col gap-6 md:flex-row">
            <Link
              href="https://www.bvbw-ludwigsburg.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 flex-col items-center gap-4 rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-16 w-full">
                <Image
                  src="/kvlb-logo.svg"
                  alt="Blasmusik Kreisverband Ludwigsburg"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="font-freeman text-orange-500">
                Blasmusik-Kreisverband Ludwigsburg
              </span>
            </Link>
            <Link
              href="https://mv-schwieberdingen.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 flex-col items-center gap-4 rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-16 w-full">
                <Image
                  src="/mvs-logo-100.svg"
                  alt="Musikverein Schwieberdingen"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="font-freeman text-orange-500">
                Musikverein Schwieberdingen e.V.
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
