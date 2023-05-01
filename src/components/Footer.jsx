import { Link } from "react-router-dom";
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row align-item-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
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
      <footer className="py-4">
        <div className="continer-xl">
          <div className="row">
            <div className="col-4 padding-left">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white fs-6">
                  Hno: 277 Near Vill chopal, Sonipath, Haryana <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel: +91 9876545678"
                  className="mt-4 d-block mb-1 text-white"
                >
                  +91 9876545678
                </a>
                <a
                  href="mailto: havdeepdahiya@gmail.com"
                  className="mt-2 d-block mb-3 text-white"
                >
                  havdeepdahiya@gmail.com
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
      <footer className="py-4">
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