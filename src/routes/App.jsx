import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../containers/Home";
import { Player } from "../containers/Player";
import { CategorySong } from "../containers/CategorySong";
import { CategoryPodcast } from "../containers/CategoryPodcast";
import { CategoryAudioBooks } from "../containers/CategoryAudioBooks";
import { NotFound } from "../containers/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/categorysong" element={<CategorySong />} />
        <Route path="/categorypodcast" element={<CategoryPodcast />} />
        <Route path="/categoryaudiobooks" element={<CategoryAudioBooks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
