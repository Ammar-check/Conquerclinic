import BenefitCard from "@/components/resuabale/BenefitCard";
import benefitsData from "@/data/benefits.json";

export default function Benefits() {
  const { title, cards } = benefitsData;

  return (
    <section className="benefits-section">
      <div className="container benefits-container">
        <h2 className="benefits-title">{title}</h2>

        <div className="benefits-grid" role="list" aria-label="Benefits">
          {cards.map((card) => (
            <div key={card.eyebrow} className="benefits-item" role="listitem">
              <BenefitCard
                eyebrow={card.eyebrow}
                title={card.title}
                buttonLabel={card.buttonLabel}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
