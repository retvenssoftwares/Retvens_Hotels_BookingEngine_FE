import { useContext, useMemo, useState } from "react";
import TotalAmountContext from "../context/bookingContext";

const RoomCardData = ({ data  }) => {
  const [containerVisible, setContainerVisible] = useState(false);
  const [counterValue, setCounterValue] = useState(0);
  const [roomSelected, setRoomSelected] = useState([])
  //const [totalAmount, setTotalAmount] = useState(0)
  const {totalAmount, setTotalAmount} = useContext(TotalAmountContext)
  const toggleButton = () => {
    setContainerVisible(!containerVisible);
  };

  const incrementCounter = () => {
    setCounterValue(counterValue + 1);
    setRoomSelected((prev) => [
      ...prev,
      { name: "Room " + (roomSelected.length + 1), adult: 1, child: 0 },
    ]);
    setTotalAmount((prev) => prev + 10000);
  };

  const decrementCounter = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);

      setTotalAmount((prev) => prev - 10000);

      const arr = [...roomSelected];
      arr.pop();
      setRoomSelected(arr);
    } else {
      toggleButton(); // Convert back to button when counter is less than 1
    }
  };

  const buttonStyle = {
    width: "50px",
    height: "30px",
  };


  return (
    <>
      <div className="room-box">

        <div
          className="col-lg-4"
          // onClick={() => openModal(0)}
          style={{ cursor: "pointer" }}
        >
          <img
            src="/assets/images/hotel.png"
            alt=""
            className="room-image"
          />
        </div>

        <div className="room-info">
          <div className="room-type-info" style={{ textAlign: "left" }}>
            <h4 style={{ whiteSpace: "nowrap" }}>{data.Roomtype_Name}</h4>
            <label>ROOM RATES EXCLUSIVE OF TAX</label>
            <br />
            <label>MAX 5 Guests</label>
          </div>
          <div>
            <h5>Rs.10000.00</h5>
            <p style={{ whiteSpace: "nowrap", color: "black" }}>
              PER NIGHT
            </p>
            <p style={{ whiteSpace: "nowrap", color: "green" }}>
              10 Rooms Left
            </p>

            {containerVisible ? (
              <div>
                <button onClick={decrementCounter} style={buttonStyle}>
                  -
                </button>
                <input
                  type="text"
                  value={counterValue}
                  readOnly
                  style={buttonStyle}
                />
                <button onClick={incrementCounter} style={buttonStyle}>
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={toggleButton}
                className="add-room"
                style={{

                }}
              >
                Add Room
              </button>
            )}
          </div>
        </div>
       
      </div>
      <div>
          {roomSelected.length > 0 &&
            roomSelected.map((room, index) => {
              const handleChange = (event) => {
                const { name, value } = event.target;
                setRoomSelected((prevRooms) =>
                  prevRooms.map((prevRoom, prevIndex) =>
                    prevIndex === index
                      ? { ...prevRoom, [name]: parseInt(value) }
                      : prevRoom
                  )
                );
              };

              return (
                <div key={index} className="select-room">
                  <h5>{room.name}</h5>
                  <div className="">
                    <label htmlFor="adult">Adult</label>
                    <select
                      name="adult"
                      value={room.adult}
                      onChange={handleChange}
                      id={`adult-${index}`} // Add a unique ID
                    >
                      {[0, 1, 2].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="child">Children</label>
                    <select
                      name="child"
                      value={room.child}
                      onChange={handleChange}
                      id={`child-${index}`} // Add a unique ID
                    >
                      {[0, 1, 2].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}
        </div>
    </>
  )
}




function RoomCard({ roomData }) {
  const [totalAmount, setTotalAmount] = useState(0)
  return (
    <>
      {roomData && roomData.map((room, index) => {
        return (
          <div key={index}>
            <RoomCardData data={room} setTotalAmount={setTotalAmount} />
          </div>
        )
      })}
    </>
  )
}
export default RoomCardData;
