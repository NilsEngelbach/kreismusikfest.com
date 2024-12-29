"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActivePath = (path: string) => path === pathname;

  const menuItems = [
    { label: "Programm", href: "/programm", target: "_self" },
    { label: "Wertungsspiel", href: "/wertungsspiel", target: "_self" },
    {
      label: "Tickets",
      href: "https://www.mv-schwieberdingen.de/tickets",
      target: "_blank",
    },
    { label: "FAQ", href: "/faq", target: "_self" },
    { label: "Kontakt", href: "/kontakt", target: "_self" },
  ];

  return (
    <nav className="w-full bg-white">
      <div onClick={() => setIsOpen(!isOpen)} className="mx-auto max-w-7xl">
        {/* Top bar with logo and hamburger */}
        <div className="flex items-center justify-between md:justify-center">
          {/* Logo */}
          <div className="mr-4 flex-shrink-0 md:hidden">
            <div className="text-xl font-bold md:text-2xl">
              <span>Menü</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.target}
                className={
                  isActivePath(item.href)
                    ? "rounded-md bg-gray-50 px-3 py-2 font-freeman text-lg font-medium text-orange-500"
                    : "rounded-md px-3 py-2 font-freeman text-lg font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-orange-500"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out md:hidden`}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  isActivePath(item.href)
                    ? "block rounded-md bg-gray-50 px-3 py-2 text-base font-medium text-orange-500"
                    : "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
