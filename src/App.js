//CSS
import "./App.css";
//Routes
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Pocket from "./components/Services/Service/Pocket";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pocket" element={<Pocket />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
