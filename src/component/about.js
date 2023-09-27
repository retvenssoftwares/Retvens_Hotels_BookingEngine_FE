import Footer from "./footer"
import Navbar from "./navbar"

function About() {
    return (
      <div>
      {/* BreadCrumb Starts */}  
      <section className="breadcrumb-main pb-20 pt-14" style={{backgroundImage: 'url(images/bg/bg1.jpg)'}}>
        <div className="section-shape section-shape1 top-inherit bottom-0" style={{backgroundImage: 'url(images/shape8.png)'}} />
        <div className="breadcrumb-outer">
          <div className="container">
            <div className="breadcrumb-content text-center">
              <h1 className="mb-3">About Us</h1>
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
      {/* BreadCrumb Ends */} 
      {/* about-us starts */}
      <section className="about-us pt-6" style={{backgroundImage: 'url(images/background_pattern.png)', backgroundPosition: 'bottom right'}}>
        <div className="container">
          <div className="about-image-box">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-lg-6 ps-4">
                <div className="about-content text-center text-lg-start">
                  <h4 className="theme d-inline-block mb-0">Get To Know Us</h4>
                  <h2 className="border-b mb-2 pb-1">Explore All Tour of the world with us.</h2>
                  <p className="border-b mb-2 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <div className="about-listing">
                    <ul className="d-flex justify-content-between">
                      <li><i className="icon-location-pin theme" /> Tour Guide</li>
                      <li><i className="icon-briefcase theme" /> Friendly Price</li>
                      <li><i className="icon-folder theme" /> Reliable Tour Package</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 pe-4">
                <div className="about-image" style={{animation: 'none', background: 'transparent'}}>
                  <img src="/assets/images/travel.png" alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                {/* Counter */}
                <div className="counter-main w-75 float-start z-index3 position-relative">
                  <div className="counter p-4 pb-0 box-shadow bg-white rounded mt-minus">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="counter-item border-end pe-4">
                          <div className="counter-content">
                            <h2 className="value mb-0 theme">20</h2>
                            <span className="m-0">Years Experiences</span>
                          </div>
                        </div>    
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="counter-item border-end pe-4">
                          <div className="counter-content">
                            <h2 className="value mb-0 theme">530</h2>
                            <span className="m-0">Tour Packages</span>
                          </div>
                        </div>    
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="counter-item border-end pe-4">
                          <div className="counter-content">
                            <h2 className="value mb-0 theme">850</h2>
                            <span className="m-0">Happy Customers</span>
                          </div>
                        </div>    
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="counter-item">
                          <div className="counter-content">
                            <h2 className="value mb-0 theme">320</h2>
                            <span className="m-0">Award Winning</span>
                          </div>
                        </div>    
                      </div>
                    </div>
                  </div> 
                </div>
                {/* End Counter */}
              </div>
            </div>
          </div>
        </div>
        <div className="white-overlay" />
      </section>
      {/* about-us ends */}
      {/* about-us starts */}
      <section className="about-us pb-0">
        <div className="section-shape section-shape1" style={{backgroundImage: 'url(images/shape8.png)'}} />
        <div className="container">
          <div className="section-title mb-6 w-50 mx-auto text-center">
            <h4 className="mb-1 theme1">Core Features</h4>
            <h2 className="mb-1">Find <span className="theme">Travel Perfection</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          {/* why us starts */}
          <div className="why-us">
            <div className="why-us-box">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                  <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                    <div className="why-us-content">
                      <div className="why-us-icon mb-1">
                        <i className="icon-flag theme" />
                      </div>
                      <h4><a href="about.html">Tell Us What You want To Do</a></h4>
                      <p className="mb-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                      <p className="mb-0 theme">100+ Reviews</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                  <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                    <div className="why-us-content">
                      <div className="why-us-icon mb-1">
                        <i className="icon-location-pin theme" />
                      </div>
                      <h4><a href="about.html">Share Your Travel Locations</a></h4>
                      <p className="mb-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                      <p className="mb-0 theme">100+ Reviews</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                  <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                    <div className="why-us-content">
                      <div className="why-us-icon mb-1">
                        <i className="icon-directions theme" />
                      </div>
                      <h4><a href="about.html">Share Your Travel Preference</a></h4>
                      <p className="mb-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                      <p className="mb-0 theme">100+ Reviews</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                  <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                    <div className="why-us-content">
                      <div className="why-us-icon mb-1">
                        <i className="icon-compass theme" />
                      </div>
                      <h4><a href="about.html">Here 100% Trusted Tour Agency</a></h4>
                      <p className="mb-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                      <p className="mb-0 theme">100+ Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* why us ends */}
        </div>
      </section>
      {/* about-us ends */}
      {/* our teams starts */}
      <section className="our-team pb-0 pt-6">
        <div className="container">
          <div className="section-title mb-6 w-75 mx-auto text-center">
            <h4 className="mb-1 theme1">Tour Guides</h4>
            <h2 className="mb-1">Meet Our <span className="theme">Excellent Guides</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>  
          <div className="team-main">
            <div className="row shop-slider">
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="team-list rounded">
                  <div className="team-image">
                    <img src="/assets/images/team/img1.jpg" alt="team" />
                  </div>
                  <div className="team-content text-center p-3 bg-theme">
                    <h4 className="mb-0 white">Salmon Thuir</h4>
                    <p className="mb-0 white">Senior Agent</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="team-list rounded">
                  <div className="team-image">
                    <img src="/assets/images/team/img2.jpg" alt="team" />
                  </div>
                  <div className="team-content text-center p-3 bg-theme">
                    <h4 className="mb-0 white">Horke Pels</h4>
                    <p className="mb-0 white">Head Officer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="team-list rounded">
                  <div className="team-image">
                    <img src="/assets/images/team/img4.jpg" alt="team" />
                  </div>
                  <div className="team-content text-center p-3 bg-theme">
                    <h4 className="mb-0 white">Solden kalos</h4>
                    <p className="mb-0 white">Supervisor</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="team-list rounded">
                  <div className="team-image">
                    <img src="/assets/images/team/img3.jpg" alt="team" />
                  </div>
                  <div className="team-content text-center p-3 bg-theme">
                    <h4 className="mb-0 white">Nelson Bam</h4>
                    <p className="mb-0 white">Quality Assurance</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="team-list rounded">
                  <div className="team-image">
                    <img src="/assets/images/team/img4.jpg" alt="team" />
                  </div>
                  <div className="team-content text-center bg-theme p-3">
                    <h4 className="mb-0 white">Cacics Coold</h4>
                    <p className="mb-0 white">Asst. Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our teams Ends */}
      {/* testomonial start */}
      <section className="testimonial pt-9" style={{backgroundImage: 'url(images/testimonial.png)'}}>
        <div className="container"> 
          <div className="section-title mb-6 text-center w-75 mx-auto">
            <h4 className="mb-1 theme1">Our Testimonails</h4>
            <h2 className="mb-1">Good Reviews By <span className="theme">Clients</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pe-4">
              <div className="testimonial-image">
                <img src="/assets/images/travel2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7 ps-4">
              <div className="row review-slider">
                <div className="col-sm-4 item">
                  <div className="testimonial-item1 rounded">
                    <div className="author-info mt-2 d-flex align-items-center mb-4">
                      <a href="#"><img src="/assets/images/testimonial/img1.jpg" alt="" /></a>
                      <div className="author-title ms-3">
                        <h5 className="m-0 theme">Jared Erondu</h5>
                        <span>Supervisor</span>
                      </div>
                    </div>
                    <div className="details">
                      <p className="m-0"><i className="fa fa-quote-left me-2 fs-1" />Lorem Ipsum is simply dummy text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry's standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 item">
                  <div className="testimonial-item1 rounded">
                    <div className="author-info mt-2 d-flex align-items-center mb-4">
                      <a href="#"><img src="/assets/images/testimonial/img1.jpg" alt="" /></a>
                      <div className="author-title ms-3">
                        <h5 className="m-0 theme">Jared Erondu</h5>
                        <span>Supervisor</span>
                      </div>
                    </div>
                    <div className="details">
                      <p className="m-0"><i className="fa fa-quote-left me-2 fs-1" />Lorem Ipsum is simply dummy text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry's standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial ends */} 
      {/* partner starts */}
      <div className="our-partner pt-0 pb-6">
        <div className="container">
          <div className="partners_inner">
            <ul>
              <li><img src="/assets/images/cl-5.png" alt="" /></li>
              <li><img src="/assets/images/cl-2.png" alt="" /></li>
              <li><img src="/assets/images/cl-3.png" alt="" /></li>
              <li><img src="/assets/images/cl-4.png" alt="" /></li>
              <li><img src="/assets/images/cl-5.png" alt="" /></li>
              <li><img src="/assets/images/cl-3.png" alt="" /></li>
              <li><img src="/assets/images/cl-2.png" alt="" /></li>
              <li><img src="/assets/images/cl-1.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
   
      <Footer/>
    
      <div id="back-to-top">
        <a href="#" />
      </div>
      {/* Back to top ends */}

    </div>
    )
}

export default About