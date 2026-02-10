import Link from "next/link"

const serviceCategories = [
  {
    title: "CORTES DE CABELO",
    icon: "fas fa-cut",
    services: [
      {
        icon: "fas fa-star",
        name: "Corte Classico",
        description:
          "Corte tradicional com tesoura e maquina, finalizado com styling profissional.",
        price: "R$ 40,00",
        cashback: "5% cashback",
      },
      {
        icon: "fas fa-fire",
        name: "Corte Degrade",
        description:
          "Corte moderno com transicao perfeita de comprimento, o mais pedido da casa.",
        price: "R$ 50,00",
        cashback: "5% cashback",
      },
      {
        icon: "fas fa-gem",
        name: "Corte Social",
        description:
          "Corte sofisticado para eventos especiais, com design personalizado.",
        price: "R$ 60,00",
        cashback: "7% cashback",
      },
    ],
  },
  {
    title: "BARBA",
    icon: "fas fa-bold",
    services: [
      {
        icon: "fas fa-check-circle",
        name: "Barba Completa",
        description:
          "Aparar, modelar e finalizar com toalha quente e produtos premium.",
        price: "R$ 35,00",
        cashback: "5% cashback",
      },
      {
        icon: "fas fa-pen-fancy",
        name: "Barba Desenhada",
        description:
          "Design personalizado para valorizar o formato do seu rosto.",
        price: "R$ 45,00",
        cashback: "7% cashback",
      },
      {
        icon: "fas fa-spa",
        name: "Hidratacao de Barba",
        description:
          "Tratamento especial para barba mais macia, saudavel e cheirosa.",
        price: "R$ 25,00",
        cashback: "5% cashback",
      },
    ],
  },
  {
    title: "TRATAMENTOS PREMIUM",
    icon: "fas fa-crown",
    services: [
      {
        icon: "fas fa-pump-soap",
        name: "Limpeza de Pele",
        description:
          "Limpeza profunda facial para remover cravos e impurezas.",
        price: "R$ 50,00",
        cashback: "7% cashback",
      },
      {
        icon: "fas fa-hand-holding-heart",
        name: "Massagem Relaxante",
        description:
          "Massagem facial e capilar para aliviar tensoes e estresse.",
        price: "R$ 40,00",
        cashback: "5% cashback",
      },
      {
        icon: "fas fa-magic",
        name: "Hidratacao Capilar",
        description:
          "Tratamento reconstrutor para cabelos danificados e ressecados.",
        price: "R$ 30,00",
        cashback: "5% cashback",
      },
    ],
  },
  {
    title: "PACOTES ESPECIAIS",
    icon: "fas fa-gift",
    services: [
      {
        icon: "fas fa-plus",
        name: "Corte + Barba",
        description:
          "Combinacao perfeita: corte de cabelo e barba completa.",
        price: "R$ 70,00",
        cashback: "10% cashback",
        badge: "POPULAR",
      },
      {
        icon: "fas fa-plus-circle",
        name: "Pacote Completo",
        description:
          "Corte, barba e hidratacao capilar. Experiencia completa.",
        price: "R$ 90,00",
        cashback: "10% cashback",
      },
      {
        icon: "fas fa-star",
        name: "Pacote Premium",
        description:
          "Tudo que ha de melhor: corte, barba, hidratacao e massagem.",
        price: "R$ 120,00",
        cashback: "15% cashback",
      },
    ],
  },
]

export default function ServicosPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-4 lg:px-8 max-w-[1200px] mx-auto text-center">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
          NOSSOS <span className="accent-text">SERVICOS</span>
        </h1>
        <p className="text-lg text-light/90 max-w-2xl mx-auto">
          Descubra nossa gama completa de servicos premium, desenvolvidos para
          elevar sua aparencia e autoestima.
        </p>
      </section>

      <section className="pb-20 px-4 lg:px-8 max-w-[1200px] mx-auto">
        {serviceCategories.map((category) => (
          <div key={category.title} className="mb-16">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-8 text-light">
              <i className={`${category.icon} mr-3 text-secondary`} />
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <div
                  key={service.name}
                  className={`glass rounded-2xl p-6 text-center hover:-translate-y-2.5 transition-transform relative ${
                    service.badge ? "border-2 border-secondary" : ""
                  }`}
                >
                  {service.badge && (
                    <div className="absolute -top-3 right-4 bg-secondary text-dark px-3 py-1 rounded-full text-xs font-bold">
                      {service.badge}
                    </div>
                  )}
                  <div className="text-3xl text-secondary mb-4">
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-light">
                    {service.name}
                  </h3>
                  <p className="text-light/80 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="text-xl font-bold text-light mb-2">
                    {service.price}
                  </div>
                  <div className="text-sm text-secondary font-semibold">
                    {service.cashback}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mx-4 lg:mx-8 mb-20 max-w-[1200px] lg:mx-auto">
        <div className="text-center py-20 px-8 rounded-[20px] bg-gradient-to-br from-primary/10 to-secondary/10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-light text-balance">
            PRONTO PARA EXPERIMENTAR NOSSOS SERVICOS?
          </h2>
          <p className="text-lg text-light/90 mb-8">
            Agende agora e ganhe{" "}
            <span className="accent-text font-semibold">
              15% de cashback
            </span>{" "}
            no seu primeiro servico!
          </p>
          <Link
            href="/agendamento"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-[0_4px_15px_rgba(10,111,226,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(10,111,226,0.6)] transition-all"
          >
            Fazer Agendamento <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </section>
    </>
  )
}
