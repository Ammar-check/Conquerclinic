export default function FeatureCard({ title, buttonLabel, image }) {
  return (
    <article
      className="feature-card"
      style={{ backgroundImage: `url(${image})` }}
      role="group"
      aria-label={title}
    >
      <div className="feature-card-overlay" />
      <div className="feature-card-content">
        <h3 className="feature-card-title">{title}</h3>
        <button type="button" className="feature-card-button">
          {buttonLabel}
        </button>
      </div>
    </article>
  );
}
