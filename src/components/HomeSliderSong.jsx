import React from 'react';
import { Link } from 'react-router-dom';
import songs from '../exports/songs'
import '../styles/HomeSliderSong.css'

export function HomeSliderSong() {
  return (
    <div className='Slider'>
      <div className="Slider-container">
        {songs.map((song) => {
          return (
            <Link to='/player' key={song.title} className="Slider-song">
              <img src={song.img} alt={song.title} />
              <div className='Slider-description'>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
