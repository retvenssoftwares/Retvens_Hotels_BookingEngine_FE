import React, { useContext, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Button } from "reactstrap";
import { BookingContext } from "../context/bookingContext";
import Details from "./guestDetails";
import CircularProgress from "@mui/material/CircularProgress"; // Import CircularProgress
function Booking() {
  const navigate = useNavigate();
  const {propertyId} = useParams()
  const { roomSelected, checkIn, checkOut } =
    useContext(BookingContext);

  const [showForm, setShowForm] = useState(true);
  const [loading, setLoading] = useState(false); // Add loading state
  const handleRemoveClick = () => {
    // Set showForm to false to hide the form
    setShowForm(false);
  };

  // Function to handle the API call and navigation to the payment page
  const handleCheckout = async () => {
    try {
      // Prepare the guest details object
      const guestDetails = roomSelected.map((field) => ({
        title: field.title,
        guestFirstName: field.guestFirstName,
        guestLastName: field.guestLastName,
        guestEmail: field.guestEmail,
        guestPhoneNumber: field.guestPhoneNumber,
        guestAddress1: field.guestAddress1,
        guestAddress2: field.guestAddress2,
        specialRequest: field.specialRequest,
        estimatedArrival: field.estimatedArrival,
        //roomTypeId: "e5TWGi7q",
       // ratePlanId: "O6S8FGQs",
      }));

      // Prepare the request data including guest details, checkIn, and checkOut dates
      const requestData = {
        roomDetails: guestDetails,
        checkInDate: checkIn,
        checkOutDate: checkOut,
        propertyId: propertyId,

        // Add any other data you need for the API call
      };
      setLoading(true); // Set loading to true while fetching data

      // Simulate loading delay with setTimeout
      setTimeout(() => {
        setLoading(false);
      }, 3000); // You can adjust the delay as needed
      console.log(requestData);

      // Make the API call
      const response = await fetch("http://localhost:9000/createBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
       
      });

      if (response.ok) {
     
         // API call was successful, extract bookingId from the response
         const responseData = await response.json();
         const { bookingId } = responseData; // Destructure bookingId from responseData
        navigate(`/payment/${bookingId}`);
      } else {
        // Handle the case where the API call was not successful
        console.error("API call failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error(error);
    }
  };

  return (
    <div>
      {/* BreadCrumb Starts */}
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
              <h1 className="mb-3">Booking</h1>
              <nav aria-label="breadcrumb" className="d-block">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Booking
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="dot-overlay" />
      </section>
      {/* BreadCrumb Ends */}
      {/* top Destination starts */}
      <section className="trending pt-4 ml-0 pb-0 bg-lgrey">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-4 shadow">
              <div className="payment-book">
                <div className="booking-box">
                  <div className="customer-information mb-4">
                    {/* <h3 className="border-b pb-2 mb-2">Traveller Information</h3> */}
                    <div
                      className="customer-information mb-4 box-shadow bg-white top-color"
                      height="80px"
                      padding="30px"
                    >
                      <h4 className="booking-form margin-left-text">
                        Enter Your Details
                      </h4>
                    </div>
                    {showForm && (
                      <form className="mb-2 bg-white">
                        {/* <h5>Let us know who you are</h5> */}
                        <Details />
                      </form>
                    )}
                  </div>

                  <div className="customer-information card-information">
                    <div className="trending-topic-main"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 ps-ld-4">
              <div className="sidebar-sticky shadow">
                <div
                  className="sidebar-item bg-white rounded box-shadow overflow-hidden p-3 mb-4 shadow"
                  style={{ float: "right" }}
                >
                  <h4>SHAHPURA ABHANERI RESORT</h4>
                  <div className="trend-full border-b pb-2 mb-2">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 ps-0">
                        <p className="mb-0 payment-rate">ROOM RATE:</p>
                      </div>
                      <div className="col-lg-4 col-md-4 ps-0 text-end">
                        <p className="col-lg-10 ps-0 mb-0 payment-price">
                          10000.00
                        </p>
                      </div>
                      <div className="col-lg-8 col-md-8 ps-0">
                        <p className="mb-0 payment-rate">TAX:</p>
                      </div>
                      <div className="col-lg-4 col-md-4 ps-0 text-end">
                        <p className="col-lg-10 ps-0 mb-0 payment-price">
                          5000.00
                        </p>
                      </div>
                      <div className="col-lg-8 col-md-8 ps-0">
                        <p className="mb-0 payment-rate">TOTAL:</p>
                      </div>
                      <div className="col-lg-4 col-md-4 ps-0 text-end">
                        <p className="col-lg-10 ps-0 mb-0 payment-price">
                          15000.00
                        </p>
                      </div>
                    </div>
                  </div>
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <button className="payment-button" onClick={handleCheckout}>
                      PROCEED TO CHECKOUT
                    </button>
                  )}
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
  );
}

export default Booking;
