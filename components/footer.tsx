import Link from "next/link"

export function Footer() {
  return (
    <footer className="glass-footer px-4 pt-12 pb-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto mb-8">
        <div>
          <h3 className="font-display text-lg font-bold text-secondary mb-4">
            BARBEARIA ZE DA REGUA
          </h3>
          <p className="text-light/80 mb-4">
            Elevando o padrao de cuidados masculinos com tecnologia e tradicao.
          </p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/5542984136341"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-light hover:bg-secondary hover:text-dark transition-all hover:-translate-y-1"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp" />
            </a>
            <a
              href="https://www.instagram.com/duduuzxh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-light hover:bg-secondary hover:text-dark transition-all hover:-translate-y-1"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.tiktok.com/@zedaregua.pg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-light hover:bg-secondary hover:text-dark transition-all hover:-translate-y-1"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-light hover:bg-secondary hover:text-dark transition-all hover:-translate-y-1"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-secondary font-semibold mb-4">Links Rapidos</h4>
          <ul className="flex flex-col gap-2 list-none">
            {[
              { href: "/", label: "Inicio" },
              { href: "/servicos", label: "Servicos" },
              { href: "/barbeiros", label: "Barbeiros" },
              { href: "/agendamento", label: "Agendamento" },
              { href: "/contato", label: "Contato" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-light hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-secondary font-semibold mb-4">Contato</h4>
          <div className="flex flex-col gap-2 text-light/80">
            <p>
              <i className="fas fa-map-marker-alt mr-2" /> R. Francisco
              Otaviano, 1889 - Ponta Grossa, PR
            </p>
            <p>
              <i className="fas fa-phone mr-2" /> (42) 99998-3552
            </p>
            <p>
              <i className="fas fa-envelope mr-2" />{" "}
              contato@barbeariazedaregua.com
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-white/10 text-light/60 text-sm">
        <p>2024 BARBEARIA ZE DA REGUA. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
