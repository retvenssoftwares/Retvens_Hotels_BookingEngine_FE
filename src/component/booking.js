import Footer from "./footer"
import Navbar from "./navbar"

function Booking() {
    return (
            <div>
              
              {/* BreadCrumb Starts */}  
              <section className="breadcrumb-main pb-20 pt-14" style={{backgroundImage: 'url(images/bg/bg1.jpg)'}}>
                <div className="section-shape section-shape1 top-inherit bottom-0" style={{backgroundImage: 'url(images/shape8.png)'}} />
                <div className="breadcrumb-outer">
                  <div className="container">
                    <div className="breadcrumb-content text-center">
                      <h1 className="mb-3">Booking</h1>
                      <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">Booking</li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="dot-overlay" />
              </section>
              {/* BreadCrumb Ends */} 
              {/* top Destination starts */}
              <section className="trending pt-6 pb-0 bg-lgrey">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mb-4">
                      <div className="payment-book">
                        <div className="booking-box">
                          <div className="customer-information mb-4">
                            <h3 className="border-b pb-2 mb-2">Traveller Information</h3>
                            <form className="mb-2">
                              <h5>Let us know who you are</h5>
                              <div className="row">
                                <div className="col-md-2">
                                  <div className="form-group mb-2">
                                    <label>Title</label>
                                    <div className="input-box">
                                      <select className="niceSelect">
                                        <option value={0}>Select</option>
                                        <option value={1}>Mr.</option>
                                        <option value={2}>Mrs.</option>
                                      </select>
                                    </div>                            
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="form-group mb-2">
                                    <label>First Name</label>
                                    <input type="text" placeholder="First Name" />
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="form-group mb-2">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Last Name" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group mb-2">
                                    <label>Email</label>
                                    <input type="email" placeholder="Email Address" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group mb-2">
                                    <label>Phone</label>
                                    <input type="text" placeholder="Phone No." />
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                  <div className="form-group">
                                    <label>Gender</label>
                                    <div className="input-box">
                                      <select className="niceSelect">
                                        <option value={0}>Select Gender</option>
                                        <option value={1}>Male</option>
                                        <option value={2}>Female</option>
                                      </select>
                                    </div>                            
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                  <div className="form-group mb-2">
                                    <label>DOB</label>
                                    <div className="input-box">
                                      <input id="date-range" type="date" />
                                    </div> 
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                  <div className="form-group mb-2">
                                    <label>Select Country</label>
                                    <div className="input-box">
                                      <select className="niceSelect">
                                        <option value={0}>Albania</option>
                                        <option value={1}>Malaysia</option>
                                        <option value={2}>Singapore</option>
                                        <option value={3}>Japan</option>
                                        <option value={4}>Thailand</option>
                                      </select>
                                    </div>                            
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                  <div className="form-group mb-2">
                                    <label>Select City</label>
                                    <div className="input-box">
                                      <select className="niceSelect">
                                        <option value={0}>Istanbul</option>
                                        <option value={1}>London</option>
                                        <option value={2}>Texas</option>
                                        <option value={3}>Tokyo</option>
                                        <option value={4}>Bangkok</option>
                                      </select>
                                    </div>                            
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group mb-2">
                                    <label>Address Line 1</label>
                                    <input type="text" placeholder="Address line 1" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group mb-2">
                                    <label>Address Line 2</label>
                                    <input type="text" placeholder="Address line 2" />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="customer-information mb-4 d-flex align-items-center bg-grey rounded p-4">
                            <i className="fa fa-grin-wink rounded fs-1 bg-theme white p-3 px-4" />
                            <div className="customer-info ps-4">
                              <h6 className="mb-1">Good To Know:</h6>
                              <small>Free Cancellation until 14:00 pn 11 Feb 2022</small>
                            </div>
                          </div>
                          <div className="customer-information card-information">
                            <h3 className="border-b pb-2 mb-2">How do you want to pay?</h3>
                            <div className="trending-topic-main">
                              {/* tab navs */}
                              <ul className="nav nav-tabs nav-pills nav-fill w-50" id="postsTab1" role="tablist">
                                <li className="nav-item me-2 ms-0" role="presentation">
                                  <button aria-controls="card" aria-selected="false" className="nav-link active" data-bs-target="#card" data-bs-toggle="tab" id="card-tab" role="tab" type="button">Credit/Debit card</button>
                                </li>
                                <li className="nav-item m-0" role="presentation">
                                  <button aria-controls="paypal" aria-selected="true" className="nav-link" data-bs-target="#paypal" data-bs-toggle="tab" id="paypal-tab" role="tab" type="button">Digital Payment</button>
                                </li>
                              </ul>
                              {/* tab contents */}
                              <div className="tab-content" id="postsTabContent1">
                                {/* card posts */}
                                <div aria-labelledby="card-tab" className="tab-pane fade active show" id="card" role="tabpanel">
                                  <form>
                                    <h5 className="mb-2 border-b pb-2"><i className="fa fa-credit-card" /> Credit Card</h5>
                                    <div className="row align-items-center">
                                      <div className="col-md-8">
                                        <div className="card-detail">
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="form-group mb-2">
                                                <label>Card Holder Number</label>
                                                <input type="text" />
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="form-group mb-2">
                                                <label>Card Number</label>
                                                <input type="text" placeholder="**** **** **** ****" />
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="form-group mb-2">
                                                <label>Expiry Date</label>
                                                <input type="text" placeholder=" Expiry Date" />
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="form-group">
                                                <label>CVC/CVV</label>
                                                <input type="text" placeholder="CVC/CVV" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <img src="/assets/images/cc.png" alt="" className="rounded" />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                {/* paypal posts */}
                                <div aria-labelledby="paypal-tab" className="tab-pane fade" id="paypal" role="tabpanel">
                                  <div className="paypal-card">
                                    <h5 className="mb-2 border-b pb-2"><i className="fab fa-paypal" /> Paypal</h5>
                                    <ul className>
                                      <li className="d-block">To make the payment process secure and complete you will be redirected to Paypal Website.</li>
                                      <li className="d-block">
                                        <a href className="theme">Checkout via Paypal <i className="fa fa-long-arrow-alt-right" /></a>
                                      </li>
                                      <li className="d-block">The total Amount you will be charged is: <span className="fw-bold theme">$ 245.50</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="booking-terms border-t pt-3 mt-3">
                              <form className="d-lg-flex align-items-center">
                                <div className="form-group mb-2 w-75">
                                  <input type="checkbox" /> By continuing, you agree to the <a href="#">Terms and Conditions.</a>
                                </div>
                                <a href="#" className="nir-btn float-lg-end w-25">CONFIRM BOOKING</a>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4 ps-ld-4">
                      <div className="sidebar-sticky">
                        <div className="sidebar-item bg-white rounded box-shadow overflow-hidden p-3 mb-4">
                          <h4>Your Booking Details</h4>
                          <div className="trend-full border-b pb-2 mb-2">
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <div className="trend-item2 rounded">
                                  <a href="destination-single1.html" style={{backgroundImage: 'url(images/destination/destination17.jpg)'}} />
                                  <div className="color-overlay" />
                                </div> 
                              </div>
                              <div className="col-lg-8 col-md-8 ps-0">
                                <div className="trend-content position-relative">
                                  <div className="rating mb-1">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <small>200 Reviews</small>
                                  </div>
                                  <h5 className="mb-1"><a href="grid-leftfilter.html">Adriatic Adventure–Zagreb To Athens</a></h5>
                                  <h6 className="theme mb-0"><i className="icon-location-pin" /> Croatia</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="trend-check border-b pb-2">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="trend-check-item bg-grey rounded p-3 mb-2">
                                  <p className="mb-0">Check In</p>
                                  <h6 className="mb-0">Thu 21 Feb 2022</h6>
                                  <small>15:00 - 22:00</small>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="trend-check-item bg-grey rounded p-3 mb-2">
                                  <p className="mb-0">Check Out</p>
                                  <h6 className="mb-0">Tue 24 Feb 2022</h6>
                                  <small>1:00 - 10:00</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="trend-check border-b pb-2 mb-2">
                            <p className="mb-0">Total Length of Stay:</p>
                            <h6 className="mb-0">8 Days | 7 Nights </h6>
                            <small><a href="#" className="theme text-decoration-underline">travelling on different dates?</a></small>
                          </div>
                          <div className="trend-check">
                            <p className="mb-0">You Selected:</p>
                            <h6 className="mb-0">Superior Double Rooms <span className="float-end fw-normal">1 room, 3 adults</span> </h6>
                            <small><a href="#" className="theme text-decoration-underline">Change your selection</a></small>
                          </div>
                        </div>  
                        <div className="sidebar-item bg-white rounded box-shadow overflow-hidden p-3 mb-4">
                          <h4>Your Price Summary</h4>
                          <table>
                            <tbody>
                              <tr>
                                <td> Superior Twin</td>
                                <td className="theme2">$500.00</td>
                              </tr>
                              <tr>
                                <td>Number of Travellers</td>
                                <td className="theme2">3</td>
                              </tr>
                              <tr>
                                <td>Tax &amp; fee</td>
                                <td className="theme2">$50.00</td>
                              </tr>
                              <tr>
                                <td>Booking Fee</td>
                                <td className="theme2">Free</td>
                              </tr>
                              <tr>
                                <td>Total</td>
                                <td className="theme2">$550.00</td>
                              </tr>
                            </tbody>
                            <tfoot className="bg-title">
                              <tr>
                                <th className="font-weight-bold white">Amount</th>
                                <th className="font-weight-bold white">$550.00</th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <div className="sidebar-item bg-white rounded box-shadow overflow-hidden p-3 mb-4">
                          <h4>Your Payment Schedule</h4>
                          <p className="mb-0">Before you stay you'll pay <span className="float-end">$40.00</span></p>
                        </div>
                        <div className="sidebar-item bg-white rounded box-shadow overflow-hidden p-3">
                          <h4>Do you have a promo code?</h4>
                          <input type="text" name />
                          <a href="#" className="nir-btn-black mt-2">Apply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
             <Footer/>
             <div id="back-to-top">
        <a href="#" />
      </div>
            </div>
    )
}

export default Booking