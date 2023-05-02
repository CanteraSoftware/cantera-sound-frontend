import React from "react";
import { Header } from "../components/Header";
import { Song } from "../components/Song";
import { FooterMenu } from "../components/FooterMenu";
import { api } from "../exports/api";
import "../styles/Category.css";

export function Category() {
  return (
    <div>
      <Header />
      <div className="Category">
        <Song />
        <div className="Category-song-container">
          <h2>Canciones</h2>
          {api.map((song) => {
            return <Song
              key={song.id}
              img={song.imageUrl}
              title={song.nameFile}
              artist={song.nameAuthor}
            />;
          })}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}
