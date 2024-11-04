import React, { Children, createContext, useState } from "react";

export const StoreContext = createContext({});

const StoreContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleBtn = (btnCurrentValue) => {
    // console.log(btnCurrentValue);
    if (btnCurrentValue === "increase") {
      setCount(count + 1);
    } else if (btnCurrentValue === "reset") {
      setCount(0);
    } else if (btnCurrentValue === "decrease") {
      setCount(count - 1);
    }
  };
  const exportPropertiesAndMethod = { count, handleBtn };
  return (
    <StoreContext.Provider value={exportPropertiesAndMethod}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
