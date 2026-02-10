"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Inicio", icon: "fas fa-home" },
  { href: "/servicos", label: "Servicos", icon: "fas fa-concierge-bell" },
  { href: "/barbeiros", label: "Barbeiros", icon: "fas fa-user" },
  { href: "/agendamento", label: "Agendamento", icon: "fas fa-calendar-check" },
  { href: "/contato", label: "Contato", icon: "fas fa-phone" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="glass-header fixed w-full top-0 z-[1000] px-4 py-4 lg:px-8">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="flex items-center gap-2.5">
          <h1 className="font-display text-lg lg:text-2xl font-bold text-light">
            BARBEARIA <span className="accent-text">ZE</span> DA REGUA
          </h1>
          <span className="text-2xl animate-pulse">
            <i className="fas fa-cut text-secondary" />
          </span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex gap-4 xl:gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all ${
                    pathname === link.href
                      ? "bg-white/5 text-secondary"
                      : "text-light hover:bg-white/5 hover:text-secondary"
                  }`}
                >
                  <i className={link.icon} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="lg:hidden text-2xl text-light cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          <i className={mobileOpen ? "fas fa-times" : "fas fa-bars"} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden mt-4">
          <ul className="flex flex-col gap-2 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                    pathname === link.href
                      ? "bg-white/5 text-secondary"
                      : "text-light hover:bg-white/5 hover:text-secondary"
                  }`}
                >
                  <i className={link.icon} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
