const StatCircle = ({ value, label, accentColor }) => {
    return (
        <div className="stat-circle-wrapper d-flex flex-column align-items-center">
            {/* Circle with layered border rings */}
            <div className="stat-circle" style={{ '--accent': accentColor }}>
                <div className="stat-circle__track" />
                <div className="stat-circle__accent" />
                <div className="stat-circle__inner d-flex align-items-baseline justify-content-center">
                    <span className="stat-circle__value">{value}</span>
                    <span className="stat-circle__percent">%</span>
                </div>
            </div>

            {/* Label below the circle */}
            <p className="stat-circle__label">{label}</p>
        </div>
    );
};

export default StatCircle;