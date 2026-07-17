import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ProductViewer from "./components/ProductViewer";

function App() {
  return (
    <main>
      <NavBar />
      <Header/>
      <ProductViewer/>
    </main>
  );
}

export default App;
