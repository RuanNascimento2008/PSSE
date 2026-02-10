"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Preciso agendar horario com antecedencia?",
    answer:
      "Recomendamos agendar com antecedencia para garantir seu horario preferido, mas tambem atendemos por ordem de chegada, dependendo da disponibilidade.",
  },
  {
    question: "Quais sao as formas de pagamento aceitas?",
    answer:
      "Aceitamos cartao de credito, debito, PIX, dinheiro e transferencia bancaria.",
  },
  {
    question: "Como funciona o sistema de cashback?",
    answer:
      "Voce acumula creditos em cada servico realizado (15% no primeiro agendamento e 5% nos demais), que podem ser utilizados como desconto em futuros servicos.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="glass rounded-2xl overflow-hidden">
          <button
            type="button"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <h3 className="font-bold text-light pr-4">{faq.question}</h3>
            <i
              className={`fas ${
                openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
              } text-secondary transition-transform`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 pb-5 px-5" : "max-h-0"
            }`}
          >
            <p className="text-light/80">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
