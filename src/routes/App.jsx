import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Player } from "../components/Player";
import { Category } from "../components/Category";
import { NotFound } from "../components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/category" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
