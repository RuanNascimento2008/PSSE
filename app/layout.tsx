import type { Metadata, Viewport } from "next"
import { Exo_2, Orbitron } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackgroundEffects } from "@/components/background-effects"

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "600", "700"],
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "BARBEARIA ZE DA REGUA | Estilo Premium",
  description:
    "Tecnologia de ponta e tradicao barber se encontram para criar a experiencia definitiva em cuidados masculinos. Agende seu horario!",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${exo2.variable} ${orbitron.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-sans leading-relaxed overflow-x-hidden relative min-h-screen">
        <BackgroundEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
