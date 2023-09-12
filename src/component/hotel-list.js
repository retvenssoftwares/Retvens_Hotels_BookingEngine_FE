import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
                const response = await fetch('http://localhost:8000/api/get/hotels');
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
        fetch('http://localhost:8000/api/get/hotel_city')
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
        fetch(`http://localhost:8000/api/get/hotel_by_city/${selectedCity}`)
          .then((response) => response.json())
          .then((data) => {
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
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Hotel Lists</li>
                                </ul>
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
                                            <option value={1}>Select Destination</option>
                                            {/* Map through the cityOptions and generate options */}
                                            {cityOptions.map((city) => (
                                                <option key={city.id} value={city.id}>
                                                    {city}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 mb-6">
                                <div className="form-group">
                                    <label className="checkIn-text">Check-in</label>
                                    <div className="input-box">
                                        <input type="date" name="date" />
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-lg-3 mb-6">
                                <div className="form-group">
                                    <label className="checkIn-text">Check-out</label>
                                    <div className="input-box">
                                        <input type="date" name="date" />
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-lg-3 mb-2">
                                <div className="form-group mb-0 text-center">
                                    <a href="#" className="nir-btn w-90" style={{ marginLeft: "-1250px" }} onClick={handleSearch}><i className="fa fa-search mr-1" /> Search
                                        Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center" id="img">
                        {hotels.map((hotel, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={index}>
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src={hotel.hotel_cover_photo} alt={hotel.name} height="400px" />
                                        <div className="position-absolute p-4 w-20 z-index" style={{ bottom: 0, marginLeft: 0 }}>
                                            <h6 className="m-0 white ml-0">{hotel.hotel_country}</h6>
                                        </div>
                                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <span className="white bg-theme p-1 px-2 rounded" style={hotelname}>
                                                <h5 className="mb-0">{hotel.hotel_name}</h5>


                                            </span>
                                            <span className="white bg-theme p-1 ml-0 px-2 rounded" style={{ marginLeft: "-220px" }}>

                                                <a className="white" class="text-decoration-none" onClick={() => handleClick(hotel.hotel_id)} style={{ color: "white" }}>SEE AVAILABLE ROOMS</a>

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

            <footer className="pt-20 pb-4" style={{ backgroundImage: 'url(assets/images/background_pattern.png)' }}>
                <div className="section-shape top-0" style={{ backgroundImage: 'url(assets/images/shape8.png)' }} />

                <div className="footer-upper pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 pe-4">
                                <div className="footer-about">
                                    <img src="/assets/images/Retvens-Hotels-Resized.png" alt="" height="75px" />
                                    <p className="mt-3 mb-3 white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio suspendisse leo neque iaculis molestie sagittis maecenas aenean eget molestie sagittis.
                                    </p>
                                    <ul>
                                        <li className="white"><strong>PO Box:</strong> +47-252-254-2542</li>
                                        <li className="white"><strong>Location:</strong> Collins Street, sydney, Australia</li>
                                        <li className="white"><strong>Email:</strong> info@Travelin.com</li>
                                        <li className="white"><strong>Website:</strong> www.Travelin.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 mb-4">
                                <div className="footer-links">
                                    <h3 className="white">Quick link</h3>
                                    <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="about-us.html">Delivery Information</a></li>
                                        <li><a href="about-us.html">Privacy Policy</a></li>
                                        <li><a href="about-us.html">Terms &amp; Conditions</a></li>
                                        <li><a href="about-us.html">Customer Service</a></li>
                                        <li><a href="#about-us.html">Return Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-payment">
                    <div className="container">
                        <div className="row footer-pay align-items-center justify-content-between text-lg-start text-center">
                            <div className="col-lg-8 footer-payment-nav mb-4">
                                <ul className>
                                    <li className="me-2">We Support:</li>
                                    <li className="me-2"><i className="fab fa-cc-mastercard fs-4" /></li>
                                    <li className="me-2"><i className="fab fa-cc-paypal fs-4" /></li>
                                    <li className="me-2"><i className="fab fa-cc-stripe fs-4" /></li>
                                    <li className="me-2"><i className="fab fa-cc-visa fs-4" /></li>
                                    <li className="me-2"><i className="fab fa-cc-discover fs-4" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <div className="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
                            <div className="copyright-text">
                                <p className="m-0 white">2022 Travelin. All rights reserved.</p>
                            </div>
                            <div className="social-links">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="particles-js" />
            </footer>
            footer ends
            Back to top start
            <div id="back-to-top">
                <a href="#" />
            </div>
            Back to top ends
            search popup
            <div id="search1">
                <button type="button" className="close">×</button>
                <form>
                    <input type="search" defaultValue placeholder="type keyword(s) here" />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
            login registration modal
            <div className="modal fade log-reg" id="exampleModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="post-tabs">
                                tab navs
                                <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button aria-controls="login" aria-selected="false" className="nav-link active" data-bs-target="#login" data-bs-toggle="tab" id="login-tab" role="tab" type="button">Login</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button aria-controls="register" aria-selected="true" className="nav-link" data-bs-target="#register" data-bs-toggle="tab" id="register-tab" role="tab" type="button">Register</button>
                                    </li>
                                </ul>
                                tab contents
                                <div className="tab-content blog-full" id="postsTabContent">
                                    popular posts
                                    <div aria-labelledby="login-tab" className="tab-pane fade active show" id="login" role="tabpanel">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="blog-image rounded">
                                                    <a href="#" style={{ backgroundImage: 'url(assets/images/trending/trending5.jpg)' }} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <h4 className="text-center border-b pb-2">Login</h4>
                                                <div className="log-reg-button d-flex align-items-center justify-content-between">
                                                    <button type="submit" className="btn btn-fb">
                                                        <i className="fab fa-facebook" /> Login with Facebook
                                                    </button>
                                                    <button type="submit" className="btn btn-google">
                                                        <i className="fab fa-google" /> Login with Google
                                                    </button>
                                                </div>
                                                <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                                                <form method="post" action="#" name="contactform" id="contactform">
                                                    <div className="form-group mb-2">
                                                        <input type="text" name="user_name" className="form-control" id="fname" placeholder="User Name or Email Address" />
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input type="password" name="password_name" className="form-control" id="lpass" placeholder="Password" />
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input type="checkbox" className="custom-control-input" id="exampleCheck" />
                                                        <label className="custom-control-label mb-0" htmlFor="exampleCheck1">Remember me</label>
                                                        <a className="float-end" href="#">Lost your password?</a>
                                                    </div>
                                                    <div className="comment-btn mb-2 pb-2 text-center border-b">
                                                        <input type="submit" className="nir-btn w-100" id="submit" defaultValue="Login" />
                                                    </div>
                                                    <p className="text-center">Don't have an account? <a href="#" className="theme">Register</a></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    Recent posts
                                    <div aria-labelledby="register-tab" className="tab-pane fade" id="register" role="tabpanel">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="blog-image rounded">
                                                    <a href="#" style={{ backgroundImage: 'url(assets/images/trending/trending5.jpg)' }} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <h4 className="text-center border-b pb-2">Register</h4>
                                                <div className="log-reg-button d-flex align-items-center justify-content-between">
                                                    <button type="submit" className="btn btn-fb">
                                                        <i className="fab fa-facebook" /> Login with Facebook
                                                    </button>
                                                    <button type="submit" className="btn btn-google">
                                                        <i className="fab fa-google" /> Login with Google
                                                    </button>
                                                </div>
                                                <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                                                <form method="post" action="#" name="contactform1" id="contactform1">
                                                    <div className="form-group mb-2">
                                                        <input type="text" name="user_name" className="form-control" id="fname1" placeholder="User Name" />
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input type="text" name="user_name" className="form-control" id="femail" placeholder="Email Address" />
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input type="password" name="password_name" className="form-control" id="lpass1" placeholder="Password" />
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input type="password" name="password_name" className="form-control" id="lrepass" placeholder="Re-enter Password" />
                                                    </div>
                                                    <div className="form-group mb-2 d-flex">
                                                        <input type="checkbox" className="custom-control-input" id="exampleCheck1" />
                                                        <label className="custom-control-label mb-0 ms-1 lh-1" htmlFor="exampleCheck1">I have read and accept the Terms and Privacy Policy?</label>
                                                    </div>
                                                    <div className="comment-btn mb-2 pb-2 text-center border-b">
                                                        <input type="submit" className="nir-btn w-100" id="submit1" defaultValue="Register" />
                                                    </div>
                                                    <p className="text-center">Already have an account? <a href="#" className="theme">Login</a></p>
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
        </div>
    )
}
export default HotelList