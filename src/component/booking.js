import Footer from "./footer"
import Navbar from "./navbar"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Button } from "reactstrap";

function Booking() {

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));
  const textFieldStyle = {
    height: '1px',
    marginBottom: '50px',
    width: '400px' // Adjust the height value as needed
  };
  return (
    <div>

      {/* BreadCrumb Starts */}
      <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: 'url(images/bg/bg1.jpg)' }}>
        <div className="section-shape section-shape1 top-inherit bottom-0" style={{ backgroundImage: 'url(images/shape8.png)' }} />
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
            <div className="col-lg-9 mb-4">
              <div className="payment-book">
                <div className="booking-box">
                  <div className="customer-information mb-4 box-shadow">
                    {/* <h3 className="border-b pb-2 mb-2">Traveller Information</h3> */}
                    <div className="customer-information mb-4 box-shadow bg-white top-color" height="80px" padding="30px"><h4 className="booking-form margin-left-text">Enter Your Details</h4></div>
                    <form className="mb-2 bg-white">
                      {/* <h5>Let us know who you are</h5> */}
                      <div className="row">
                        <h4 className="booking-hotel-name margin-left-text">SHAHPURA ABHANERI RESORT</h4>
                        <div className="trend-check border-b pb-2">
                          <div className="row">
                            <div className="col-lg-3 margin-left-text">
                              <div className="trend-check-item check-in-date-box rounded p-3 mb-2">
                                <p className="mb-0 white">Check In</p>
                                <h6 className="mb-0 white">Thu 21 Feb 2022</h6>

                              </div>
                            </div>

                            <div className="col-lg-3 ">
                              <div className="trend-check-item  rounded p-3 mb-2 check-out-date-box">
                                <p className="mb-0 white">Check Out</p>
                                <h6 className="mb-0 white">Tue 24 Feb 2022</h6>

                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div>
                                <p className="mb-0">ROOM INFROMATION</p>
                                <p className="mb-0">Deluxe Cottages - Deluxe Cottages CP</p>
                              </div>


                            </div>
                            <div className="col-lg-2">
                              <div>
                                <p className="mb-0">Price</p>
                                <p className="mb-0">Rs.10000.00</p>
                              </div>


                            </div>
                          </div>
                        </div>
                        <h5 className="guest-details margin-left-text">Guest Details</h5>
                        <div className="col-md-2">

                          <div className="form-group mb-2 margin-left-text" >

                            <label>Title</label>
                            <div className="input-box">
                              <select className="niceSelect text-input" >
                                <option value={0}>Select</option>
                                <option value={1}>Mr.</option>
                                <option value={2}>Mrs.</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-2">
                            <label>First Name</label>
                            <input type="text" placeholder="First Name" className="text-input" required/>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group mb-2">
                            <label>Last Name</label>
                            <input type="text" placeholder="Last Name" className="text-input" />
                          </div>
                        </div>
                        <div className="col-md-6 margin-left-text">
                          <div className="form-group mb-2">
                            <label>Email</label>
                            <input type="email" placeholder="Email Address" className="text-input" />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group mb-2">
                            <label>Phone</label>
                            <input type="text" placeholder="Phone No." className="text-input" />
                          </div>
                        </div>
                      
                        <div className="col-md-6 margin-left-text">
                          <div className="form-group mb-2">
                            <label>Address Line 1</label>
                            <input type="text" placeholder="Address line 1" className="text-input" />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group mb-2">
                            <label>Address Line 2</label>
                            <input type="text" placeholder="Address line 2" className="text-input" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <div className="customer-information mb-4 d-flex align-items-center bg-grey rounded p-4">
                            <i className="fa fa-grin-wink rounded fs-1 bg-theme white p-3 px-4" />
                            <div className="customer-info ps-4">
                              <h6 className="mb-1">Good To Know:</h6>
                              <small>Free Cancellation until 14:00 pn 11 Feb 2022</small>
                            </div>
                          </div> */}
                  <div className="customer-information card-information">
                    {/* <h3 className="border-b pb-2 mb-2">How do you want to pay?</h3> */}
                    <div className="trending-topic-main">

                      {/* <ul className="nav nav-tabs nav-pills nav-fill w-50" id="postsTab1" role="tablist">
                                <li className="nav-item me-2 ms-0" role="presentation">
                                  <button aria-controls="card" aria-selected="false" className="nav-link active" data-bs-target="#card" data-bs-toggle="tab" id="card-tab" role="tab" type="button">Credit/Debit card</button>
                                </li>
                                <li className="nav-item m-0" role="presentation">
                                  <button aria-controls="paypal" aria-selected="true" className="nav-link" data-bs-target="#paypal" data-bs-toggle="tab" id="paypal-tab" role="tab" type="button">Digital Payment</button>
                                </li>
                              </ul>
                            */}
                      {/* <div className="tab-content" id="postsTabContent1">
                            
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
                              </div> */}
                    </div>
                    {/* <div className="booking-terms border-t pt-3 mt-3">
                              <form className="d-lg-flex align-items-center">
                                <div className="form-group mb-2 w-75">
                                  <input type="checkbox" /> By continuing, you agree to the <a href="#">Terms and Conditions.</a>
                                </div>
                                <a href="#" className="nir-btn float-lg-end w-25">CONFIRM BOOKING</a>
                              </form>
                            </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4 ps-ld-4">
              <div className="sidebar-sticky">
                <div className="sidebar-item bg-white rounded box-shadow overflow-hidden p-3 mb-4">
                  <h4>SHAHPURA ABHANERI RESORT</h4>
                  <div className="trend-full border-b pb-2 mb-2">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 ps-0">
                        <p className="mb-0 payment-rate">ROOM RATE:</p>
                      </div>
                      <div className="col-lg-4 col-md-4 ps-0 text-end">
                        <p className="col-lg-10 ps-0 mb-0 payment-price">10000.00</p>
                      </div>
                      <div className="col-lg-8 col-md-8 ps-0">
                        <p className="mb-0 payment-rate">TAX:</p>
                      </div>
                      <div className="col-lg-4 col-md-4 ps-0 text-end">
                        <p className="col-lg-10 ps-0 mb-0 payment-price">5000.00</p>
                      </div>
                      <div className="col-lg-8 col-md-8 ps-0">
                        <p className="mb-0 payment-rate">TOTAL:</p>
                      </div>
                      <div className="col-lg-4 col-md-4 ps-0 text-end">
                        <p className="col-lg-10 ps-0 mb-0 payment-price">15000.00</p>
                      </div>
                    </div>
                  </div>
                  <button className="payment-button">PROCEED TO CHECKOUT</button>
                </div>
             
              </div>
              
            </div>

          </div>
        </div>
      </section>







      <div id="back-to-top">
        <a href="#" />
      </div>
    </div>
  )
}

export default Booking