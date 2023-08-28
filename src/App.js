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
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Desserts from "./components/Services/Service/Desserts";
import Coffee from "./components/Services/Service/Coffee";
import Broths from "./components/Services/Service/Broths";
import { AuthProvider } from "./components/context/AuthContext";
import { useEffect, useState } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
import { onAuthStateChanged } from "firebase/auth";
import Orders from "./pages/Shopping/Orders";
import UserData from "./pages/User/UserData";

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
              <Route
                path="/my-orders"
                element={user ? <Orders /> : <Navigate to="/register" />}
              />
              <Route
                path="/my-data"
                element={user ? <UserData /> : <Navigate to="/register" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
