import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./App.css";
// import SupportEngine from "./SupportEngine";
import "./style.css";


function Main() {
  // <SupportEngine />
ReactDOM.createRoot(document.getElementById("root")).render(
 
    <BrowserRouter>    
      <App />     
    </BrowserRouter>
 
);}
export default Main;
