import footerData from "@/data/footer.json";

export default function Footer() {
  const { promo, columns, socials, legalLinks, copyright } = footerData;

  return (
    <footer className="site-footer py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <div className="footer-promo-card">
              <img src={promo.image} alt={promo.alt} className="img-fluid w-100 h-100 object-fit-cover" />
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="row g-4">
              {columns.map((column) => (
                <div key={column.title} className="col-12 col-md-4">
                  <h6 className="footer-title mb-3">{column.title}</h6>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="footer-link">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-5 pt-4">
          <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
            {socials.map((social) => (
              <a key={social} href="#" className="footer-social">
                {social}
              </a>
            ))}
          </div>

          <div className="d-flex flex-wrap gap-3 footer-legal mb-3">
            {legalLinks.map((legalLink) => (
              <a key={legalLink} href="#" className="footer-legal-link">
                {legalLink}
              </a>
            ))}
          </div>

          <p className="footer-copy mb-0">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
