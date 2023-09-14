import React, { useState, useEffect } from "react";

const RoomSearch = ({ setHotelData, hotel_id }) => {
  const [checkin, setCheckin] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );
  const [checkout, setCheckout] = useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'apiEndpoint' with your actual API endpoint
        const response = await fetch(
          `http://localhost:8000/api/get/hotelById/${hotel_id}/${checkin}/${checkout}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        setHotelData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [checkin, checkout, hotel_id, setHotelData]);

  return (
    <div className="row d-flex align-items-center justify-content-between">
      <div className="col-lg-2 mb-2" style={{ marginLeft: "400px" }}>
        <div className="form-group">
          <label className="checkIn-text">Check-in</label>
          <div className="input-box">
            <input
              type="date"
              name="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-2 mb-2">
        <div className="form-group">
          <label className="checkIn-text">Check-out</label>
          <div className="input-box">
            <input
              type="date"
              name="date"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="col-lg-2" style={{ marginTop: "20px", marginRight: "370px" }}>
        <div className="form-group mb-0 text-center">
          <a href="#" className="nir-btn w-100">
            <i className="fa fa-search "></i> Search Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomSearch;
