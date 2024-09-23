import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SupportAdmin from './SupportAdmin';
import Main from './main';
// import Home from './Home';
// import SupportEngine from "./SupportEngine";

// import { BrowserRouter } from "react-router-dom";


const path = window.location.pathname;

//////  Code for Mainpage
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    
    { path.includes('/support') ? <SupportAdmin />  : <Main /> }
      {/* <SupportEngine /> */}

  </React.StrictMode>,
  document.getElementById('root')
);
