import Footer from "./footer";
import Navbar from "./navbar";

function TrustNSafety() {
  return (
    <div>
    {/* BreadCrumb Starts */}  
    <section className="breadcrumb-main pb-20 pt-14" style={{backgroundImage: 'url(images/bg/bg1.jpg)'}}>
      <div className="section-shape section-shape1 top-inherit bottom-0" style={{backgroundImage: 'url(images/shape8.png)'}} />
      <div className="breadcrumb-outer">
        <div className="container">
          <div className="breadcrumb-content text-center">
            <h1 className="mb-3">Trust N Safety</h1>
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
        <h1>Travellers</h1>
        <h4>Stay safely</h4>
        <p>At RetvensHotels.com, we strive to help everyone experience the world safely. We have many processes in place to protect our guests, and to empower you to take control of your safety while you travel. Visit our traveller resource page to learn more about making your future stays go smoothly.</p>

        <h1>Partners</h1>
        <h4>Host safely</h4>
        <p>Bringing peace of mind to our RetvensHotels.com Partners is a top priority. We help hosts feel confident about welcoming guests, and have processes in place to protect both you and your property. You can learn more about how to stay safe while hosting on our Partner resource page.</p>

        <h1>Our values and guidelines</h1>
        <p>At RetvensHotels.com, we adhere to a set of values, standards and guidelines intended to protect our partners, customers and employees.</p>

      </div>

      <Footer />

      {/* Back to top ends */}
    </div>
  );
}

export default TrustNSafety;
