import React, { useState } from "react";
import { Header } from "../components/Header";
import { HomeSliderSongOne } from "../components/HomeSliderSongOne";
import { HomeSliderSongTwo } from "../components/HomeSliderSongTwo";
import { HomeSliderSongThree } from "../components/HomeSliderSongThree";
import { Categories } from "../components/Categories";
import { Add } from "../components/Add";
import "../styles/Home.css";

export function Home() {
  const [seeModal, setSeeModal] = useState(false);

  const handleModal = () => {
    setSeeModal(!seeModal);
  };

  return (
    <div className="Home">
      <Header />
      <div className="Home-song-container">
        <h2>Canciones</h2>
        <div className="Home-song-container-slider">
          <HomeSliderSongOne />
          <HomeSliderSongTwo />
          <HomeSliderSongThree />
        </div>
      </div>
      <Categories />
      <div className="Home-add-button-container">
        <button className="Home-add-button" onClick={handleModal}>
          Agrega Tu Archivo
        </button>
      </div>
      <Add see={seeModal} notSee={setSeeModal} />
    </div>
  );
}
