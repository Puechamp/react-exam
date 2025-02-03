import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import HeroPage from "../pages/HeroPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/heroes" element={<HeroPage />} />
    </Routes>
  );
}
