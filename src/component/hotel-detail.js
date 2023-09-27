import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal"; // Import Modal component
import Carousel from "react-material-ui-carousel"; // Import Carousel component
import { Paper, Button } from "@mui/material";
import Room2 from "./roomDetails2";
import Search from "./roomSearch";
import { BookingContext } from "../context/bookingContext";

function HotelDetail() {
  const { propertyId } = useParams();
  const [totalAmount, setTotalAmount] = useState(0); // Initialize total amount
  const { adultValue, setAdultValue } = useContext(BookingContext)
  const [hotelData, setHotelData] = useState([]);
  useEffect(() => {
    // Fetch hotel data from the API
    fetch(`http://localhost:9000/getProperty/${propertyId}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        setHotelData(data);
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
      });
  }, [propertyId]);

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
                    marginLeft: "-60px",
                    marginTop: "-60px"
                    //  justifyContent: "flex-start",

                  }}
                >
                  <img
                    src={hotelData.hotelLogo ? hotelData.hotelLogo.hotelLogo : ''}
                    alt="image.png"
                    height="150px"

                    width="150px"
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
                    {hotelData.propertyName ? hotelData.propertyName.propertyName : ''}
                 
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
                      {hotelData.propertyAddress ? hotelData.propertyAddress.propertyAddress : '' + " "}
                    </label>
                    <label
                      className="mb-0"
                      style={{
                        color: "#ffffff",
                        fontSize: "17px",

                        textAlign: "left",
                      }}
                    >
                      {hotelData.propertyAddress1 ? hotelData.propertyAddress1.propertyAddress1 : ''}
                    </label>

                  </div>
                  <div>
                    <label
                      className="mb-0"
                      style={{
                        color: "#f3f3f3",
                        fontSize: "17px",
                        textAlign: "left",
                        gap: "10px",
                      }}
                    >
                      Rating-
                    </label>
                    <label
                      className="mb-0"
                      style={{
                        color: "#ffffff",
                        fontSize: "17px",

                        textAlign: "left",
                      }}
                    >
                      {hotelData.rating ? hotelData.rating.rating : ''}
                      {/* <img src="/assets/images/star.png" height="10px"></img>
                      <img src="/assets/images/star.png" height="10px"></img>
                      <img src="/assets/images/star.png" height="10px"></img> */}
                    </label>
                  </div>
                  <div>
                    <label
                      className="mb-0"
                      style={{
                        color: "#f3f3f3",
                        fontSize: "17px",
                        textAlign: "left",
                        gap: "10px",
                      }}
                    >
                      Description-
                    </label>
                    <label
                      className="mb-0"
                      style={{
                        color: "#ffffff",
                        fontSize: "17px",

                        textAlign: "left",
                      }}
                    >
                      {hotelData.description ? hotelData.description.description : ''}
                    </label>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/* <label className='ml-0' style={{ marginLeft: "-80px", marginTop: "60px", color:"#ACD037"  }}>description-</label> */}
        </div>

        <div className="dot-overlay" />
      </section>

      <Search />
      {/* <div class="row d-flex align-items-center justify-content-between">
        <div class="col-lg-2 mb-2" style={{ marginLeft: "400px" }}>
          <div class="form-group">
            <label class="checkIn-text">Check-in</label>
            <div class="input-box">
              <input type="date" name="date" value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div class="col-lg-2 mb-2">
          <div class="form-group">
            <label class="checkIn-text">Check-out</label>
            <div class="input-box">
              <input type="date" name="date" value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div class="col-lg-2" style={{ marginTop: "20px", marginRight: "370px" }}>
          <div class="form-group mb-0 text-center">
            <a href="#" class="nir-btn w-100">
              <i class="fa fa-search "></i> Search Now
            </a>
          </div>
        </div>
      </div> */}

      <Room2 totalAmount={totalAmount} setTotalAmount={setTotalAmount} hotelData={hotelData.room_availability} />
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