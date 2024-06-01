import Link from "next/link";

const Footer7 = ({ dark }) => {
  return (
    <footer className="main-footer seven-foot footer-five pt-100">
      <div className="container container-1290 pb-40">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="footer-widget footer-about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-25">
                <Link href="/">
                  <img
                    src={
                      dark
                        ? "assets/images/logos/footer-logo-white.png"
                        : "assets/images/logos/finallogo.png"
                    }
                    alt="Logo"
                  />
                </Link>
              </div>
              <p>
              Unleash Your Brand's Potential with ThinkAlt Creative & Marketing Agency
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget footer-info wow fadeInUp delay-0-4s">
              <ul className="list-style-two">
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com">support@thinkaltmedia.com</a>
                </li>
                <li>
                  <i className="far fa-phone" />{" "}
                  <a href="callto:+000(123)45688">+91-9999659129</a>
                </li>
                <li>
                  <i className="far fa-clock" />{" "}
                  <span>Monday - Friday, 10am - 5pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget newsletter-widget wow fadeInUp delay-0-6s">
              <form className="footer-newsletter" action="#">
                <input type="email" placeholder="Email Address" required />
                <button type="submit">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
              <div className="policy">
                <input id="privacy-policy" type="checkbox" />
                <label htmlFor="privacy-policy">
                  I agree to the <Link href="/about">Privacy Policy</Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-copyright-text wow fadeInUp delay-0-2s">
                <p>
                  Copyright @2024, <Link href="/">ThinkAltMedia</Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-menu text-lg-end wow fadeInRight delay-0-2s">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="services">Services</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer7;
