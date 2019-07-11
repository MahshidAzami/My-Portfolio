import React from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import CallAction from "./components/CallAction/CallAction";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Photoswipe from "./components/Photoswipe/Photoswipe";
import resumeData from "./resumeData";

import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <Home resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Works resumeData={resumeData} />
      <Testimonials resumeData={resumeData} />
      <CallAction />
      <Contact resumeData={resumeData} />
      <Footer resumeData={resumeData} />
      <Photoswipe />
    </div>
  );
}

export default App;
