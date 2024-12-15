"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-05-09T20:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);

    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-full max-w-[800px] mx-auto p-8">
      <div className="relative h-52 md:h-72 w-full">
        <Image
          src="/logo.svg"
          alt="Kreismusikfest 2025"
          fill={true}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="w-full rounded-2xl flex gap-9 flex-col items-center justify-center bg-cover bg-center">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full gap-1.5">
          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 md:min-w-[96px] w-full flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="font-semibold text-2xl text-white text-center">
              {timeLeft.days}
            </h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
              Tage
            </p>
          </div>
          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 md:min-w-[96px] w-full flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="font-semibold text-2xl text-white text-center">
              {timeLeft.hours}
            </h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
              Stunden
            </p>
          </div>
          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 md:min-w-[96px] w-full flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="font-semibold text-2xl text-white text-center">
              {timeLeft.minutes}
            </h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
              Minuten
            </p>
          </div>
          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 md:min-w-[96px] w-full flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="font-semibold text-2xl text-white text-center">
              {timeLeft.seconds}
            </h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
              Sekunden
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
