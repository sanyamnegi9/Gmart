import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      {/* News Letter */}
      <footer className="py-2">
        <div className="container-xl">
          <div className="row align-item-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletters</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Links */}
      <footer className="py-2 q-links">
        <div className="continer-xxl">
          <div className="row fit-width">
            <div className="col-4 padding-left">
              <h4 className="text-white mx-1">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white m-1">
                  H.No: 13, Amar Nath Building,
                  <br />
                  Bhagirath Palace, Delhi
                  <br />
                  PinCode: 110006
                </address>
                <a
                  href="tel: +91 9876545678"
                  className="m-1 d-block text-white"
                >
                  +91 9876545678
                </a>
                <a
                  href="mailto: rixaro4713@meidecn.com"
                  className="m-1 d-block text-white"
                >
                  rixaro4713@meidecn.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 m-1">
                  <a className="text-white" href="youtube.com">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a className="text-white" href="github.com">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="linkedin.com">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="instagram.com">
                    <BsInstagram className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mx-1">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="privacy-policy" className="text-white m-1">
                  Privacy Policy
                </Link>
                <Link to="refund-policy" className="text-white m-1">
                  Refund Policy
                </Link>
                <Link to="shipping-policy" className="text-white m-1">
                  Shipping Policy
                </Link>
                <Link
                  to="terms-and-conditions"
                  className="text-white m-1"
                >
                  Term & Conditions
                </Link>
                <Link to="blogs" className="text-white m-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mx-1">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white m-1">About Us</Link>
                <Link className="text-white m-1">FAQ</Link>
                <Link to="contact" className="text-white m-1">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mx-1">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white m-1">Laptops</Link>
                <Link className="text-white m-1">Headphones</Link>
                <Link className="text-white m-1">Tablets</Link>
                <Link className="text-white m-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copy Rights */}
      <footer>
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}: Power by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer