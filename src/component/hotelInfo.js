
function HotelInfo({roomData}) {
    return (
        <>
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
                    justifyContent: "flex-start",
                    alignItems:"start",
                    marginTop:"-60px"
                  }}
                >
                  <img
                    src={roomData.hotel_logo}
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
                    {roomData.hotel_name}
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
                      {roomData.hotel_address_line_1 + ",  "}
                    </label>
                    <label
                      className="mb-0"
                      style={{
                        color: "#ffffff",
                        fontSize: "17px",

                        textAlign: "left",
                      }}
                    >
                      {roomData.hotel_address_line_2}
                    </label>
                  </div>
                  <label
                    style={{
                      color: "#fff",
                      textAlign: "left",
                    }}
                  >
                    {roomData.hotel_description}
                  </label>
                </div>
              </nav>
            </div>
          </div>
          {/* <label className='ml-0' style={{ marginLeft: "-80px", marginTop: "60px", color:"#ACD037"  }}>description-</label> */}
        </div>

        <div className="dot-overlay" />
      </section>
        </>
    )
}

export default HotelInfo