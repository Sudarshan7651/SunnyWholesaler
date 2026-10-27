function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-title ${align === 'center' ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
