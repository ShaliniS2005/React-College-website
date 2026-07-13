import { Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar";

import Homepage from "../Pages/Homepage";
import Aboutpage from "../Pages/Aboutpage";
import Coursespage from "../Pages/Coursespage";
import Departmentspage from "../Pages/Departmentspage";
import Gallerypage from "../Pages/Gallerypage";
import Contactpage from "../Pages/Contactpage";

function Approutes() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Homepage />} />

        <Route path="/about" element={<Aboutpage />} />

        <Route path="/courses" element={<Coursespage />} />

        <Route path="/departments" element={<Departmentspage />} />

        <Route path="/gallery" element={<Gallerypage />} />

        <Route path="/contact" element={<Contactpage />} />

      </Routes>
    </>
  );
}

export default Approutes;
