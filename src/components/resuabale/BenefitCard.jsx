export default function BenefitCard({ eyebrow, title, buttonLabel, image }) {
  return (
    <article
      className="benefit-card"
      style={{ backgroundImage: `url(${image})` }}
      role="group"
      aria-label={title}
    >
      <div className="benefit-card-overlay" />
      <div className="benefit-card-content">
        <p className="benefit-card-eyebrow">{eyebrow}</p>
        <h3 className="benefit-card-title">{title}</h3>
        <button type="button" className="benefit-card-button">
          {buttonLabel}
        </button>
      </div>
    </article>
  );
}
