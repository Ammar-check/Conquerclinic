import brandsData from "@/data/brands.json";

export default function Branding() {
  const { logos } = brandsData;
  const rowTop = logos.slice(0, 4);
  const rowBottom = logos.slice(4, 7);

  return (
    <section className="branding-section" aria-label="As seen in">
      <div className="container branding-container">
        <div className="branding-row branding-row--top" role="list">
          {rowTop.map((logo) => (
            <div key={logo.src} className="branding-logo-wrap" role="listitem">
              <img src={logo.src} alt={logo.alt} className="branding-logo" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="branding-row branding-row--bottom" role="list">
          {rowBottom.map((logo) => (
            <div key={logo.src} className="branding-logo-wrap" role="listitem">
              <img src={logo.src} alt={logo.alt} className="branding-logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
