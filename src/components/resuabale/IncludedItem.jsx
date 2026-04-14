const IncludedItem = ({ text }) => {
    return (
        <li className="pricing-included__item d-flex align-items-center gap-2">
            {/* Dash bullet matching Figma */}
            <span className="pricing-included__bullet" aria-hidden="true">—</span>
            <span className="pricing-included__text">{text}</span>
        </li>
    );
};

export default IncludedItem;