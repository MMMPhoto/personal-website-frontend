import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Software from "./pages/Software/Software";
import Photography from "./pages/Photography/Photography";
import Videography from "./pages/Videography/Videography";
import Contact from "./pages/Contact/Contact";
import './App.css';

const App = () => {
  return (
    <Router>
      <div id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />\
        <Route path="/Software" element={<Software />} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="/Videography" element={<Videography />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
    </Router>
  )
};

export default App;
