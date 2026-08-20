import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ewertonhirayama",
    className: "floating-linkedin",
    Icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/CorretoraHirayama",
    className: "floating-facebook",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ewertonhirayamaoficial",
    className: "floating-instagram",
    Icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.link/3gwhbl",
    className: "floating-whatsapp",
    Icon: FaWhatsapp,
  },
];

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand brand-light" href="/">
              <span className="brand-mark brand-mark-light" aria-hidden="true"><i /><i /><i /></span>
              <span><strong>gestão</strong>benefícios</span>
            </a>
            <p>Diagnóstico antes de produto.<br />Decisões sem achismo.</p>
          </div>
          <div className="footer-links">
            <div><b>Explore</b><a href="/categorias">Categorias</a><a href="/diagnostico">Diagnóstico</a><a href="/para-quem-e">Para quem é</a></div>
            <div><b>Método</b><a href="/sobre-o-metodo">Como analisamos</a><a href="https://wa.link/3gwhbl" target="_blank" rel="noreferrer">Falar com especialista</a></div>
          </div>
          <div className="footer-contact">
            <b>Entre em contato</b>
            <address>
              <strong>São Paulo / Bela Vista / SP</strong>
              <span>Referência comercial para atendimento corporativo.</span>
              <span>Matriz legal: Biritiba Mirim / Centro / SP</span>
            </address>
            <a href="mailto:contato@hirayamacorretora.com.br">contato@hirayamacorretora.com.br</a>
            <div className="footer-phones">
              <a href="tel:+551146922643">(11) 4692-2643</a>
              <span aria-hidden="true">/</span>
              <a href="https://wa.link/3gwhbl" target="_blank" rel="noreferrer">(11) 9-3802-0789</a>
            </div>
          </div>
          <div className="footer-social-links">
            <b>Siga a Hirayama</b>
            <a href="https://www.linkedin.com/in/ewertonhirayama" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/CorretoraHirayama" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/ewertonhirayamaoficial" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Gestão Benefícios · Ecossistema Hirayama</span>
          <span>Conteúdo informativo. A recomendação depende de diagnóstico individual.</span>
          <a href="https://www.hirayamacorretora.com.br/politica-de-privacidade/" target="_blank" rel="noreferrer">Política de privacidade</a>
        </div>
      </footer>

      <nav className="floating-socials" aria-label="Redes sociais da Hirayama">
        {socialLinks.map(({ label, href, className, Icon }) => (
          <a
            className={className}
            data-label={label}
            href={href}
            key={label}
            target="_blank"
            rel="noreferrer"
            aria-label={label === "WhatsApp" ? "Falar com a Hirayama pelo WhatsApp" : `Abrir ${label} da Hirayama`}
          >
            <Icon aria-hidden="true" />
          </a>
        ))}
      </nav>
    </>
  );
}
