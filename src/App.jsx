import "./App.css";

import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import Layout from "./components/Layout/Layout";



function App() {

  
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Layout />}>

          <Route path="/" element={<Main />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
