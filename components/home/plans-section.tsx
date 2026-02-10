const plans = [
  {
    name: "PLANO BASICO",
    price: 69,
    features: [
      { text: "2 Cortes mensais", included: true },
      { text: "Aparar barba (1x)", included: true },
      { text: "5% de cashback", included: true },
      { text: "Servicos premium", included: false },
      { text: "Horario preferencial", included: false },
    ],
    featured: false,
  },
  {
    name: "PLANO PREMIUM",
    price: 119,
    features: [
      { text: "4 Cortes mensais", included: true },
      { text: "Barba completa (2x)", included: true },
      { text: "10% de cashback", included: true },
      { text: "Limpeza de pele (1x)", included: true },
      { text: "Horario preferencial", included: true },
    ],
    featured: true,
    badge: "POPULAR",
  },
  {
    name: "PLANO VIP",
    price: 199,
    features: [
      { text: "Cortes ilimitados", included: true },
      { text: "Barba ilimitada", included: true },
      { text: "15% de cashback", included: true },
      { text: "Todos os servicos premium", included: true },
      { text: "Agendamento prioritario 24/7", included: true },
    ],
    featured: false,
  },
]

export function PlansSection() {
  return (
    <section id="planos" className="py-20 px-4 lg:px-8 max-w-[1200px] mx-auto">
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-4 text-balance">
        NOSSOS <span className="accent-text">PLANOS</span>
      </h2>
      <p className="text-center text-light/80 mb-12">
        Escolha o plano ideal para manter seu estilo sempre em dia
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`glass rounded-2xl p-8 relative transition-transform hover:-translate-y-2.5 ${
              plan.featured
                ? "border-2 border-secondary md:scale-105"
                : ""
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 right-5 bg-secondary text-dark px-4 py-1 rounded-full text-sm font-bold">
                {plan.badge}
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="font-display text-lg font-bold mb-4 text-light">
                {plan.name}
              </h3>
              <div className="flex items-baseline justify-center">
                <span className="text-xl font-semibold text-light">R$</span>
                <span className="text-5xl font-bold mx-1 text-light">
                  {plan.price}
                </span>
                <span className="text-light/80">/mes</span>
              </div>
            </div>
            <ul className="flex flex-col gap-3 mb-8 list-none">
              {plan.features.map((feature) => (
                <li
                  key={feature.text}
                  className="flex items-center gap-2"
                >
                  <i
                    className={`fas ${
                      feature.included
                        ? "fa-check text-secondary"
                        : "fa-times text-accent/60"
                    }`}
                  />
                  <span className={feature.included ? "text-light" : "text-light/50"}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(10,111,226,0.6)] transition-all">
              Assinar Agora
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
