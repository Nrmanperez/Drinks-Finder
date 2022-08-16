import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingLayout from "./components/layouts/LandingLayout";
import { CategorysProvider } from "./context/CategorysProvider";
import HookForm from "./pages/HookForm";

import Landing from "./pages/Landing";

export default function App() {
  return (
    <CategorysProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/search" element={<LandingLayout><HookForm /></LandingLayout>} />
          </Routes>
        </Router>
    </CategorysProvider>
  );
}
