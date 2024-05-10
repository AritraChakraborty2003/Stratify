import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Banner1 from "./components/Banner1";
import MarqueeHeader1 from "./components/MarqueeHeader1";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header1 from "./components/Header1";
import Signup from "./components/Signup";
import Login from "./components/Login";
import First from "./components/First";
import DashBoard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
