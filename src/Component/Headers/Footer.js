import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-item">
              <h3>BE THE FIRST TO KNOW</h3>
              <p>Sign up for updates from metta muse.</p>
              <form>
                <div className="input-group mb-3 mr-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your e-mail..."
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-item">
              <h3>CONTACT US</h3>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
              <h3>CURRENCY</h3>
              <p>
                Transactions will be completed in Euros and currency reference
                is available on hover.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="footer-item">
              <h2>metta muse</h2>
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliances Docs</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-item">
              <h2>QUICK LINKS</h2>
              <p>Orders & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Refund & Returns</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-item">
              <h2>FOLLOW US</h2>
              <div className="social-icons">
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faPhoneAlt} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <h3>metta muse ACCEPTS</h3>
              <div className="payment-icons">
                {/* Include your payment icons here */}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center text-white">
          Copyright © 2023 mettamuse. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
