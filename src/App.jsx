import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import {ScrollTrigger}from 'gsap/all'
import ShowCase from "./components/ShowCase";

gsap.registerPlugin(ScrollTrigger)
function App() {
  return (
    <main>
      <NavBar />
      <Header/>
      <ProductViewer/>
      <ShowCase/>
    </main>
  );
}

export default App;
