import Link from "next/link"
import { StatsCounter } from "@/components/barbeiros/stats-counter"

const barbers = [
  {
    name: "Jose Silva",
    nickname: "Ze",
    rating: 4.8,
    specialty: "Especialista em Cortes Classicos e Degrade",
    experience: "8 anos de experiencia",
    skills: ["Corte Degrade", "Navalha", "Estilo Classico"],
    bio: "Ze e nosso fundador e mestre barbeiro com mais de 8 anos de experiencia. Especialista em cortes modernos e tradicionais, sempre buscando a perfeicao em cada detalhe.",
    image: "https://placehold.co/400x500/0a6fe2/ffffff?text=Ze",
    featured: true,
  },
  {
    name: "Eduardo Santos",
    nickname: "Dudu",
    rating: 4.9,
    specialty: "Especialista em Barba e Estilos Modernos",
    experience: "6 anos de experiencia",
    skills: ["Barba", "Design Facial", "Estilo Moderno"],
    bio: "Dudu e nosso expert em barbas e estilos modernos. Com tecnicas inovadoras e atencao aos detalhes, ele cria verdadeiras obras de arte em cada cliente.",
    image: "https://placehold.co/400x500/084bb0/ffffff?text=Dudu",
    featured: false,
  },
  {
    name: "Leonardo Oliveira",
    nickname: "Leo",
    rating: 4.2,
    specialty: "Especialista em Tratamentos Premium",
    experience: "5 anos de experiencia",
    skills: ["Hidratacao", "Limpeza Facial", "Massagem"],
    bio: "Leo e nosso especialista em tratamentos premium. Com tecnicas de relaxamento e cuidados especiais, ele oferece uma experiencia unica de bem-estar e rejuvenescimento.",
    image: "https://placehold.co/400x500/0a6fe2/ffffff?text=Leo",
    featured: false,
  },
  {
    name: "Luis Eduardo",
    nickname: "Polvilho",
    rating: 4.9,
    specialty: "Especialista em Cortes Modernos e Colorizacao",
    experience: "7 anos de experiencia",
    skills: ["Cortes Modernos", "Colorizacao", "Visagismo"],
    bio: "Polvilho e nosso especialista em tendencias e cortes modernos. Com formacao internacional e expertise em colorizacao, ele traz as ultimas tendencias mundiais para nossa barbearia.",
    image: "https://placehold.co/400x500/084bb0/ffffff?text=Polvilho",
    featured: false,
  },
]

const stats = [
  { icon: "fas fa-scissors", count: 3200, label: "Cortes Realizados" },
  { icon: "fas fa-smile", count: 99, label: "Clientes Satisfeitos" },
  { icon: "fas fa-award", count: 18, label: "Premios Conquistados" },
  { icon: "fas fa-clock", count: 26, label: "Anos de Experiencia" },
]

function renderStars(rating: number) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <i key={`full-${i}`} className="fas fa-star text-secondary" />
    )
  }
  if (hasHalf) {
    stars.push(
      <i key="half" className="fas fa-star-half-alt text-secondary" />
    )
  }
  const empty = 5 - fullStars - (hasHalf ? 1 : 0)
  for (let i = 0; i < empty; i++) {
    stars.push(
      <i key={`empty-${i}`} className="far fa-star text-secondary" />
    )
  }
  return stars
}

export default function BarbeirosPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-4 lg:px-8 max-w-[1200px] mx-auto text-center">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
          NOSSOS <span className="accent-text">ESPECIALISTAS</span>
        </h1>
        <p className="text-lg text-light/90 max-w-2xl mx-auto">
          Conheca nossa equipe de mestres barbeiros, profissionais qualificados
          e apaixonados por transformar seu visual.
        </p>
      </section>

      <section className="pb-20 px-4 lg:px-8 max-w-[1200px] mx-auto flex flex-col gap-8">
        {barbers.map((barber) => (
          <div
            key={barber.nickname}
            className={`glass rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center ${
              barber.featured ? "border-2 border-secondary" : ""
            }`}
          >
            <div className="relative w-40 h-40 md:w-48 md:h-56 rounded-2xl overflow-hidden shrink-0">
              <img
                src={barber.image}
                alt={barber.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="flex gap-4">
                  <a href="#" className="text-white text-xl hover:text-secondary transition-colors" aria-label="Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" className="text-white text-xl hover:text-secondary transition-colors" aria-label="Facebook">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#" className="text-white text-xl hover:text-secondary transition-colors" aria-label="WhatsApp">
                    <i className="fab fa-whatsapp" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-light">{barber.name}</h3>
              <p className="text-secondary font-semibold mb-2">
                &quot;{barber.nickname}&quot;
              </p>
              <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                {renderStars(barber.rating)}
                <span className="ml-2 text-light/80">{barber.rating}</span>
              </div>
              <p className="text-light/90 font-medium mb-1">
                {barber.specialty}
              </p>
              <p className="text-light/60 text-sm mb-3">
                {barber.experience}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                {barber.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-light/80 text-sm mb-4">{barber.bio}</p>
              <Link
                href="/agendamento"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(10,111,226,0.6)] transition-all"
              >
                Agendar com {barber.nickname}
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="py-20 px-4 lg:px-8 max-w-[1200px] mx-auto">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-12 text-balance">
          NOSSA <span className="accent-text">EQUIPE</span> EM NUMEROS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl text-secondary mb-4">
                <i className={stat.icon} />
              </div>
              <StatsCounter target={stat.count} />
              <div className="text-light/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-4 lg:mx-8 mb-20 max-w-[1200px] lg:mx-auto">
        <div className="text-center py-20 px-8 rounded-[20px] bg-gradient-to-br from-primary/10 to-secondary/10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-light text-balance">
            PRONTO PARA UM ATENDIMENTO EXCLUSIVO?
          </h2>
          <p className="text-lg text-light/90 mb-8">
            Agende agora com nossos especialistas e ganhe{" "}
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
