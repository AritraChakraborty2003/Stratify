import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Banner1 from "./components/Banner1";
import MarqueeHeader1 from "./components/MarqueeHeader1";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header1 from "./components/Header1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
