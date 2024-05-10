import React from "react";
import "./main.scss"
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Search from "./Component/Search/Search";
import Support from "./Component/Support/Support";
import Info from "./Component/Info/Info";
import Lounge from "./Component/Lounge/Lounge";
import Travelers from "./Component/Travelers/Travelers";
import Subscribe from "./Component/Subscribe/Subscribe";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Search/>
        <Support/>
        <Info/>
        <Lounge/>
        <Travelers/>
        <Subscribe/>
        <Footer/>
    </div>
  );
}

export default App; 
