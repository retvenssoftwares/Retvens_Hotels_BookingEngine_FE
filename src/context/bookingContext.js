import { createContext, useState } from "react";


export const BookingContext = createContext();



export function BookingProvider({ children }) {
  const [roomType, setRoomType] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [adultValue, setAdultValue] = useState(0)
  const [childValue,setChildValue] = useState(0)
  const [checkIn,setCheckIn] =useState(new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0])
  const[checkOut,setCheckOut] =useState(new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0])
  const[rooms,setRooms] = useState([""])
  const [roomSelected, setRoomSelected] = useState([]);
  const [totalRooms, setTotalRoom] = useState([]);
  //const [totalAmount, setTotalAmount,] = useState(0);
  const updateValue = (value) => {
    setAdultValue((prev) => value)
    
  }
  const updateChildValue = (value) => {
    setChildValue((prev) => value)
    
  }
  const updateCheckInValue = (value) => {
    setCheckIn((prev) => value)
    
  }
  const updateCheckOutValue = (value) => {
    setCheckOut((prev) => value)
    
  }

  const updateRoomValue =(value) =>{
    setRooms((prev)=>value)
  }
  
  return (
    <BookingContext.Provider value={{
      roomType, setRoomType,
      totalAmount, setTotalAmount,
      adultValue, setAdultValue, updateValue,
      childValue,setChildValue,updateChildValue,
      checkIn,setCheckIn,updateCheckInValue,
      checkOut,setCheckOut,updateCheckOutValue,
      rooms,setRooms,updateRoomValue,
      roomSelected, setRoomSelected,
      totalRooms,setTotalRoom
     

    }}>
      {children}
    </BookingContext.Provider>
  );
}

