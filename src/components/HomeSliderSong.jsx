import React from 'react';
import songs from '../exports/songs'
import '../styles/Slider.css'

export function Slider() {
  return (
    <div className='Slider'>
      <div className="Slider-container">
        {songs.map((song) => {
          return (
            <div key={song.title} className="Slider-song">
              <img src={song.img} alt={song.title} />
              <div className='Slider-description'>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
