import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal"; // Import Modal component
import Carousel from "react-material-ui-carousel"; // Import Carousel component
import { Paper, Button } from "@mui/material";
import Room from "./roomDetails";
import BookingRooms from "./bookingRooms";
import Room2 from "./roomDetails2";

function HotelDetail() {
  const { hotel_id } = useParams();
  const [totalAmount, setTotalAmount] = useState(0); // Initialize total amount

  const [hotelData, setHotelData] = useState({});

  useEffect(() => {
    // Fetch hotel data from the API
    fetch(`http://localhost:8000/api/get/hotelById/${hotel_id}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        setHotelData(data);
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
      });
  }, [hotel_id]);

  // Define your image data here (replace with actual image URLs)

  return (
    <div style={{ backgroundColor: "#f0f3f6", minHeight: "100%" }}>
      <section
        className="breadcrumb-main mb-4"
        style={{ backgroundImage: "url(assets/images/bg/bg1.jpg)" }}
      >
        <div
          className="section-shape section-shape1 top-inherit bottom-0"
          style={{ backgroundImage: "url(assets/images/shape8.png)" }}
        ></div>
        <div className="breadcrumb-outer">
          <div className="container">
            <div className="breadcrumb-content">
              <nav aria-label="breadcrumb" className="d-block">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "17px",
                    justifyContent: "flex-start",
                  }}
                >
                  <img
                    src={hotelData.hotel_logo}
                    alt="image.png"
                    height="200px"
                    width="200px"
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "20px",
                      fontWeight: "bolder",
                      textColor: "#fffff",
                      lineHeight: "1.2",
                    }}
                  >
                    {hotelData.hotel_name}
                  </h2>

                  <div style={{ textAlign: "left" }}>
                    <label
                      className="mb-0"
                      style={{
                        color: "#f3f3f3",
                        fontSize: "17px",
                        textAlign: "left",
                      }}
                    >
                      Address-
                    </label>
                    <label
                      className="mb-0"
                      style={{
                        color: "#ffffff",
                        fontSize: "17px",

                        textAlign: "left",
                      }}
                    >
                      {hotelData.hotel_address_line_1 + ",  "}
                    </label>
                    <label
                      className="mb-0"
                      style={{
                        color: "#ffffff",
                        fontSize: "17px",

                        textAlign: "left",
                      }}
                    >
                      {hotelData.hotel_address_line_2}
                    </label>
                  </div>
                  <label
                    style={{
                      color: "#fff",
                      textAlign: "left",
                    }}
                  >
                    {hotelData.hotel_description}
                  </label>
                </div>
              </nav>
            </div>
          </div>
          {/* <label className='ml-0' style={{ marginLeft: "-80px", marginTop: "60px", color:"#ACD037"  }}>description-</label> */}
        </div>

        <div className="dot-overlay" />
      </section>

    
      <div class="row d-flex align-items-center justify-content-between">
        <div class="col-lg-2 mb-2" style={{ marginLeft: "400px" }}>
          <div class="form-group">
            <label class="checkIn-text">Check-in</label>
            <div class="input-box">
              <input type="date" name="date" />
            </div>
          </div>
        </div>
        <div class="col-lg-2 mb-2">
          <div class="form-group">
            <label class="checkIn-text">Check-out</label>
            <div class="input-box">
              <input type="date" name="date" />
            </div>
          </div>
        </div>

        <div class="col-lg-2" style={{ marginTop: "20px" ,marginRight:"370px" }}>
          <div class="form-group mb-0 text-center">
            <a href="#" class="nir-btn w-100">
              <i class="fa fa-search "></i> Search Now
            </a>
          </div>
        </div>
      </div>

      <Room2 totalAmount={totalAmount} setTotalAmount={setTotalAmount} />
      {/* <Room2 totalAmount={totalAmount} setTotalAmount={setTotalAmount} /> */}
      {/* <Room totalAmount={totalAmount} setTotalAmount={setTotalAmount} /> */}
      <div id="back-to-top">
        <a href="#" />
      </div>
      {/* Back to top ends */}
      {/* search popup */}
      <div id="search1">
        <button type="button" className="close">
          ×
        </button>
        <form>
          <input
            type="search"
            defaultValue
            placeholder="type keyword(s) here"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      {/* login registration modal */}
      <div
        className="modal fade log-reg"
        id="exampleModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="post-tabs">
                {/* tab navs */}
                <ul
                  className="nav nav-tabs nav-pills nav-fill"
                  id="postsTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      aria-controls="login"
                      aria-selected="false"
                      className="nav-link active"
                      data-bs-target="#login"
                      data-bs-toggle="tab"
                      id="login-tab"
                      role="tab"
                      type="button"
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      aria-controls="register"
                      aria-selected="true"
                      className="nav-link"
                      data-bs-target="#register"
                      data-bs-toggle="tab"
                      id="register-tab"
                      role="tab"
                      type="button"
                    >
                      Register
                    </button>
                  </li>
                </ul>
                {/* tab contents */}
                <div className="tab-content blog-full" id="postsTabContent">
                  {/* popular posts */}
                  <div
                    aria-labelledby="login-tab"
                    className="tab-pane fade active show"
                    id="login"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="blog-image rounded">
                          <a
                            href="#"
                            style={{
                              backgroundImage:
                                "url(assets/images/trending/trending5.jpg)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <h4 className="text-center border-b pb-2">Login</h4>
                        <div className="log-reg-button d-flex align-items-center justify-content-between">
                          <button type="submit" className="btn btn-fb">
                            <i className="fab fa-facebook" /> Login with
                            Facebook
                          </button>
                          <button type="submit" className="btn btn-google">
                            <i className="fab fa-google" /> Login with Google
                          </button>
                        </div>
                        <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                        <form
                          method="post"
                          action="#"
                          name="contactform"
                          id="contactform"
                        >
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              name="user_name"
                              className="form-control"
                              id="fname"
                              placeholder="User Name or Email Address"
                            />
                          </div>
                          <div className="form-group mb-2">
                            <input
                              type="password"
                              name="password_name"
                              className="form-control"
                              id="lpass"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="exampleCheck"
                            />
                            <label
                              className="custom-control-label mb-0"
                              htmlFor="exampleCheck1"
                            >
                              Remember me
                            </label>
                            <a className="float-end" href="#">
                              Lost your password?
                            </a>
                          </div>
                          <div className="comment-btn mb-2 pb-2 text-center border-b">
                            <input
                              type="submit"
                              className="nir-btn w-100"
                              id="submit"
                              defaultValue="Login"
                            />
                          </div>
                          <p className="text-center">
                            Don't have an account?{" "}
                            <a href="#" className="theme">
                              Register
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Recent posts */}
                  <div
                    aria-labelledby="register-tab"
                    className="tab-pane fade"
                    id="register"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="blog-image rounded">
                          <a
                            href="#"
                            style={{
                              backgroundImage:
                                "url(assets/images/trending/trending5.jpg)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <h4 className="text-center border-b pb-2">Register</h4>
                        <div className="log-reg-button d-flex align-items-center justify-content-between">
                          <button type="submit" className="btn btn-fb">
                            <i className="fab fa-facebook" /> Login with
                            Facebook
                          </button>
                          <button type="submit" className="btn btn-google">
                            <i className="fab fa-google" /> Login with Google
                          </button>
                        </div>
                        <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                        <form
                          method="post"
                          action="#"
                          name="contactform1"
                          id="contactform1"
                        >
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              name="user_name"
                              className="form-control"
                              id="fname1"
                              placeholder="User Name"
                            />
                          </div>
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              name="user_name"
                              className="form-control"
                              id="femail"
                              placeholder="Email Address"
                            />
                          </div>
                          <div className="form-group mb-2">
                            <input
                              type="password"
                              name="password_name"
                              className="form-control"
                              id="lpass1"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group mb-2">
                            <input
                              type="password"
                              name="password_name"
                              className="form-control"
                              id="lrepass"
                              placeholder="Re-enter Password"
                            />
                          </div>
                          <div className="form-group mb-2 d-flex">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="exampleCheck1"
                            />
                            <label
                              className="custom-control-label mb-0 ms-1 lh-1"
                              htmlFor="exampleCheck1"
                            >
                              I have read and accept the Terms and Privacy
                              Policy?
                            </label>
                          </div>
                          <div className="comment-btn mb-2 pb-2 text-center border-b">
                            <input
                              type="submit"
                              className="nir-btn w-100"
                              id="submit1"
                              defaultValue="Register"
                            />
                          </div>
                          <p className="text-center">
                            Already have an account?{" "}
                            <a href="#" className="theme">
                              Login
                            </a>
                          </p>
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
      <div className="footer-copyright" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
            <div className="copyright-text">
              <p className="m-0 theme1">2023 Retvens. All rights reserved.</p>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <a href="#">
                    <i className="theme1 fab fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="theme1 fab fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="theme1 fab fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="theme1 fab fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HotelDetail;
