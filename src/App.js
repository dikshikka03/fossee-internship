import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkshopList from "./components/WorkshopList";

function App() {
  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <WorkshopList />
    </div>
  );
}

export default App;