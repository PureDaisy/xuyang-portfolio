import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: '关于我' },
    { href: '#projects', label: '作品' },
    { href: '#skills', label: '技术' },
    { href: '#contact', label: '联系我' },
  ];

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="主导航">
        <a href="#top" className="wordmark" aria-label="返回首页">
          XU YANG
        </a>

        <div className="nav-links">
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="menu-button md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? '关闭' : '菜单'}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <div className="mobile-menu-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
