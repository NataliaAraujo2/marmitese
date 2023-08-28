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
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
//swiper
import { register } from "swiper/element/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Desserts from "./components/Services/Service/Desserts";
import Coffee from "./components/Services/Service/Coffee";
import Broths from "./components/Services/Service/Broths";


register();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pocket" element={<Pocket />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/broths" element={<Broths />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
