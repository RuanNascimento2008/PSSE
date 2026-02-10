import { BookingForm } from "@/components/agendamento/booking-form"

export default function AgendamentoPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-4 lg:px-8 max-w-[1200px] mx-auto text-center">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
          AGENDE SEU <span className="accent-text">HORARIO</span>
        </h1>
        <p className="text-lg text-light/90 max-w-2xl mx-auto">
          Reserve seu horario de forma rapida e pratica. Escolha o servico, o
          barbeiro e o melhor horario para voce.
        </p>
      </section>

      <section className="pb-20 px-4 lg:px-8 max-w-[900px] mx-auto">
        <BookingForm />
      </section>
    </>
  )
}
