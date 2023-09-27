import React, { useState, useContext } from "react";
import { BookingContext } from "../context/bookingContext";
import { Link } from 'react-router-dom';
function Details() {
    const initialField = {
        title: [],
        firstName:[],
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
    };
    const {adultValue, setAdultValue, childValue, setChildValue, checkIn, checkOut } = useContext(BookingContext)
    const { roomSelected, setRoomSelected } = useContext(BookingContext)
    const [fields, setFields] = useState([initialField]);
    console.log(roomSelected)
   
    const handleFieldChange = (index, name, value) => {
        const updatedFields = [...fields];
        updatedFields[index][name] = value;
        setFields(updatedFields);
    };

    const handleRemoveField = (index) => {
        const updatedFields = [...roomSelected];
        updatedFields.splice(index, 1);
        setRoomSelected(updatedFields);
    };

    return (
        <>
            <h5 className="guest-details margin-left-text">Guest Details</h5>
            {roomSelected.map((field, index) => (

                <div key={index} className="row">
                    <div className="row">
                        <h4 className="booking-hotel-name margin-left-text">SHAHPURA ABHANERI RESORT</h4>
                        <div className="trend-check border-b pb-2">
                            <div className="row">
                                <div className="col-lg-3 margin-left-text">
                                    <div className="trend-check-item check-in-date-box rounded p-3 mb-2">
                                        <p className="mb-0 white">Check In</p>
                                        <h6 className="mb-0 white">{checkIn}</h6>

                                    </div>
                                </div>

                                <div className="col-lg-3 ">
                                    <div className="trend-check-item  rounded p-3 mb-2 check-out-date-box">
                                        <p className="mb-0 white">Check Out</p>
                                        <h6 className="mb-0 white">{checkOut}</h6>

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div>
                                        <p className="mb-0">ROOM INFROMATION</p>
                                        <p className="mb-0">Deluxe Cottages - Deluxe Cottages CP</p>
                                        <p className="mb-0">{adultValue} Adult</p>
                                        <p className="mb-0">{childValue} Child</p>
                                        <div style={{ padding: "20px", gap: "20px", display: 'flex' }}>
                                            <Link to="/hotel-detail/:hotel_id"><button className="edit-form">EDIT</button></Link>
                                            {/* <Link to=""><button className="remove-form" onClick={handleRemoveClick}>Remove</button></Link> */}
                                            {/* <button className="edit-form" onClick={handleRemoveClick}>REMOVE</button> */}
                                        </div>

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

                    </div>
                    <div className="col-md-2">
                        <div className="form-group mb-2 margin-left-text">
                            <label>Title</label>
                            <div className="input-box">
                                <select
                                    className="niceSelect text-input"
                                    value={field.title}
                                    onChange={(e) =>
                                        handleFieldChange(index, "title", e.target.value)
                                    }
                                >
                                    <option value={0}>Select</option>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Mrs.">Mrs.</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group mb-2">
                            <label>First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="text-input-1"
                                value={field.firstName}
                                onChange={(e) =>
                                    handleFieldChange(index, "firstName", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group mb-2">
                            <label>Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="text-input"
                                value={field.lastName}
                                onChange={(e) =>
                                    handleFieldChange(index, "lastName", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    {/* Add the rest of the form fields here */}
                    <div className="col-md-6 margin-left-text">
                        <div className="form-group mb-2">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="text-input"
                                value={field.email}
                                onChange={(e) =>
                                    handleFieldChange(index, "email", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group mb-2">
                            <label>Phone</label>
                            <input
                                type="text"
                                placeholder="Phone No."
                                className="text-input"
                                value={field.phone}
                                onChange={(e) =>
                                    handleFieldChange(index, "phone", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-6 margin-left-text">
                        <div className="form-group mb-2">
                            <label>Address Line 1</label>
                            <input
                                type="text"
                                placeholder="Address line 1"
                                className="text-input"
                                value={field.address1}
                                onChange={(e) =>
                                    handleFieldChange(index, "address1", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group mb-2">
                            <label>Address Line 2</label>
                            <input
                                type="text"
                                placeholder="Address line 2"
                                className="text-input"
                                value={field.address2}
                                onChange={(e) =>
                                    handleFieldChange(index, "address2", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button
                            type="button"
                            className="remove-form"
                            onClick={() => handleRemoveField(index)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            {/* <button
        type="button"
        className="add-form-button"
        onClick={handleAddField}
      >
        Add Field
      </button> */}
        </>
    );
}

export default Details;
