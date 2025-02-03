import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import ApiFetch from "../API/ApiFetch";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
