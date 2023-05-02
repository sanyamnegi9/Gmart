import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const FooterLinks = () => {
  return (
    <>
      <footer className="py-4 q-links">
        <div className="continer-xl">
          <div className="row">
            <div className="col-4 padding-left">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white fs-6">
                  H.No: 13, Amar Nath Building, Bhagirath Palace, Delhi<br />
                  PinCode: 110006
                </address>
                <a
                  href="tel: +91 9876545678"
                  className="mt-4 d-block mb-1 text-white"
                >
                  +91 9876545678
                </a>
                <a
                  href="mailto: rixaro4713@meidecn.com"
                  className="mt-2 d-block mb-3 text-white"
                >
                  rixaro4713@meidecn.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
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
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Privacy Policy</Link>
                <Link className="text-white mb-1 py-2">Refund Policy</Link>
                <Link className="text-white mb-1 py-2">Shipping Policy</Link>
                <Link className="text-white mb-1 py-2">Term & Conditions</Link>
                <Link className="text-white mb-1 py-2">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">About Us</Link>
                <Link className="text-white mb-1 py-2">FAQ</Link>
                <Link className="text-white mb-1 py-2">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Laptops</Link>
                <Link className="text-white mb-1 py-2">Headphones</Link>
                <Link className="text-white mb-1 py-2">Tablets</Link>
                <Link className="text-white mb-1 py-2">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterLinks;
