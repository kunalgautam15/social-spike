import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomQuote from "./pages/CustomQuote";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-quote" element={<CustomQuote />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;