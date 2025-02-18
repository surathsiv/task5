import React from "react";
import { ThemeProvider }  from "./Components/CounterContext" ;
import Counter from "./Components/Counter";

const App = () => {
  return (
    <ThemeProvider>
      <Counter />
    </ThemeProvider>
  );
};

export default App;
