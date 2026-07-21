const socials = [
  { label: "GitHub", href: "https://github.com/rolljee" },
  { label: "Kuzzle", href: "https://kuzzle.io" },
];

export default function Footer() {
  return (
    <footer className="app-footer py-4 mt-5">
      <div
        className="container d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2"
        style={{ maxWidth: 960 }}
      >
        <span>© {new Date().getFullYear()} Nicolas “Ricky” Riquelme</span>
        <nav className="d-flex gap-3">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
