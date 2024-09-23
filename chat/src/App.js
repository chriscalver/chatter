import { Route, Routes } from "react-router-dom";
import "./App.css";
 import "./style.css";
import { Navbar } from "./components/Navbar";
import { About, Homer, Training, Blog } from "./components/pages";
// import SupportEngine from "./SupportEngine";

function App() {
  return (
    <div className="">   
      <Navbar />
      <Routes>
        <Route path="/racer" element={<Homer />} />{" "}
        {/* add racer sub dir for server  */}
        <Route path="/training" element={<Training />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <SupportEngine /> */}
    </div>
  );
}
export default App;
