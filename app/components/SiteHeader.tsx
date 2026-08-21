export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Gestão de Benefícios by Hirayama — início">
        <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
        <span className="brand-copy">
          <span className="brand-name"><strong>Gestão</strong> de Benefícios</span>
          <small className="brand-signature">by Hirayama</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="Navegação principal">
        <a href="/categorias">Categorias</a>
        <a href="/sobre-o-metodo">Nosso método</a>
        <a href="/para-quem-e">Para quem é</a>
      </nav>
      <a className="button button-small desktop-cta" href="/diagnostico">Diagnóstico gratuito</a>
      <details className="mobile-menu">
        <summary aria-label="Abrir menu"><span /><span /><span /></summary>
        <nav>
          <a href="/categorias">Categorias</a>
          <a href="/sobre-o-metodo">Nosso método</a>
          <a href="/para-quem-e">Para quem é</a>
          <a href="/diagnostico">Diagnóstico gratuito</a>
        </nav>
      </details>
    </header>
  );
}
