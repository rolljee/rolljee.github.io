export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="mb-4">
      {eyebrow ? <div className="eyebrow mb-1">{eyebrow}</div> : null}
      <h1 className="section-title h2 mb-1">{title}</h1>
      {subtitle ? <p className="section-subtitle mb-0">{subtitle}</p> : null}
    </header>
  );
}
