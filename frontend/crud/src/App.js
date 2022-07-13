import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modalupdate from "./Modal/Modalupdate";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/update" element={<Modalupdate />} />
          <Route path="/update/:id" element={<Modalupdate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
