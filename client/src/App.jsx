import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import LandingPage from "./pages/LandingPage/LandingPage";
import BigSisHome from "./pages/BigSisHome/BigSisHome";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";

import BodyPositivity from "./pages/Content/BodyPositivity";
import Intimacy from "./pages/Content/Intimacy";
import Nutrition from "./pages/Content/Nutrition";
import Relationships from "./pages/Content/Relationships";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route element={<RootLayout />}>
        <Route path="/chat" element={<BigSisHome />} />

        {/* Content */}
        <Route path="/content" element={<Navigate to="/content/body" replace />} />
        <Route path="/content/body" element={<BodyPositivity />} />
        <Route path="/content/relationships" element={<Relationships />} />
        <Route path="/content/intimacy" element={<Intimacy />} />
        <Route path="/content/nutrition" element={<Nutrition />} />

        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
