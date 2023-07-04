import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar  />
      <Homepage />
    </div>
  );
}

export default App;
