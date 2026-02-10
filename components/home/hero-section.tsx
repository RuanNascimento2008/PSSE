"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [time, setTime] = useState({ hours: 24, minutes: 0, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let totalSeconds =
          prev.hours * 3600 + prev.minutes * 60 + prev.seconds
        if (totalSeconds <= 0) {
          return { hours: 24, minutes: 0, seconds: 0 }
        }
        totalSeconds--
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => n.toString().padStart(2, "0")

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-24 pb-8 lg:px-8 relative max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="text-center lg:text-left">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">
            ELEVE SEU ESTILO A{" "}
            <span className="accent-text">OUTRO NIVEL</span>
          </h2>
          <p className="text-lg text-light/90 mb-8">
            Tecnologia de ponta e tradicao barber se encontram para criar a
            experiencia definitiva em cuidados masculinos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/agendamento"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-[0_4px_15px_rgba(10,111,226,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(10,111,226,0.6)] transition-all"
            >
              Agendar Agora <i className="fas fa-arrow-right" />
            </Link>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/10 text-light font-semibold hover:bg-white/5 hover:border-secondary hover:text-secondary transition-all"
            >
              Ver Planos <i className="fas fa-gem" />
            </a>
          </div>
        </div>

        <div className="glass rounded-2xl p-8 animate-float-card">
          <div className="text-center">
            <h3 className="font-display text-xl font-bold mb-2 text-light">
              PRIMEIRA VISITA?
            </h3>
            <p className="text-light/90">
              Ganhe <span className="accent-text font-semibold">15% de cashback</span> no
              seu primeiro agendamento!
            </p>
            <div className="mt-6">
              <p className="text-light/70 text-sm">Oferta valida por:</p>
              <div className="font-display text-3xl text-secondary mt-2 tracking-wider">
                {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-2">
        <div className="w-0.5 h-[50px] bg-gradient-to-b from-secondary to-transparent animate-scroll-line" />
        <p className="text-light/60 text-sm">Deslize para explorar</p>
      </div>
    </section>
  )
}
