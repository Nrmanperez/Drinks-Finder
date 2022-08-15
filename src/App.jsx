import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingLayout from "./components/layouts/LandingLayout";
import { BebidasProvider } from "./context/BebidasProvider";
import { CategoriasProvider } from "./context/CategoriasProvider";
import HookForm from "./pages/HookForm";

import Landing from "./pages/Landing";

export default function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/search" element={<LandingLayout><HookForm /></LandingLayout>} />
          </Routes>
        </Router>
      </BebidasProvider>
    </CategoriasProvider>
  );
}
