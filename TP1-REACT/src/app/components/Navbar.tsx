'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" href="/">Loja</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">Produtos</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${pathname === '/carrinho' ? 'active' : ''}`} href="/carrinho">Carrinho</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
