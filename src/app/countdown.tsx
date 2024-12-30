"use client";

import React, { useState, useEffect } from "react";

export default function Countdown() {
  // State for each time unit
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the event date (May 9, 2025)
    const targetDate = new Date("2025-05-09T20:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Event has started
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate initial time
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Tage" },
    { value: timeLeft.hours, label: "Stunden" },
    { value: timeLeft.minutes, label: "Minuten" },
    { value: timeLeft.seconds, label: "Sekunden" },
  ];

  return (
    <div className="mb-10 mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      {timeUnits.map(({ value, label }) => (
        <div
          key={label}
          className="transform rounded-lg bg-white p-4 text-center shadow-sm transition-transform hover:scale-105"
        >
          <div className="text-2xl font-bold text-orange-500">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      ))}
    </div>
  );
}
