export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
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
      </div>
      <div className="footer-bottom"><span>© 2026 Gestão Benefícios · Ecossistema Hirayama</span><span>Conteúdo informativo. A recomendação depende de diagnóstico individual.</span></div>
    </footer>
  );
}
