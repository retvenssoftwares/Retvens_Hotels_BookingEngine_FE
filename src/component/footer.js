import React from "react";
function Footer(){
    return(
        <footer className="pt-4 pb-6" style={{ backgroundImage: 'url(images/background_pattern.png)' }}>
        <div className="section-shape top-0" style={{ backgroundImage: 'url(images/shape8.png)' }} />

        <div className="footer-upper pb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4 pe-4">
                <div className="footer-about">
                  <img src="/assets/images/Retvens-Hotels-Resized.png" alt="" />
                  <p className="mt-3 mb-3 white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio suspendisse leo neque
                    iaculis molestie sagittis maecenas aenean eget molestie sagittis.
                  </p>
                  <ul>
                    <li className="white"><strong>PO Box:</strong> +47-252-254-2542</li>
                    <li className="white"><strong>Location:</strong> Collins Street, sydney, Australia</li>
                    <li className="white"><strong>Email:</strong> info@Travelin.com</li>
                    <li className="white"><strong>Website:</strong> www.Travelin.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 mb-4">
                <div className="footer-links">
                  <h3 className="white">Quick link</h3>
                  <ul>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="about-us.html">Delivery Information</a></li>
                    <li><a href="about-us.html">Privacy Policy</a></li>
                    <li><a href="about-us.html">Terms &amp; Conditions</a></li>
                    <li><a href="about-us.html">Customer Service</a></li>
                    <li><a href="#about-us.html">Return Policy</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="footer-payment">
          <div className="container">
            <div className="row footer-pay align-items-center justify-content-between text-lg-start text-center">
              <div className="col-lg-8 footer-payment-nav mb-4">
                <ul className>
                  <li className="me-2">We Support:</li>
                  <li className="me-2"><i className="fab fa-cc-mastercard fs-4" /></li>
                  <li className="me-2"><i className="fab fa-cc-paypal fs-4" /></li>
                  <li className="me-2"><i className="fab fa-cc-stripe fs-4" /></li>
                  <li className="me-2"><i className="fab fa-cc-visa fs-4" /></li>
                  <li className="me-2"><i className="fab fa-cc-discover fs-4" /></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
              <div className="copyright-text">
                <p className="m-0 white">2023 Retvens. All rights reserved.</p>
              </div>
              <div className="social-links">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="particles-js" /> */}
      </footer>
    );
}
export default Footer