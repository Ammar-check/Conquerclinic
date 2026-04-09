"use client";

import React from "react";

const Button = ({
                    label,
                    variant = "primary",
                    onClick,
                    className = "",
                    type = "button",
                }) => {
    const getVariantClass = () => {
        switch (variant) {
            case "outline":
                return "btn btn-outline-light";
            case "light":
                return "btn btn-light signup-btn";
            case "dark":
                return "btn btn-dark";
            default:
                return "btn btn-primary";
        }
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${getVariantClass()} btn-sm px-3 text-uppercase ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;