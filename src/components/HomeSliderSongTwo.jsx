import React from 'react';
import { Link } from 'react-router-dom';
import { api } from '../exports/api';
import '../styles/HomeSliderSong.css'

export function HomeSliderSongTwo() {
  return (
    <div className='HomeSliderSong'>
      <div className="HomeSliderSong-container">
        {api.map((song) => {
          return (
            <Link to='/player' key={song.id} className="HomeSliderSong-song">
              <img src={song.imageUrl} alt={song.nameFile} />
              <div className='HomeSliderSong-description'>
                <h3>{song.nameFile}</h3>
                <p>{song.nameAuthor}</p>
              </div>
            </Link>
          )
        }).slice(5, 10)}
      </div>
    </div>
  );
}
