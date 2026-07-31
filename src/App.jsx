import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import {ScrollTrigger}from 'gsap/all'
import ShowCase from "./components/ShowCase";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import HighLights from "./components/HighLights";
import Performance from "./components/performance";

gsap.registerPlugin(ScrollTrigger)
function App() {
  return (
    <main>
      <NavBar />
      <Header/>
      <ProductViewer/>
      <ShowCase/>
      <Performance/>
      <Featured/>
      <HighLights/>
      <Footer/>
    </main>
  );
}

export default App;
