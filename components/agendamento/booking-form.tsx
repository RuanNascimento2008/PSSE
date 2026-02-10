"use client"

import { useState } from "react"

const serviceCategories = [
  {
    title: "CORTE DE CABELO",
    icon: "fas fa-cut",
    services: [
      { name: "Corte Classico", price: 40, cashback: 5, icon: "fas fa-star" },
      { name: "Corte Degrade", price: 50, cashback: 5, icon: "fas fa-fire" },
      { name: "Corte Social", price: 60, cashback: 7, icon: "fas fa-gem" },
    ],
  },
  {
    title: "BARBA",
    icon: "fas fa-bold",
    services: [
      { name: "Barba Completa", price: 35, cashback: 5, icon: "fas fa-check-circle" },
      { name: "Barba Desenhada", price: 45, cashback: 7, icon: "fas fa-pen-fancy" },
      { name: "Hidratacao de Barba", price: 25, cashback: 5, icon: "fas fa-spa" },
    ],
  },
  {
    title: "TRATAMENTOS PREMIUM",
    icon: "fas fa-crown",
    services: [
      { name: "Limpeza de Pele", price: 50, cashback: 7, icon: "fas fa-pump-soap" },
      { name: "Massagem Relaxante", price: 40, cashback: 5, icon: "fas fa-hand-holding-heart" },
      { name: "Hidratacao Capilar", price: 30, cashback: 5, icon: "fas fa-magic" },
    ],
  },
  {
    title: "PACOTES ESPECIAIS",
    icon: "fas fa-gift",
    services: [
      { name: "Corte + Barba", price: 70, cashback: 10, icon: "fas fa-plus", featured: true },
      { name: "Pacote Completo", price: 90, cashback: 10, icon: "fas fa-plus-circle" },
      { name: "Pacote Premium", price: 120, cashback: 15, icon: "fas fa-star" },
    ],
  },
]

const barbers = [
  { name: "Ze", specialty: "Especialista em Cortes Classicos", rating: 4.8, image: "https://placehold.co/120x120/0a6fe2/ffffff?text=Ze" },
  { name: "Dudu", specialty: "Especialista em Barba", rating: 4.9, image: "https://placehold.co/120x120/084bb0/ffffff?text=Dudu" },
  { name: "Leo", specialty: "Tratamentos Premium", rating: 4.2, image: "https://placehold.co/120x120/0a6fe2/ffffff?text=Leo" },
  { name: "Polvilho", specialty: "Cortes Modernos e Colorizacao", rating: 4.9, image: "https://placehold.co/120x120/084bb0/ffffff?text=Polvilho" },
]

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
]

const steps = [
  { number: 1, label: "Servico" },
  { number: 2, label: "Barbeiro" },
  { number: 3, label: "Data & Hora" },
  { number: 4, label: "Confirmacao" },
]

export function BookingForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedService, setSelectedService] = useState<{
    name: string
    price: number
    cashback: number
  } | null>(null)
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const canNext = () => {
    switch (currentStep) {
      case 0:
        return selectedService !== null
      case 1:
        return selectedBarber !== null
      case 2:
        return selectedDate !== "" && selectedTime !== null
      case 3:
        return formData.nome && formData.telefone && formData.email
      default:
        return false
    }
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <div className="text-5xl text-secondary mb-6">
          <i className="fas fa-check-circle" />
        </div>
        <h2 className="font-display text-2xl font-bold mb-4 text-light">
          Agendamento Realizado!
        </h2>
        <p className="text-light/80 mb-2">
          {selectedService?.name} com {selectedBarber}
        </p>
        <p className="text-light/80 mb-2">
          {selectedDate} as {selectedTime}
        </p>
        <p className="text-secondary font-semibold mb-6">
          Cashback de R${" "}
          {((selectedService?.price || 0) * ((selectedService?.cashback || 0) / 100)).toFixed(2)}
        </p>
        <p className="text-light/60 text-sm">
          Em breve voce recebera uma confirmacao por e-mail.
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Steps indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {steps.map((step, i) => (
          <div key={step.number} className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                i < currentStep
                  ? "bg-secondary text-dark"
                  : i === currentStep
                  ? "bg-primary text-white"
                  : "bg-white/10 text-light/50"
              }`}
            >
              {i < currentStep ? (
                <i className="fas fa-check" />
              ) : (
                step.number
              )}
            </div>
            <span
              className={`hidden sm:inline text-sm ${
                i === currentStep ? "text-light font-semibold" : "text-light/50"
              }`}
            >
              {step.label}
            </span>
            {i < steps.length - 1 && (
              <div
                className={`w-8 h-0.5 ${
                  i < currentStep ? "bg-secondary" : "bg-white/10"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-6 lg:p-8">
        {/* Step 1: Service selection */}
        {currentStep === 0 && (
          <div>
            <h2 className="font-display text-xl font-bold text-center mb-2 text-light">
              Selecione o Servico
            </h2>
            <p className="text-center text-light/70 mb-8 text-sm">
              Escolha abaixo o servico desejado e aproveite nosso cashback
              especial!
            </p>
            {serviceCategories.map((category) => (
              <div key={category.title} className="mb-8">
                <h3 className="font-bold text-light mb-4">
                  <i className={`${category.icon} mr-2 text-secondary`} />
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service) => (
                    <button
                      key={service.name}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                        selectedService?.name === service.name
                          ? "border-secondary bg-secondary/10 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                          : "border-white/10 bg-white/5 hover:-translate-y-1 hover:shadow-lg"
                      } ${service.featured ? "animate-pulse-glow" : ""}`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white">
                          <i className={service.icon} />
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                            selectedService?.name === service.name
                              ? "bg-secondary border-secondary text-dark"
                              : "border-white/20"
                          }`}
                        >
                          {selectedService?.name === service.name && (
                            <i className="fas fa-check text-xs" />
                          )}
                        </div>
                      </div>
                      <h4 className="font-bold text-light mb-1 text-sm">
                        {service.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-bold text-light">
                          R$ {service.price},00
                        </span>
                        <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full font-semibold">
                          +{service.cashback}% cashback
                        </span>
                      </div>
                      {service.featured && (
                        <div className="absolute top-2 right-2 bg-secondary text-dark px-2 py-0.5 rounded-full text-xs font-bold">
                          Recomendado
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 2: Barber selection */}
        {currentStep === 1 && (
          <div>
            <h2 className="font-display text-xl font-bold text-center mb-2 text-light">
              Escolha o Barbeiro
            </h2>
            <p className="text-center text-light/70 mb-8 text-sm">
              Selecione o profissional preferido para seu atendimento
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {barbers.map((barber) => (
                <button
                  key={barber.name}
                  type="button"
                  onClick={() => setSelectedBarber(barber.name)}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    selectedBarber === barber.name
                      ? "border-secondary bg-secondary/10"
                      : "border-white/10 bg-white/5 hover:-translate-y-1"
                  }`}
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                    <img
                      src={barber.image}
                      alt={barber.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-light">{barber.name}</h3>
                  <p className="text-light/70 text-xs mt-1">
                    {barber.specialty}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <i className="fas fa-star text-secondary text-xs" />
                    <span className="text-light/80 text-sm">{barber.rating}</span>
                  </div>
                  <div className="mt-2 text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded-full inline-block">
                    Disponivel
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Date & Time */}
        {currentStep === 2 && (
          <div>
            <h2 className="font-display text-xl font-bold text-center mb-2 text-light">
              Escolha Data e Horario
            </h2>
            <p className="text-center text-light/70 mb-8 text-sm">
              Selecione o melhor dia e horario para seu atendimento
            </p>
            <div className="mb-8">
              <label htmlFor="date" className="block text-light font-semibold mb-2">
                Data
              </label>
              <input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/5 border-2 border-white/10 text-light focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-light font-semibold mb-2">
                Horario
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`p-3 rounded-lg border-2 text-center text-sm font-medium transition-all ${
                      selectedTime === slot
                        ? "bg-primary border-primary text-white scale-105"
                        : "border-white/10 bg-white/5 text-light hover:bg-primary/20"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 3 && (
          <div>
            <h2 className="font-display text-xl font-bold text-center mb-2 text-light">
              Confirme seu Agendamento
            </h2>
            <p className="text-center text-light/70 mb-8 text-sm">
              Preencha seus dados e confirme
            </p>

            <div className="glass rounded-xl p-4 mb-6">
              <h3 className="text-secondary font-semibold text-center mb-3">
                Resumo do Agendamento
              </h3>
              <div className="flex flex-col gap-2 text-sm text-light/80">
                <p>
                  <strong className="text-light">Servico:</strong>{" "}
                  {selectedService?.name}
                </p>
                <p>
                  <strong className="text-light">Barbeiro:</strong>{" "}
                  {selectedBarber}
                </p>
                <p>
                  <strong className="text-light">Data:</strong> {selectedDate}
                </p>
                <p>
                  <strong className="text-light">Horario:</strong>{" "}
                  {selectedTime}
                </p>
                <p>
                  <strong className="text-light">Valor:</strong> R${" "}
                  {selectedService?.price},00
                </p>
                <p className="text-secondary font-semibold">
                  Cashback: R${" "}
                  {(
                    (selectedService?.price || 0) *
                    ((selectedService?.cashback || 0) / 100)
                  ).toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="nome" className="block text-light font-semibold mb-2 text-sm">
                  Nome Completo
                </label>
                <input
                  id="nome"
                  type="text"
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  placeholder="Seu nome completo"
                  className="w-full p-3 rounded-xl bg-white/5 border-2 border-white/10 text-light placeholder:text-light/30 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-light font-semibold mb-2 text-sm">
                  Telefone
                </label>
                <input
                  id="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) =>
                    setFormData({ ...formData, telefone: e.target.value })
                  }
                  placeholder="(42) 99999-9999"
                  className="w-full p-3 rounded-xl bg-white/5 border-2 border-white/10 text-light placeholder:text-light/30 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-light font-semibold mb-2 text-sm">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="seu@email.com"
                  className="w-full p-3 rounded-xl bg-white/5 border-2 border-white/10 text-light placeholder:text-light/30 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/10 text-light font-semibold hover:bg-white/5 transition-all"
            >
              <i className="fas fa-arrow-left" /> Voltar
            </button>
          ) : (
            <div />
          )}
          {currentStep < 3 ? (
            <button
              type="button"
              disabled={!canNext()}
              onClick={() => setCurrentStep(currentStep + 1)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(10,111,226,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              Proximo <i className="fas fa-arrow-right" />
            </button>
          ) : (
            <button
              type="button"
              disabled={!canNext()}
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-yellow-500 text-dark font-bold hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(212,175,55,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              <i className="fas fa-check" /> Confirmar Agendamento
            </button>
          )}
        </div>
      </div>
    </>
  )
}
