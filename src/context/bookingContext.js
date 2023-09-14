import { createContext, useState } from "react";


const TotalAmountContext = createContext();



export function TotalAmountProvider({ children }) {
  const [roomType, setRoomType] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <TotalAmountContext.Provider value={{ roomType, setRoomType, totalAmount, setTotalAmount }}>
      {children}
    </TotalAmountContext.Provider>
  );
}

export default TotalAmountContext;
