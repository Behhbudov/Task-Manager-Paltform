import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  const handleLogin = () => {
    setIsLogged(true);
    navigate("/main");
  };
  const handleLogout = () => {
    setIsLogged(false);
    navigate("/login");
  };

  return (
    <>
      <Header onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={isLogged ? <Navigate to="/main" /> : <Signup />}
        />
        <Route
          path="/login"
          element={
            isLogged ? <Navigate to="/main" /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/main"
          element={isLogged ? <Main /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
