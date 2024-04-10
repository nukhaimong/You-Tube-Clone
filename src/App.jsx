import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryID/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
