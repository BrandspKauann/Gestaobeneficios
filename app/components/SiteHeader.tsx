export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Gestão Benefícios - início">
        <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
        <span><strong>gestão</strong>benefícios</span>
      </a>
      <nav className="main-nav" aria-label="Navegação principal">
        <a href="/categorias">Categorias</a>
        <a href="/sobre-o-metodo">Nosso método</a>
        <a href="/para-quem-e">Para quem é</a>
      </nav>
      <a className="button button-small desktop-cta" href="/diagnostico">Fazer diagnóstico</a>
      <details className="mobile-menu">
        <summary aria-label="Abrir menu"><span /><span /><span /></summary>
        <nav>
          <a href="/categorias">Categorias</a>
          <a href="/sobre-o-metodo">Nosso método</a>
          <a href="/para-quem-e">Para quem é</a>
          <a href="/diagnostico">Fazer diagnóstico</a>
        </nav>
      </details>
    </header>
  );
}
