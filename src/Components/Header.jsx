const links = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#skills' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

function Header({ theme, onToggleTheme }) {
  return (
    <nav className="site-nav">
      <a className="brand-mark" href="#top" aria-label="Sooraj S home">
        Sooraj S.
      </a>

      <div className="nav-links">
        {links.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          <span className="theme-toggle-icon" aria-hidden="true">
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.8 8.8 0 1 0 10.2 10.2Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" role="presentation">
                <circle cx="12" cy="12" r="4.5" fill="currentColor" />
                <path
                  d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
        </button>
        <a className="nav-cta" href="#contact">
          Start Project
        </a>
      </div>
    </nav>
  )
}

export default Header
