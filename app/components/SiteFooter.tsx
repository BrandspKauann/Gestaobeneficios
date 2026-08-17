import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="brand brand-light" href="/">
            <span className="brand-mark brand-mark-light" aria-hidden="true"><i /><i /><i /></span>
            <span><strong>gestão</strong>benefícios</span>
          </Link>
          <p>Diagnóstico antes de produto.<br />Decisões sem achismo.</p>
        </div>
        <div className="footer-links">
          <div><b>Explore</b><Link href="/categorias">Categorias</Link><Link href="/diagnostico">Diagnóstico</Link><Link href="/para-quem-e">Para quem é</Link></div>
          <div><b>Método</b><Link href="/sobre-o-metodo">Como analisamos</Link><a href="https://wa.link/3gwhbl" target="_blank" rel="noreferrer">Falar com especialista</a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Gestão Benefícios · Ecossistema Hirayama</span><span>Conteúdo informativo. A recomendação depende de diagnóstico individual.</span></div>
    </footer>
  );
}
