import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Room2 from "./roomDetails2";
import Search from "./roomSearch";
import { BookingContext } from "../context/bookingContext";

function HotelDetail() {
  const { propertyId } = useParams();
  const [totalAmount, setTotalAmount] = useState(0); // Initialize total amount
  const { adultValue, setAdultValue } = useContext(BookingContext)
  const [hotelData, setHotelData] = useState([]);
  const [roomData, setRoomData] = useState([]);
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
  const rooms = [
    { roomName: "Deluxe", price: 12000, roomLeft: 10 },
    { roomName: "Standard", price: 12000, roomLeft: 10 },
    { roomName: "Sea", price: 12000, roomLeft: 10 },
    { roomName: "Luxury", price: 12000, roomLeft: 10 }
  ];

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


      {rooms.map((room, index) => (
        <div key={index}>
          <Room2 room={room} setTotalAmount={setTotalAmount} setRoomData={setRoomData} />
        </div>
      ))}
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