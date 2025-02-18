import { createContext, useContext, useState } from "react";


const CountContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount((val) => (val > 0 ? val - 1 : 0));
  };

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );

}

 export const useCount = () => {
  return useContext(CountContext);
};