import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
};

export default App;
