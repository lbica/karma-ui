import React, { useState } from "react";
// import "./App.css";
import Header from "./components/Header/Header";


import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
//import store from "./store";


import Layout from "./components/Layout/Layout";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <Layout/>
    </div>
  );
}

export default App;
