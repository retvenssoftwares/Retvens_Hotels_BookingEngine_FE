

function Navbar() {
    return (
        <>
            {/* <link rel='stylesheet' href='/assets/css/style.css'></link>
        <link rel='stylesheet' href='/assets/css/style.css.map'></link>
        <link rel='stylesheet' href='/assets/css/plugin.css'></link>
        <link rel='stylesheet' href='/assets/css/bootstrap.min.css'></link> */}
            {/* <div id="preloader">
                <div id="status"></div>
            </div> */}
            <header className="main_header_area">
                <div className="header-content py-1 bg-theme">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div className="links">
                            <ul>
                                <li><a href="#" className="white"><i className="icon-calendar white"></i> Thursday, Mar 26, 2021</a>
                                </li>
                                <li><a href="#" className="white"><i className="icon-location-pin white"></i> Hollywood, America</a>
                                </li>
                                <li><a href="#" className="white"><i className="icon-clock white"></i> Mon-Fri: 10 AM – 5 PM</a></li>
                            </ul>
                        </div>
                        <div className="links float-right">
                            <ul>
                                <li><a href="#" className="white"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="white"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="white"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="white"><i className="fab fa-linkedin " aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header_menu" id="header_menu">
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-3 pt-3">
                                <div className="navbar-header">
                                    <a className="navbar-brand">
                                        <img src="/assets/images/Retvens-Hotels-Resized.png" alt="image" height="46" width="216" />
                                    </a>
                                </div>
                                <div className="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav" id="responsive-menu" style={{marginLeft:"560px"}}>

                                        <li><a href="/home" class="text-decoration-none">Home</a></li>


                                        <li><a href="/about" class="text-decoration-none">About Us</a></li>

                                        <li className="submenu dropdown" >
                                            <a href="/hotel-list" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"  class="text-decoration-none">Hotels</a>
                                            {/* <ul className="dropdown-menu">
                                                <li><a href="/hotel-list">Destination List</a></li>
                                                <li><a href="/hotel-detail">Destination Detail</a></li>
                                            </ul> */}
                                        </li>

                                        {/* <li className="submenu dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <i className="icon-arrow-down" aria-hidden="true"></i></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="team.html">Our Guide</a></li>
                                                <li><a href="/booking">Booking</a></li>
                                                <li><a href="confirmation.html">confirmation</a></li>
                                                <li className="submenu dropdown">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="services.html">Services Lists</a></li>
                                                        <li><a href="services-detail.html">Service Detail</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu dropdown">
                                                    <a href="gallery.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gallery<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="gallery.html">Gallery</a></li>
                                                        <li><a href="gallery1.html">Gallery Masonry</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu dropdown">
                                                    <a href="404.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Error<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="404.html">Error Page 1</a></li>
                                                        <li><a href="404-1.html">Error Page 2</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="login.html">Login|Register</a></li>
                                                <li><a href="comingsoon.html">Coming Soon</a></li>
                                                <li><a href="testimonials.html">Testimonials</a></li>
                                                <li><a href="faq.html">Faq</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                                <li><a href="dashboard/dashboard.html">Dashboard</a></li>
                                            </ul>
                                        </li> */}


                                    </ul>
                                </div>
                                <div className="register-login d-flex align-items-center">
                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" className="me-3" class="text-decoration-none">
                                        <i className="icon-user"></i> Login/Register
                                    </a> */}
                                    <a href="#" className="nir-btn white">Book Now</a>
                                </div>

                                <div id="slicknav-mobile"></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="tet"></div>
        </>
    )
}
export default Navbar