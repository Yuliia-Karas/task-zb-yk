import "./App.css";
import { useEffect } from "react";
import { useAuth } from "./hooks/index";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import Layout from "./components/Layout/Layout";

function App() {
  const {  token } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token,navigate]);


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
