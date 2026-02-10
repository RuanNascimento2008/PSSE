import Link from "next/link"

export function CtaSection() {
  return (
    <section className="mx-4 lg:mx-8 my-20 max-w-[1200px] lg:mx-auto">
      <div className="text-center py-20 px-8 rounded-[20px] bg-gradient-to-br from-primary/10 to-secondary/10">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-light text-balance">
          PRONTO PARA UMA NOVA EXPERIENCIA?
        </h2>
        <p className="text-lg text-light/90 mb-8">
          Agende agora e ganhe{" "}
          <span className="accent-text font-semibold">15% de cashback</span> no
          seu primeiro servico!
        </p>
        <Link
          href="/agendamento"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-[0_4px_15px_rgba(10,111,226,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(10,111,226,0.6)] transition-all"
        >
          Fazer Agendamento <i className="fas fa-arrow-right" />
        </Link>
      </div>
    </section>
  )
}
