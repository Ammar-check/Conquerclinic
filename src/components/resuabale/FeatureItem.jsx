// src/components/sections/MetabolicProtocol/FeatureItem.jsx

const FeatureItem = ({ text }) => {
    return (
        <div className="feature-item d-flex align-items-start gap-2 mb-3">
            {/* Gold checkbox icon */}
            <span className="feature-icon flex-shrink-0" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
              x="3.33"
              y="5"
              width="13.32"
              height="9.16"
              stroke="#C9A55A"
              strokeWidth="1.67"
              fill="none"
          />
          <polyline
              points="5.5,10 8.5,13 14.5,7"
              stroke="#C9A55A"
              strokeWidth="1.67"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
          />
        </svg>
      </span>
            <span className="feature-text">{text}</span>
        </div>
    );
};

export default FeatureItem;