import React, { useState } from "react";
import { Header } from "../components/Header";
import { HomeSliderSong } from "../components/HomeSliderSong";
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
      <div className="Song-container">
        <h2>Canciones</h2>
        {songs.map(({ title, artist, img }) => {
          return <Song key={title} img={img} title={title} artist={artist} />;
        })}
      </div>
      <Categories />
      <button className="AddButton-button-home" onClick={handleModal}>
        Agrega Tu Archivo
      </button>
      <Add see={seeModal} notSee={setSeeModal} />
    </div>
  );
}
