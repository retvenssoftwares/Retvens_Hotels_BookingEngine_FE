import React from "react";
import Footer from "./footer";

const RefundPolicy = () => {
  return (
    <>
      <div>
        <section
          className="breadcrumb-main pb-20 pt-14"
          style={{ backgroundImage: "url(images/bg/bg1.jpg)" }}
        >
          <div
            className="section-shape section-shape1 top-inherit bottom-0"
            style={{ backgroundImage: "url(images/shape8.png)" }}
          />
          <div className="breadcrumb-outer">
            <div className="container">
              <div className="breadcrumb-content text-center">
                <h1 className="mb-3">Refund Policy</h1>
                <nav aria-label="breadcrumb" className="d-block">
                  {/* <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
              </ul> */}
                </nav>
              </div>
            </div>
          </div>
          <div className="dot-overlay" />
        </section>
              <div 
      style={{padding: "25px 50px"}}>
        <div class="uitk-spacing uitk-spacing-margin-blockstart-three">
          <div>
            <h4>
              Refund
            </h4>
          </div>
        </div>
        <div class="uitk-spacing uitk-spacing-margin-blockstart-three">
          <div>
            <span class="uitk-text uitk-type-400 uitk-text-white-space-pre-line uitk-text-default-theme">
              Any refunds will be transferred back to you to the payment method
              you used to make the original booking. Such refunds will be made
              by the party that took your original payment. We do not have
              visibility of a Travel Provider’s refund process. Our fees are not
              refundable unless this is stated otherwise during the booking
              process.
            </span>
          </div>
        </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default RefundPolicy;
