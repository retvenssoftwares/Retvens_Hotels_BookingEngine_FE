import React, { useState, useEffect,useContext } from "react";
import { BookingContext } from "../context/bookingContext";

function Search(){
  const [checkin, setCheckin] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );
  const [checkout, setCheckout] = useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );

  const {updateCheckInValue,updateCheckOutValue}  = useContext(BookingContext)


  const handleCheckIn = (e) => {
    setCheckin(e.target.value)
    updateCheckInValue(e.target.value)
  }
  const handleCheckOut = (e) => {
    setCheckout(e.target.value)
    updateCheckOutValue(e.target.value)
  }
  return(
    <>
    <div class="row d-flex align-items-center justify-content-between">
<div class="col-lg-2 mb-2" style={{ marginLeft: "400px" }}>
  <div class="form-group">
    <label class="checkIn-text">Check-in</label>
    <div class="input-box">
      <input type="date" name="date" value={checkin}
        onChange={handleCheckIn}
      />
    </div>
  </div>
</div>
<div class="col-lg-2 mb-2">
  <div class="form-group">
    <label class="checkIn-text">Check-out</label>
    <div class="input-box">
      <input type="date" name="date" value={checkout}
        onChange={handleCheckOut}

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
</div>
    </>
  )
}
export default Search