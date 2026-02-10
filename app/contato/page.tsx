import { FaqSection } from "@/components/contato/faq-section"

const contactCards = [
  {
    icon: "fab fa-whatsapp",
    title: "WhatsApp Business",
    description: "Atendimento rapido e direto pelo WhatsApp",
    info: "(42) 99998-3552",
    subInfo: "Online agora",
    subInfoClass: "text-green-400",
    href: "https://wa.me/5542984136341",
    btnText: "Enviar Mensagem",
    btnIcon: "fab fa-whatsapp",
    badge: "Mais Rapido",
    cardClass: "border-green-500/30",
  },
  {
    icon: "fab fa-instagram",
    title: "Instagram",
    description: "Siga-nos e veja nossos trabalhos",
    info: "@barbeariazedaregua",
    subInfo: "2.5K seguidores",
    subInfoClass: "text-light/60",
    href: "https://www.instagram.com/duduuzxh",
    btnText: "Seguir no Instagram",
    btnIcon: "fab fa-instagram",
    cardClass: "border-pink-500/30",
  },
  {
    icon: "fas fa-phone",
    title: "Ligacao Direta",
    description: "Fale diretamente conosco",
    info: "(42) 99998-3552",
    subInfo: "8h-19h (Seg-Sab)",
    subInfoClass: "text-light/60",
    href: "tel:+5542984136341",
    btnText: "Ligar Agora",
    btnIcon: "fas fa-phone",
    cardClass: "border-primary/30",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Nosso Endereco",
    description: "Venha nos visitar",
    info: "R. Francisco Otaviano, 1889",
    subInfo: "Nova Russia, Ponta Grossa - PR",
    subInfoClass: "text-light/60",
    href: "https://maps.app.goo.gl/example",
    btnText: "Como Chegar",
    btnIcon: "fas fa-directions",
    cardClass: "border-secondary/30",
  },
  {
    icon: "fab fa-tiktok",
    title: "TikTok",
    description: "Videos dos nossos cortes",
    info: "@zedaregua.pg",
    subInfo: "1.2K seguidores",
    subInfoClass: "text-light/60",
    href: "https://www.tiktok.com/@zedaregua.pg",
    btnText: "Seguir no TikTok",
    btnIcon: "fab fa-tiktok",
    cardClass: "border-light/10",
  },
  {
    icon: "fas fa-envelope",
    title: "E-mail",
    description: "Para assuntos comerciais",
    info: "contato@barbeariazedaregua.com",
    subInfo: "Resposta em 24h",
    subInfoClass: "text-light/60",
    href: "mailto:contato@barbeariazedaregua.com",
    btnText: "Enviar E-mail",
    btnIcon: "fas fa-paper-plane",
    cardClass: "border-primary/30",
  },
]

const hours = [
  { day: "Segunda a Sexta", time: "8h as 19h" },
  { day: "Sabado", time: "8h as 18h" },
  { day: "Domingo", time: "9h as 13h" },
  { day: "Horario de Pico", time: "10h-12h / 17h-19h", highlight: true },
]

export default function ContatoPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-4 lg:px-8 max-w-[1200px] mx-auto text-center">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
          FALE <span className="accent-text">CONOSCO</span>
        </h1>
        <p className="text-lg text-light/90 max-w-2xl mx-auto">
          Estamos sempre prontos para atende-lo. Escolha a melhor forma de
          entrar em contato conosco.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="pb-16 px-4 lg:px-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className={`glass rounded-2xl p-6 border-2 ${card.cardClass} hover:-translate-y-2 transition-transform relative`}
            >
              {card.badge && (
                <div className="absolute -top-3 right-4 bg-green-500 text-dark px-3 py-1 rounded-full text-xs font-bold">
                  {card.badge}
                </div>
              )}
              <div className="text-3xl text-secondary mb-4">
                <i className={card.icon} />
              </div>
              <h3 className="text-lg font-bold text-light mb-1">
                {card.title}
              </h3>
              <p className="text-light/70 text-sm mb-4">{card.description}</p>
              <div className="mb-4">
                <p className="text-light font-medium text-sm">{card.info}</p>
                <p className={`text-sm ${card.subInfoClass}`}>
                  {card.subInfo}
                </p>
              </div>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <i className={card.btnIcon} /> {card.btnText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 px-4 lg:px-8 max-w-[1200px] mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-center font-bold mb-8 text-balance">
          ONDE <span className="accent-text">ESTAMOS</span>
        </h2>
        <div className="glass rounded-2xl overflow-hidden">
          <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-light">
                <i className="fas fa-map-marker-alt mr-2 text-secondary" />
                Barbearia Ze da Regua
              </h3>
              <p className="text-light/70 text-sm">
                R. Francisco Otaviano, 1889 - Nova Russia
              </p>
              <p className="text-light/70 text-sm">
                Ponta Grossa - PR, 84071-110
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://maps.app.goo.gl/example"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold hover:bg-primary/30 transition-colors"
              >
                <i className="fas fa-road" /> Rotas
              </a>
              <a
                href="https://wa.me/5542984136341?text=Gostaria%20de%20informacoes%20sobre%20a%20localizacao."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold hover:bg-green-500/30 transition-colors"
              >
                <i className="fab fa-whatsapp" /> Pedir Informacoes
              </a>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319.4298445750794!2d-50.17384833098655!3d-25.070153243249496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e8190aacc58919%3A0x5636c199bf31fa06!2sBarbearia%20NOGUEIRA!5e0!3m2!1spt-BR!2sbr!4v1742341316983!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localizacao da Barbearia Ze da Regua"
          />
        </div>
      </section>

      {/* Business Hours */}
      <section className="pb-16 px-4 lg:px-8 max-w-[1200px] mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-center font-bold mb-8 text-balance">
          HORARIO DE{" "}
          <span className="accent-text">FUNCIONAMENTO</span>
        </h2>
        <div className="glass rounded-2xl p-6 lg:p-8 max-w-2xl mx-auto">
          <div className="flex flex-col gap-4">
            {hours.map((h) => (
              <div
                key={h.day}
                className={`flex items-center justify-between py-3 px-4 rounded-xl ${
                  h.highlight
                    ? "bg-secondary/10 border border-secondary/30"
                    : "bg-white/5"
                }`}
              >
                <span className="text-light font-medium">{h.day}</span>
                <span
                  className={`font-bold ${
                    h.highlight ? "text-secondary" : "text-light"
                  }`}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-2 text-light/70 text-sm">
            <i className="fas fa-info-circle mt-0.5 text-secondary" />
            <p>
              Recomendamos agendar com antecedencia durante os horarios de
              pico
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 px-4 lg:px-8 max-w-[1200px] mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-center font-bold mb-8 text-balance">
          PERGUNTAS <span className="accent-text">FREQUENTES</span>
        </h2>
        <FaqSection />
      </section>
    </>
  )
}
