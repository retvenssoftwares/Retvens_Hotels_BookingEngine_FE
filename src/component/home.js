import Navbar from "./navbar"
import Select from 'react-select';
import React, { useState } from 'react';
import TopHotel from "./TopFiveHotels";
import Footer from "./footer";

function Home() {
  const options = [
    { value: '1', label: 'Destination' },
    { value: '2', label: 'Argentina' },
    { value: '3', label: 'Belgium' },
    { value: '4', label: 'Canada' },
    { value: '5', label: 'Denmark' },
    // Add more options as needed
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    height:"10%",
    control: (provided) => ({
      ...provided,
      width: '620px', // Set the width as needed
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: '200px', // Set the maximum height as needed
    }),
  };
  return (
    <div>
      {/* <Navbar /> */}

      {/* banner starts */}
      <section className="banner pt-1 pb-0 overflow-hidden" style={{ backgroundImage: 'url(/assetsimages/testimonial.png)' }}>
        <div className="container">
          <div className="banner-in">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4">
                <div className="banner-content text-lg-start text-center">
                  <h4 className="theme mb-0">Explore The World</h4>
                  <h1>Start Planning Your Dream Trip Today!</h1>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore</p>
                  <div class="book-form">
                    <div class="row d-flex align-items-center justify-content-between">
                      <div class="col-lg-12 mb-2">
                        <div class="form-group">
                          <div className="input-box">
                            <Select
                              value={selectedOption}
                              onChange={handleChange}
                              options={options}
                              isSearchable // This enables the search functionality
                              placeholder="Select destination"
                              styles={customStyles}
                            />
                          </div> 
                        </div>
                      </div>
                      {/* <div class="col-lg-6 mb-2">
                        <div class="form-group">
                          <label class="checkIn-text">Check-in</label>
                          <div class="input-box">

                            <input type="date" name="date" />
                          </div>

                        </div>


                      </div> */}
                      {/* <div class="col-lg-6 mb-2">
                        <div class="form-group">
                          <label class="checkIn-text">Check-out</label>
                          <div class="input-box">

                            <input type="date" name="date" />
                          </div>

                        </div>


                      </div> */}

                      <div class="col-lg-12">
                        <div class="form-group mb-0 text-center">
                          <a href="#" class="nir-btn w-100"><i class="fa fa-search mr-2"></i> Search
                            Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="banner-image">
                  <img src="/assets/images/Retvens-Hotels-Asset-1.png" alt="" height={600} width={550} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
     
      <section className="about-us pt-0" style={{ backgroundImage: 'url(images/bg/bg-trans.png)' }}>
        <div className="container">
          <div className="about-image-box">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-lg-6 mb-4 pe-4">
                <div className="about-image overflow-hidden">
                  <img src="/assets/images/Retvens-Hotels-Asset-2.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 mb-4 ps-4">
                <div className="about-content text-center text-lg-start mb-4">
                  <h4 className="theme d-inline-block mb-0">Get To Know Us</h4>
                  <h2 className="border-b mb-2 pb-1">Explore All Tour of the world with us.</h2>
                  <p className="border-b mb-2 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.<br /><br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.</p>
                  <div className="about-listing">
                    <ul className="d-flex justify-content-between">
                      <li><i className="icon-location-pin theme" /> Tour Guide</li>
                      <li><i className="icon-briefcase theme" /> Friendly Price</li>
                      <li><i className="icon-folder theme" /> Reliable Tour Package</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                {/* Counter */}
                <div className="counter-main w-75 float-end">
                  <div className="counter p-4 pb-0 box-shadow bg-white rounded">
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
      {/* best tour Starts */}
  <TopHotel/>
      {/* best tour Ends */}
      {/* Last Minute Deal Starts */}
      <section className="trending pb-0 pt-6" style={{ backgroundImage: 'url(images/shape2.png)' }}>
        <div className="container">
          <div className="section-title mb-6 w-75 mx-auto text-center">
            <h4 className="mb-1 theme1">Top Deals</h4>
            <h2 className="mb-1">The Last <span className="theme">Minute Deals</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="trend-box">
            <div className="row">
              <div className="col-lg-5 mb-4">
                <div className="trend-item1 rounded box-shadow mb-4">
                  <div className="trend-image position-relative">
                    <img src="/assets/images/trending/trendingb-2.jpg" alt="image" className />
                    <div className="trend-content1 p-4">
                      <h5 className="theme1 mb-1"><i className="flaticon-location-pin" /> Norway</h5>
                      <h3 className="mb-1 white"><a href="tour-grid.html" className="white">Norway Lake</a>
                      </h3>
                      <div className="rating-main d-flex align-items-center pb-2">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                        <span className="ms-2 white">(16)</span>
                      </div>
                      <div className="entry-meta d-flex align-items-center justify-content-between">
                        <div className="entry-author d-flex align-items-center">
                          <p className="mb-0 white"><span className="theme1 fw-bold fs-5"> $180.00</span> |
                            Per person</p>
                        </div>
                        <div className="entry-author">
                          <i className="icon-calendar white" />
                          <span className="fw-bold white"> 6 Days Tours</span>
                        </div>
                      </div>
                    </div>
                    <div className="overlay" />
                  </div>
                </div>
                <div className="trend-item1 rounded box-shadow mb-4">
                  <div className="trend-image position-relative">
                    <img src="/assets/images/trending/trending-large.jpg" alt="image" className />
                    <div className="trend-content1 p-4">
                      <h5 className="theme1 mb-1"><i className="flaticon-location-pin" /> Egpyt</h5>
                      <h3 className="mb-1 white"><a href="tour-grid.html" className="white">Pyramid Land</a>
                      </h3>
                      <div className="rating-main d-flex align-items-center pb-2">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                        <span className="ms-2 white">(16)</span>
                      </div>
                      <div className="entry-meta d-flex align-items-center justify-content-between">
                        <div className="entry-author d-flex align-items-center">
                          <p className="mb-0 white"><span className="theme1 fw-bold fs-5"> $180.00</span> |
                            Per person</p>
                        </div>
                        <div className="entry-author">
                          <i className="icon-calendar white" />
                          <span className="fw-bold white"> 6 Days Tours</span>
                        </div>
                      </div>
                    </div>
                    <div className="overlay" />
                  </div>
                </div>
                <div className="trend-item1 rounded box-shadow">
                  <div className="trend-image position-relative">
                    <img src="/assets/images/trending/trendingb-1.jpg" alt="image" className />
                    <div className="trend-content1 p-4">
                      <h5 className="theme1 mb-1"><i className="flaticon-location-pin" /> Usa</h5>
                      <h3 className="mb-1 white"><a href="tour-grid.html" className="white">New York
                        City</a></h3>
                      <div className="rating-main d-flex align-items-center pb-2">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                        <span className="ms-2 white">(12)</span>
                      </div>
                      <div className="entry-meta d-flex align-items-center justify-content-between">
                        <div className="entry-author d-flex align-items-center">
                          <p className="mb-0 white"><span className="theme1 fw-bold fs-5"> $140.00</span> |
                            Per person</p>
                        </div>
                        <div className="entry-author">
                          <i className="icon-calendar white" />
                          <span className="fw-bold white"> 3 Days Tours</span>
                        </div>
                      </div>
                    </div>
                    <div className="overlay" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="trend-item rounded box-shadow">
                      <div className="trend-image position-relative">
                        <img src="/assets/images/trending/trending1.jpg" alt="image" className />
                        <div className="color-overlay" />
                      </div>
                      <div className="trend-content p-4 pt-5 position-relative bg-white">
                        <div className="trend-meta bg-theme white px-3 py-2 rounded">
                          <div className="entry-author">
                            <i className="icon-calendar" />
                            <span className="fw-bold"> 4 Days Tours</span>
                          </div>
                        </div>
                        <h5 className="theme mb-1"><i className="flaticon-location-pin" /> Spain</h5>
                        <h3 className="mb-1"><a href="tour-grid.html">Barcelona city beach</a></h3>
                        <div className="rating-main d-flex align-items-center pb-2">
                          <div className="rating">
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                          </div>
                          <span className="ms-2">(21)</span>
                        </div>
                        <p className=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum</p>
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0"><span className="theme fw-bold fs-5"> $220.00</span> | Per
                              person</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="trend-item rounded box-shadow">
                      <div className="trend-image position-relative">
                        <img src="/assets/images/trending/trending2.jpg" alt="image" className />
                        <div className="color-overlay" />
                      </div>
                      <div className="trend-content p-4 pt-5 position-relative bg-white">
                        <div className="trend-meta bg-theme white px-3 py-2 rounded">
                          <div className="entry-author">
                            <i className="icon-calendar" />
                            <span className="fw-bold"> 7 Days Tours</span>
                          </div>
                        </div>
                        <h5 className="theme mb-1"><i className="flaticon-location-pin" /> Indonesia</h5>
                        <h3 className="mb-1"><a href="tour-grid.html">Bali Province</a></h3>
                        <div className="rating-main d-flex align-items-center pb-2">
                          <div className="rating">
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                          </div>
                          <span className="ms-2">(11)</span>
                        </div>
                        <p className=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum</p>
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0"><span className="theme fw-bold fs-5"> $210.00</span> | Per
                              person</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="trend-item rounded box-shadow">
                      <div className="trend-image position-relative">
                        <img src="/assets/images/trending/trending3.jpg" alt="image" className />
                        <div className="color-overlay" />
                      </div>
                      <div className="trend-content p-4 pt-5 position-relative bg-white">
                        <div className="trend-meta bg-theme white px-3 py-2 rounded">
                          <div className="entry-author">
                            <i className="icon-calendar" />
                            <span className="fw-bold"> 3 Days Tours</span>
                          </div>
                        </div>
                        <h5 className="theme mb-1"><i className="flaticon-location-pin" /> Russia</h5>
                        <h3 className="mb-1"><a href="tour-grid.html">Red City Land</a></h3>
                        <div className="rating-main d-flex align-items-center pb-2">
                          <div className="rating">
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                          </div>
                          <span className="ms-2">(25)</span>
                        </div>
                        <p className=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum</p>
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0"><span className="theme fw-bold fs-5"> $120.00</span> | Per
                              person</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="trend-item rounded box-shadow">
                      <div className="trend-image position-relative">
                        <img src="/assets/images/trending/trending4.jpg" alt="image" className />
                        <div className="color-overlay" />
                      </div>
                      <div className="trend-content p-4 pt-5 position-relative bg-white">
                        <div className="trend-meta bg-theme white px-3 py-2 rounded">
                          <div className="entry-author">
                            <i className="icon-calendar" />
                            <span className="fw-bold"> 5 Days Tours</span>
                          </div>
                        </div>
                        <h5 className="theme mb-1"><i className="flaticon-location-pin" /> Bangladesh</h5>
                        <h3 className="mb-1"><a href="tour-grid.html">Cox's bazar Beach</a></h3>
                        <div className="rating-main d-flex align-items-center pb-2">
                          <div className="rating">
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                          </div>
                          <span className="ms-2">(32)</span>
                        </div>
                        <p className=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum</p>
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0"><span className="theme fw-bold fs-5"> $100.00</span> | Per
                              person</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonial pt-9" style={{ backgroundImage: 'url(images/testimonial.png)' }}>
        <div className="container">
          <div className="section-title mb-6 text-center w-75 mx-auto">
            <h4 className="mb-1 theme1">Our Testimonails</h4>
            <h2 className="mb-1">Good Reviews By <span className="theme">Clients</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
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
                    <div className="author-info d-flex align-items-center mb-4">
                      <img src="/assets/images/testimonial/img1.jpg" alt="" />
                      <div className="author-title ms-3">
                        <h5 className="m-0 theme">Jared Erondu</h5>
                        <span>Supervisor</span>
                      </div>
                    </div>
                    <div className="details">
                      <p className="m-0"><i className="fa fa-quote-left me-2 fs-1" />Lorem Ipsum is simply dummy
                        text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum
                        has been the industry's standard dummy hic et quidem. Dignissimos maxime velit
                        unde inventore quasi vero dolorem.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 item">
                  <div className="testimonial-item1 rounded">
                    <div className="author-info d-flex align-items-center mb-4">
                      <img src="/assets/images/testimonial/img1.jpg" alt="" />
                      <div className="author-title ms-3">
                        <h5 className="m-0 theme">Jared Erondu</h5>
                        <span>Supervisor</span>
                      </div>
                    </div>
                    <div className="details">
                      <p className="m-0"><i className="fa fa-quote-left me-2 fs-1" />Lorem Ipsum is simply dummy
                        text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum
                        has been the industry's standard dummy hic et quidem. Dignissimos maxime velit
                        unde inventore quasi vero dolorem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    
      {/* footer ends */}
      {/* Back to top start */}
      <div id="back-to-top">
        <a href="#" />
      </div>
      {/* Back to top ends */}
      {/* search popup */}
      <div id="search1">
        <button type="button" className="close">×</button>
        <form>
          <input type="search" defaultValue placeholder="type keyword(s) here" />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
      {/* login registration modal */}
      <div className="modal fade log-reg" id="exampleModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="post-tabs">
                {/* tab navs */}
                <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button aria-controls="login" aria-selected="false" className="nav-link active" data-bs-target="#login" data-bs-toggle="tab" id="login-tab" role="tab" type="button">Login</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button aria-controls="register" aria-selected="true" className="nav-link" data-bs-target="#register" data-bs-toggle="tab" id="register-tab" role="tab" type="button">Register</button>
                  </li>
                </ul>
                {/* tab contents */}
                <div className="tab-content blog-full" id="postsTabContent">
                  {/* popular posts */}
                  <div aria-labelledby="login-tab" className="tab-pane fade active show" id="login" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="blog-image rounded">
                          <a href="#" style={{ backgroundImage: 'url(assets/images/trending/trending5.jpg)' }} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <h4 className="text-center border-b pb-2">Login</h4>
                        <div className="log-reg-button d-flex align-items-center justify-content-between">
                          <button type="submit" className="btn btn-fb">
                            <i className="fab fa-facebook" /> Login with Facebook
                          </button>
                          <button type="submit" className="btn btn-google">
                            <i className="fab fa-google" /> Login with Google
                          </button>
                        </div>
                        <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                        <form method="post" action="#" name="contactform" id="contactform">
                          <div className="form-group mb-2">
                            <input type="text" name="user_name" className="form-control" id="fname" placeholder="User Name or Email Address" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="password" name="password_name" className="form-control" id="lpass" placeholder="Password" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="checkbox" className="custom-control-input" id="exampleCheck" />
                            <label className="custom-control-label mb-0" htmlFor="exampleCheck1">Remember
                              me</label>
                            <a className="float-end" href="#">Lost your password?</a>
                          </div>
                          <div className="comment-btn mb-2 pb-2 text-center border-b">
                            <input type="submit" className="nir-btn w-100" id="submit" defaultValue="Login" />
                          </div>
                          <p className="text-center">Don't have an account? <a href="#" className="theme">Register</a></p>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Recent posts */}
                  <div aria-labelledby="register-tab" className="tab-pane fade" id="register" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="blog-image rounded">
                          <a href="#" style={{ backgroundImage: 'url(images/trending/trending5.jpg)' }} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <h4 className="text-center border-b pb-2">Register</h4>
                        <div className="log-reg-button d-flex align-items-center justify-content-between">
                          <button type="submit" className="btn btn-fb">
                            <i className="fab fa-facebook" /> Login with Facebook
                          </button>
                          <button type="submit" className="btn btn-google">
                            <i className="fab fa-google" /> Login with Google
                          </button>
                        </div>
                        <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                        <form method="post" action="#" name="contactform1" id="contactform1">
                          <div className="form-group mb-2">
                            <input type="text" name="user_name" className="form-control" id="fname1" placeholder="User Name" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="text" name="user_name" className="form-control" id="femail" placeholder="Email Address" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="password" name="password_name" className="form-control" id="lpass1" placeholder="Password" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="password" name="password_name" className="form-control" id="lrepass" placeholder="Re-enter Password" />
                          </div>
                          <div className="form-group mb-2 d-flex">
                            <input type="checkbox" className="custom-control-input" id="exampleCheck1" />
                            <label className="custom-control-label mb-0 ms-1 lh-1" htmlFor="exampleCheck1">I
                              have read and accept the Terms and Privacy Policy?</label>
                          </div>
                          <div className="comment-btn mb-2 pb-2 text-center border-b">
                            <input type="submit" className="nir-btn w-100" id="submit1" defaultValue="Register" />
                          </div>
                          <p className="text-center">Already have an account? <a href="#" className="theme">Login</a></p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home