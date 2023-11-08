import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

function HotelList() {

    let navigate = useNavigate();
    const [hotels, setHotels] = useState([]);
    const [destination, setDestination] = useState(1);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    useEffect(() => {
        // Define a function to fetch hotel data from the API
        const fetchHotels = async () => {
            try {
                const response = await fetch('https://api.retvenshotels.com/getAllProperty');
                if (response.ok) {
                    const data = await response.json();
                    setHotels(data); // Update the hotels state with the fetched data
                } else {
                    console.error('Failed to fetch hotel data');
                }
            } catch (error) {
                console.error('Error fetching hotel data:', error);
            }
        };
        // Call the fetchHotels function when the component mounts
        fetchHotels();
    }, []); // The empty array ensures that this effect runs only once when the component mounts
    ///////////
    const [selectedCity, setSelectedCity] = useState(1); // Initialize with a default city value
    const [cityOptions, setCityOptions] = useState([]); // Initialize state for city options
    useEffect(() => {
        // Fetch city data from the API
        fetch('https://api.retvenshotels.com/propertycity')
            .then((response) => response.json())
            .then((data) => {
                // Update the state with the fetched city options
                setCityOptions(data);
            })
            .catch((error) => {
                console.error('Error fetching city data:', error);
            });
    }, []); // Fetch city data when the component mounts

    const handleSearch = () => {
        // Make an API request to fetch hotels by city
        fetch(`https://api.retvenshotels.com/getPropertyByCity/${selectedCity}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                // Update the hotels state with the fetched data
                setHotels(data);
            })
            .catch((error) => {
                console.error('Error fetching hotel data:', error);
            });
    };

    const hotelname = {
        marginTop: "-650px",
        marginLeft: "-10px"
    }
    function handleClick(hotelId) {
        navigate(`/hotel-detail/${hotelId}`);
    }

    return (

        <div>
            <head>
                <link rel='stylesheet' href='/assets/css/style.css'></link>
                <link rel='stylesheet' href='/assets/css/style.css.map'></link>
                <link rel='stylesheet' href='/assets/css/plugin.css'></link>
                <link rel='stylesheet' href='/assets/css/bootstrap.min.css'></link>
            </head>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: 'url(assets/images/bg/bg1.jpg)' }}>
                <div className="section-shape section-shape1 top-inherit bottom-0" style={{ backgroundImage: 'url(assets/images/shape8.png)' }} />
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Hotel List</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                {/* <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Hotel Lists</li>
                                </ul> */}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay" />
            </section>
            <section className="trending pb-0 pt-6">
                <div className="container">
                    <div className="book-form">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col-lg-4 mb-2">
                                <div className="form-group">
                                    <div className="input-box">
                                        <select
                                            className="niceSelect"
                                            value={selectedCity}
                                            onChange={(e) => setSelectedCity(e.target.value)}
                                        >
                                            <option value={"null"}>Select Destination</option>
                                            {/* Map through the cityOptions and generate options */}
                                            {cityOptions.map((city) => (
                                                <option key={city.id} value={city.id}>
                                                    {city.city ? city.city.city :''}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-2">
                                <div className="form-group mb-0 text-center">
                                    <a href="#" className="nir-btn w-90" style={{ marginLeft: "-1250px" }} onClick={handleSearch}><i className="fa fa-search mr-1" /> Search
                                        Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center" id="img">
                        {hotels && hotels.map((hotel, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={index}>
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src={hotel.coverPhoto ? hotel.coverPhoto.coverPhoto : ''} alt={hotel.name} height="400px" />
                                        <div className="position-absolute p-4 w-20 z-index" style={{ bottom: 0, marginLeft: 0 }}>
                                            <h6 className="m-0 white ml-0">{hotel.country}</h6>
                                        </div>
                                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <span className="white bg-theme p-1 px-2 rounded" style={hotelname}>
                                                <h5 className="mb-0">{hotel.propertyName ? hotel.propertyName.propertyName : ''}</h5>


                                            </span>
                                            <span className="white bg-theme p-1 ml-0 px-2 rounded" style={{ marginLeft: "-220px" }}>

                                                <a className="white" class="text-decoration-none" onClick={() => handleClick(hotel.propertyId)} style={{ color: "white" }}>SEE AVAILABLE ROOMS</a>

                                            </span>

                                            {/* <h6 className="m-0 white">{hotel.hotel_country}</h6>   */}

                                        </div>

                                        <div className="color-overlay"></div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <div id="back-to-top">
                <a href="#" />
            </div>
        </div>
    )
}
export default HotelList