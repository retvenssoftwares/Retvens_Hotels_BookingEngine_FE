function Navbar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <header className="main_header_area">
        <div className="header-content py-1 bg-theme">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="links">
              <ul>
                <li>
                  <a href="#" className="white">
                    <i className="icon-calendar white"></i>{" "}
                    {currentDate.toDateString()}
                  </a>
                </li>
                <li>
                  <a href="#" className="white">
                    <i className="icon-location-pin white"></i> Indore, MP
                  </a>
                </li>
              </ul>
            </div>
            <div className="links float-right">
              <ul>
                <li>
                  <a href="#" className="white">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="white">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="white">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="white">
                    <i className="fab fa-linkedin " aria-hidden="true"></i>
                  </a>
                </li>
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
                    <img
                      src="/assets/images/Retvens-Hotels-Resized.png"
                      alt="image"
                      height="46"
                      width="216"
                    />
                  </a>
                </div>
                <div
                  className="navbar-collapse1 d-flex align-items-center"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul
                    className="nav navbar-nav"
                    id="responsive-menu"
                    style={{ marginLeft: "560px" }}
                  >
                    <li>
                      <a href="/home" class="text-decoration-none">
                        Home
                      </a>
                    </li>

                    <li>
                      <a href="/about" class="text-decoration-none">
                        About Us
                      </a>
                    </li>

                    <li className="submenu dropdown">
                      <a
                        href="/hotel-list"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        class="text-decoration-none"
                      >
                        Hotels
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="register-login d-flex align-items-center">
                  {/* <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="me-3"
                  >
                    <i className="icon-user"></i> Login/Register
                  </a> */}
                  <a href="booking.html" class="nir-btn white">
                    Book Now
                  </a>
                </div>

                <div id="slicknav-mobile"></div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="tet"></div>



      
    </>
  );
}
export default Navbar;
