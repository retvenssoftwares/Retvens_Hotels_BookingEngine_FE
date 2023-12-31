import React, { useState, useContext, useEffect } from "react";
import { BookingContext } from "../context/bookingContext";
import { Link, useNavigate,useParams } from "react-router-dom";
import rooms from "./roomDetails2";
import TextField from "@mui/material/TextField"; // Import the TextField component
import MenuItem from "@mui/material/MenuItem"; // Import MenuItem from @mui/material/Menu package
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Booking from "./booking";
function Details() {
  const {propertyId} = useParams()
  const initialField = {
    title: "",
    guestFirstName: "",
    guestLastName: "",
    guestEmail: "",
    guestPhoneNumber: "",
    guestAddress1: "",
    guestAddress2: "",
    specialRequest: "",
    estimatedArrival: "",
    checkInDate: "",
    checkInDate: "",
  };

  const {
    adultValue,
    setAdultValue,
    childValue,
    setChildValue,
    checkIn,
    checkOut,
  } = useContext(BookingContext);
  const {
    totalAmount,
    totalRooms,
    roomSelected,
    setTotalAmount,
    setRoomSelected,
  } = useContext(BookingContext);

  const [fields, setFields] = useState([initialField]);
  // console.log(roomSelected)
  const totalRoom = roomSelected.length;

  //  console.log(totalRoom)
  //  console.log(totalAmount)
  const amount = totalAmount / totalRoom;
  console.log(amount);

  const handleFieldChange = (index, name, value) => {
    const updatedFields = [...roomSelected];
    updatedFields[index][name] = value;
    setFields(updatedFields);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refreshParam = urlParams.get("refresh");
    if (refreshParam === "true") {
      // Refresh the page and remove the refresh query parameter
      window.location.reload(rooms);
      navigate(window.location.pathname);
    }
  }, [navigate]);

  const handleRemoveField = (index) => {
    const updatedFields = [...roomSelected];
    updatedFields.splice(index, 1);
    setRoomSelected(updatedFields);

    // Check if there is only one record left
    if (updatedFields.length === 0) {
      // Navigate to the hotel-detail page and refresh
      // navigate("/hotel-detail/:hotel_id");
      window.localStorage.setItem("counterValue", 0);
 navigate(`/hotel-detail/${propertyId}`)
    } else {
      // Set counterValue to the updated number of records
      window.localStorage.setItem("counterValue", updatedFields.length);
    }
  };
  if (!totalRooms || !Array.isArray(totalRooms)) {
    return null; // or return an appropriate component or message
  }

  //7 console.log(totalRooms)

  return (
    <>
      <h4 className="booking-hotel-name margin-left-text">
        SHAHPURA ABHANERI RESORT
      </h4>
      <h5 className="guest-details margin-left-text">Guest Details</h5>

      {roomSelected.map((field, index) => (
        <div key={index} className="row">
          <div className="row">
            <div className="trend-check border-b pb-2">
              <div className="row">
                <div className="col-lg-3 margin-left-text">
                  <div className="trend-check-item check-in-date-box rounded p-3 mb-2">
                    <p className="mb-0 white">Check In</p>
                    <h6 className="mb-0 white">{checkIn}</h6>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="trend-check-item rounded p-3 mb-2 check-out-date-box">
                    <p className="mb-0 white">Check Out</p>
                    <h6 className="mb-0 white">{checkOut}</h6>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div>
                    <p className="mb-0">ROOM INFORMATION</p>
                    <p className="mb-0">{field.roomType}</p>
                    <p className="mb-0">{field.adult} Adult</p>
                    <p className="mb-0">{field.child} Child</p>
                    <div
                      style={{ padding: "20px", gap: "20px", display: "flex" }}
                    >
                      <div className="col-md-4 mb-4 ml-0">
                      <button
                        className="edit-form"
                        style={{ marginLeft: "-40px" }}
                        onClick={() => navigate(`/hotel-detail/${propertyId}`)}
                      >
                        EDIT
                      </button>
                      </div>
                   
                      <div className="col-md-4 mb-4 ml-0" style={{marginLeft:"30px"}}>
                        <button
                          type="button"
                          className="remove-form"
                          style={{ marginLeft: "-20px" }}
                          onClick={() => handleRemoveField(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div>
                    <p className="mb-0">Price</p>
                    <p className="mb-0">{amount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group mb-2 margin-left-text">
              <label>Title</label>
              <div className="input-box">
                <TextField
                  select
                  className="niceSelect text-input"
                  value={field.title}
                  onChange={(e) =>
                    handleFieldChange(index, "title", e.target.value)
                  }
                  variant="outlined"
                >
                  <MenuItem value={0}>Select</MenuItem>
                  <MenuItem value="Mr.">Mr.</MenuItem>
                  <MenuItem value="Mrs.">Mrs.</MenuItem>
                </TextField>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group mb-2">
              <label>First Name</label>
              <TextField
                type="text"
                label="First Name"
                className="text-input"
                size="small"
                value={field.guestFirstName}
                onChange={(e) =>
                  handleFieldChange(index, "guestFirstName", e.target.value)
                }
                variant="outlined"
                fullWidth
                inputProps={{ style: { height: "30px" } }}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group mb-2">
              <label>Last Name</label>
              <TextField
                type="text"
                label="Last Name"
                className="text-input"
                value={field.guestLastName}
                onChange={(e) =>
                  handleFieldChange(index, "guestLastName", e.target.value)
                }
                variant="outlined"
                fullWidth
                inputProps={{ style: { height: "30px" } }}
              />
            </div>
          </div>
          {/* Add the rest of the form fields here */}
          <div className="col-md-6 margin-left-text">
            <div className="form-group mb-2">
              <label>Email</label>
              <TextField
                type="email"
                label="Email Address"
                className="text-input"
                value={field.guestEmail}
                onChange={(e) =>
                  handleFieldChange(index, "guestEmail", e.target.value)
                }
                variant="outlined"
                fullWidth
                inputProps={{ style: { height: "30px" } }}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group mb-2">
              <label>Phone</label>
              <TextField
                type="text"
                label="Phone No."
                className="text-input"
                value={field.guestPhoneNumber}
                onChange={(e) =>
                  handleFieldChange(index, "guestPhoneNumber", e.target.value)
                }
                variant="outlined"
                fullWidth
                inputProps={{ style: { height: "30px" } }}
              />
            </div>
          </div>
          <div className="col-md-6 margin-left-text">
            <div className="form-group mb-2">
              <label>Address Line 1</label>
              <TextField
                type="text"
                label="Address line 1"
                className="text-input"
                value={field.guestAddress1}
                onChange={(e) =>
                  handleFieldChange(index, "guestAddress1", e.target.value)
                }
                variant="outlined"
                fullWidth
                inputProps={{ style: { height: "30px" } }}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group mb-2">
              <label>Address Line 2</label>
              <TextField
                type="text"
                label="Address line 2"
                className="text-input"
                value={field.guestAddress2}
                onChange={(e) =>
                  handleFieldChange(index, "guestAddress2", e.target.value)
                }
                variant="outlined"
                fullWidth
                inputProps={{ style: { height: "30px" } }}
              />
            </div>
          </div>
          <div className="col-md-5 margin-left-text">
            <div className="form-group mb-2">
              <label>Special Request</label>
              <TextField
                id="specialRequest"
                label="Your Special Request"
                rows={4}
                className="text-input"
                variant="outlined"
                value={field.specialRequest}
                fullWidth
                onChange={(e) =>
                  handleFieldChange(index, "specialRequest", e.target.value)
                }
                inputProps={{ style: { height: "30px" } }}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group mb-2">
              <label>Your arrival time</label>
              <FormControl variant="outlined" fullWidth className="text-input">
                <InputLabel htmlFor="specialRequest">
                  Select Special Request
                </InputLabel>
                <Select
                  native
                  label="Select Special Request"
                  value={field.estimatedArrival}
                  inputProps={{
                    name: "specialRequest",
                    id: "specialRequest",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="Option 1">10:00</option>
                  <option value="Option 2">11:00</option>
                  <option value="Option 3">12:00</option>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      ))}
      {/* <Booking handleSubmit={handleSubmit} /> */}
    </>
  );
}

export default Details;
