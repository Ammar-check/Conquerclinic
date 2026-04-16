const IncludedCard = ({ iconId, title, description, icons }) => {
    return (
        <div className="included-card">
            {/* Gold circle icon badge */}
            <div className="included-card__icon" aria-hidden="true">
                {icons[iconId]}
            </div>

            {/* Title */}
            <h3 className="included-card__title">{title}</h3>

            {/* Description */}
            <p className="included-card__desc">{description}</p>
        </div>
    );
};

export default IncludedCard;