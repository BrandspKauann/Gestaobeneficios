import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Gestão Benefícios - início">
        <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
        <span><strong>gestão</strong>benefícios</span>
      </Link>
      <nav className="main-nav" aria-label="Navegação principal">
        <Link href="/categorias">Categorias</Link>
        <Link href="/sobre-o-metodo">Nosso método</Link>
        <Link href="/para-quem-e">Para quem é</Link>
      </nav>
      <Link className="button button-small desktop-cta" href="/diagnostico">Fazer diagnóstico <span>↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="Abrir menu"><span /><span /><span /></summary>
        <nav>
          <Link href="/categorias">Categorias</Link>
          <Link href="/sobre-o-metodo">Nosso método</Link>
          <Link href="/para-quem-e">Para quem é</Link>
          <Link href="/diagnostico">Fazer diagnóstico</Link>
        </nav>
      </details>
    </header>
  );
}
