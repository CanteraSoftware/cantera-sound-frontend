import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../containers/Home";
import { Player } from "../containers/Player";
import { Category } from "../containers/Category";
import { NotFound } from "../containers/NotFound";

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
