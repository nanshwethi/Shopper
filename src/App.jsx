import React from "react";
import "./index.css";
import Paths from "./routes/Paths";
import Footer from "./pages/Footer";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="tw-font-jost">
      <Nav/>
      <Paths />
      <Footer/>
    </div>
  );
};

export default App;
