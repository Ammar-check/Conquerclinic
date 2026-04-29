import React from "react";

const LongevityCard = ({ data }) => {
  if (!data) return null;

  const {
    title,
    subtitle,
    note,
    label,
    features,
    description,
    button,
    footer,
    bgVariant,
  } = data;

  return (
    <div
      style={{ background: bgVariant }}
      className="w-full max-w-[420px] mx-auto rounded-2xl p-6 md:p-8 flex flex-col gap-4"
    >
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-gray-700">{subtitle}</p>

      {/* Note */}
      <p className="text-xs md:text-sm text-gray-500">{note}</p>

      {/* Label */}
      <span className="font-medium mt-2">{label}</span>

      {/* Features (Mapped ✅) */}
      <ul className="flex flex-col gap-2">
        {features?.map((item, index) => (
          <li key={index} className="text-sm md:text-base flex items-start gap-2">
            <span className="mt-1 w-1.5 h-1.5 bg-black rounded-full"></span>
            {item}
          </li>
        ))}
      </ul>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-700">{description}</p>

      {/* Button */}
      <button
        style={{
          background: button?.variant,
          color: button?.textColor,
        }}
        className="mt-3 py-3 px-4 rounded-full text-sm md:text-base w-full"
      >
        {button?.text}
      </button>

      {/* Footer */}
      <span className="text-xs text-gray-500 text-center">{footer}</span>
    </div>
  );
};

export default LongevityCard;