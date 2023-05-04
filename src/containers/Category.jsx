import {React, useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Song } from "../components/Song";
import { FooterMenu } from "../components/FooterMenu";
// import { api } from "../exports/api";
import "../styles/Category.css";


export function Category() {
  const url = 'http://18.117.98.49:5000/api/v1/files'

  const [api, setApi] = useState([])
  useEffect(()=>{
    fetch(url)
      .then(response => response.json())
      .then(data=>{
        setApi(data)
      })
  },[])

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
