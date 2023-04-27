import React from "react";
import { Header } from "./Header";
import { Song } from "./Song";
import { FooterMenu } from "./FooterMenu";
import "../styles/Category.css";

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
  {
    title: "Ya no vuelvas",
    artist: "La Konga",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNy9xE84UdZ8QQuVP7MuA_sab2ThsnCAtJQ&usqp=CAU",
  },
  {
    title: "Carmesi",
    artist: "Vicente Garcia",
    img: "https://cdns-images.dzcdn.net/images/cover/6ef7b3c18eaebe26e2ad40a7872e8d2f/500x500.jpg",
  },
  {
    title: "Muchachos, Ahora nos volvimos ilusionar",
    artist: "La Mosca",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizxz7gRepBlM4aVH-JNcnKBrogOzKl020Ng&usqp=CAU",
  },
  {
    title: "High hopes",
    artist: "Panic at the Disco",
    img: "https://lastfm.freetls.fastly.net/i/u/ar0/7b944039297639ed837617053a3cd1ca.jpg",
  },
  {
    title: "Chance",
    artist: "Attaque ",
    img: "https://i.scdn.co/image/ab67616d00001e02611223656448ed75b3188d34",
  },
  {
    title: "Cuéntame",
    artist: "Luck ra ft lit",
    img: "https://m.media-amazon.com/images/I/51F43YRRqZL._UXNaN_FMjpg_QL85_.jpg",
  },
  {
    title: "Puño de Diamantes",
    artist: "Dale que va",
    img: "https://i.scdn.co/image/ab67616d0000b2731c64a3f94a3c5901abcb1b9e",
  },
];
export function Category() {
  return (
    <div>
      <Header />
      <div className="Category">
        <Song />
        <div className="Song-container">
          <h2>Canciones</h2>
          {songs.map(({ title, artist, img }) => {
            return <Song key={title} img={img} title={title} artist={artist} />;
          })}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}