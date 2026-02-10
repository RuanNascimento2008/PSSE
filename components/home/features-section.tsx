const features = [
  {
    icon: "fas fa-rocket",
    title: "Tecnologia Avancada",
    description:
      "Utilizamos os mais modernos equipamentos e tecnicas de precisao para resultados impecaveis.",
  },
  {
    icon: "fas fa-crown",
    title: "Barbeiros Especialistas",
    description:
      "Nossa equipe e composta pelos melhores profissionais, constantemente capacitados nas ultimas tendencias.",
  },
  {
    icon: "fas fa-coins",
    title: "Cashback Garantido",
    description:
      "Em cada servico, voce acumula creditos para usar em futuros agendamentos na nossa barbearia.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 lg:px-8 max-w-[1200px] mx-auto">
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-12 text-balance">
        POR QUE ESCOLHER A{" "}
        <span className="accent-text">ZE DA REGUA</span>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="glass rounded-2xl p-8 text-center hover:-translate-y-2.5 transition-transform"
          >
            <div className="text-4xl text-secondary mb-6">
              <i className={feature.icon} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-light">
              {feature.title}
            </h3>
            <p className="text-light/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
