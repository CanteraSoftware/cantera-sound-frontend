import React, { useState } from "react";
import { Header } from "../components/Header";
import { Song } from "../components/Song";
import { Categories } from "../components/Categories";
import { Add } from "../components/Add";
import "./styles/Home.css";

const songs = [
  {
    title: "Un Finde",
    artist: "Big One ~ Ke Personaje ~ FMK",
    img: "https://i1.sndcdn.com/artworks-jTy3zaoSBktD4e0K-qvgDwg-t500x500.jpg",
  },
  {
    title: "Persiana Americana",
    artist: "Soda Stereo",
    img: "https://lastfm.freetls.fastly.net/i/u/300x300/248a618cf08723dfccf2a39d3bf143a4.jpg",
  },
  {
    title: "Que Te Vaya Bien",
    artist: "Callejero Fino",
    img: "https://i.ytimg.com/vi/FpKERvWaWQs/maxresdefault.jpg",
  },
  {
    title: "You´re Beautiful",
    artist: "James Blunt",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/You%27rebeautifulsingle.jpg/220px-You%27rebeautifulsingle.jpg",
  },
  {
    title: "Enamórate De Alguien Más",
    artist: "Morat",
    img: "https://www.lahiguera.net/musicalia/artistas/morat/disco/11369/tema/22159/morat_enamorate_de_alguien_mas-portada.jpg",
  },
];

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
          return <Song
            key={title}
            img={img}
            title={title}
            artist={artist}
          />;
        })}
      </div>
      <Categories />
      <button className="AddButton-button" onClick={handleModal}>
        Agrega Tu Archivo
      </button>
      <Add see={seeModal} notSee={setSeeModal} />
    </div>
  );
}