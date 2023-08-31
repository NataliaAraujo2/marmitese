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
import Desserts from "./components/Services/Service/Desserts";
import Coffee from "./components/Services/Service/Coffee";
import Broths from "./components/Services/Service/Broths";
import { AuthProvider } from "./components/context/AuthContext";
import Products from "./pagesadmin/Products/Products";
//swiper
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useEffect, useState } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
import { onAuthStateChanged } from "firebase/auth";





register();
function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route path="/register" element={!user ? <Register /> :  <Navigate to="/" /> } />
              <Route path="/pocket" element={<Pocket />} />
              <Route path="/desserts" element={<Desserts />} />
              <Route path="/coffee" element={<Coffee />} />
              <Route path="/broths" element={<Broths />} />
              <Route path="/admin/products" element={<Products />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
