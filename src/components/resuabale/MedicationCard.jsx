// src/components/sections/Pricing/MedicationCard.jsx

const MedicationCard = ({ name, description, image, options }) => {
    return (
        <div className="med-card">
            {/* Header */}
            <div className="med-card__header">
                <h3 className="med-card__name">{name}</h3>
                <p className="med-card__desc">{description}</p>
            </div>

            {/* Product image */}
            <div className="med-card__img-wrap">
                <img src={image.src} alt={image.alt} className="med-card__img" />
            </div>

            {/* Pricing rows */}
            <div className="med-card__pricing">
                {options.map((opt, i) => (
                    <div key={i} className="med-card__pricing-row">
                        <span className="med-card__form">{opt.form}</span>
                        <span className="med-card__price">{opt.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MedicationCard;