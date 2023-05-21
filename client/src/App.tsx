import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  )
};

export default App;
