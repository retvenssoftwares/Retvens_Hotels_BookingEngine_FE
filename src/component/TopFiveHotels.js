    import React,{useState,useEffect} from "react";

    function TopHotel(){
        const [hotels, setHotels] = useState([]);
        useEffect(() => {
            // Fetch data from the API
            fetch('https://api.retvenshotels.com/api/get/hotels')
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then(data => {
                // Ensure that data.topHotelsWithDetails is an array before setting it to the state
                if (Array.isArray(data.topHotelsWithDetails)) {
                  setHotels(data.topHotelsWithDetails);
                } else {
                  console.error('API response does not contain topHotelsWithDetails array:', data);
                }
              })
              .catch(error => {
                console.error('Error fetching hotel data:', error);
              });
          }, []);
       return(
        <section className="trending pb-5 pt-0">
      <div className="container">
        <div className="section-title mb-6 w-50 mx-auto text-center">
          <h4 className="mb-1 theme1">Top Hotels</h4>
          <h2 className="mb-1">Explore <span className="theme">Top Hotels</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="row align-items-center">
          {hotels.map((hotel,index) => (
            <div className="col-lg-6 col-md-6 col-sm-6 mb-4" key={index}>
              <div className="trend-item1">
                <div className="trend-image position-relative rounded">
                  <img src={hotel.hotel_cover_photo} alt={hotel.name} height="400px" />
                  <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                    <div className="trend-content-title">
                      <h5 className="mb-0"><a href="tour-grid.html" className="theme1">{hotel.hotel_country}</a></h5>
                      <h3 className="mb-0 white">{hotel.city}</h3>
                    </div>
                    <span className="white bg-theme p-1 px-2 rounded">{hotel.tours} Tours</span>
                  </div>
                  <div className="color-overlay" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
       )
    }
    export default TopHotel