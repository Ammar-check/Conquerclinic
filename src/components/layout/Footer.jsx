import footerData from "@/data/footer.json";
import Image from "next/image";

export default function Footer() {
  const { promo, columns, socials, legalLinks, copyright } = footerData;

  return (
    <footer className="site-footer py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <div className="footer-promo-card">
              <img
                src={promo.image}
                alt={promo.alt}
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="row g-4">
              {/* {columns.map((column) => ( */}
                <div className="col-12 col-md-4">
                  <h6 className="footer-title mb-3">Learn</h6>
                  
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                 
                      <li >
                        <a href="#" className="footer-link">
                          Weight Loss
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Sexual Health
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Testosterone
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Hair Regrowth
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                         Mental Health
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Drug Comparisons
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Drugs & Medications
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          About the Company
                        </a>
                      </li>
                    {/* ))} */}
                  </ul>
                  <h6 className="footer-title mb-3" style={{margin:'20px 0'}}>Tools</h6>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                      <li >
                        <a href="#" className="footer-link">
                          BMI Calculator
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          TDEE Calculator
                        </a>
                      </li>
                  </ul>
                </div>

                
                <div className="col-12 col-md-4">
                  <h6 className="footer-title mb-3">Popular</h6>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                      <li >
                        <a href="#" className="footer-link">
                          Weight Loss Oral Medication Kits
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          GLP-1 Injections
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Sildenafil
                          <br />
                        <span style={{color:'gray'}}>Generic for Viagra ®</span>
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Cialis
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                         Tadalafil
                        </a>
                        <br />
                        <span style={{color:'gray'}}>Generic for Cialis ®</span>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Minoxidil Solution
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Finasteride Pills
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Topical Finasteride
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Sertraline for PE
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Sertraline
                        </a>
                        <br />
                        <span style={{color:'gray'}}>Generic for Zoloft ®</span>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Escitalopram
                        </a>
                        <br />
                        <span style={{color:'gray'}}>Generic for Lexapro ®</span>
                      </li>
                  </ul>
                </div>

                
                <div className="col-12 col-md-4">
                  <h6 className="footer-title mb-3">Hims</h6>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                      <li >
                        <a href="#" className="footer-link">
                          About Us
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Good Health
                        </a>
                        <br />
                        <span style={{color:'gray'}}>(it's our Blog)</span>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          How It Works
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Clinical Excellence
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                         Innovation
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                         Quality & Safety
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Editorial Standards
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          FAQs
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Investors
                        </a>
                      </li>
                      
                  </ul>
                  <h6 className="footer-title mb-3" style={{margin:'20px 0'}}>Careers</h6>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                      <li >
                        <a href="#" className="footer-link">
                          Professionals
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Providers
                        </a>
                      </li>
                  </ul>
                  <h6 className="footer-title mb-3" style={{margin:'20px 0'}}>Connect</h6>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                     <li >
                        <a href="#" className="footer-link">
                          Customer Help Center
                        </a>
                      </li>
                      <li >
                        <a href="#" className="footer-link">
                          Press Center
                        </a>
                      </li>
                  </ul>
                </div>

                
              {/* ))} */}
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-5 pt-4">
          <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
            {socials.map((social) => (
              <a key={social} href="#" className="footer-social">
                <Image
                  key={social.id}
                  src={social.src}
                  alt={social.alt}
                  width={20}
                  height={20}
                />
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
