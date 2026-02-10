import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MAGNATAS BARBER SHOP | Estilo Premium",
  description:
    "Tecnologia de ponta e tradicao barber se encontram para criar a experiencia definitiva em cuidados masculinos.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
