import React from "react";
import { LocaleContext } from "./contexts/LocaleContext";
import Router from "./router";

const App = () => {
  return (
    <LocaleContext.Provider value={{ locale: "en-CA", currency: "CAD" }}>
      <Router />
    </LocaleContext.Provider>
  );
};

export default App;
