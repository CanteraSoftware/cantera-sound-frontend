import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeSliderSong.css'

export function HomeSliderSongOne({api}) {
  return (
    <div className='HomeSliderSong'>
      <div className="HomeSliderSong-container">
        {api.map((song) => {
          return (
            <Link 
              to={`/player?id=${song.id}`}
              key={song.id} 
              id={song.id} 
              className="HomeSliderSong-song"
            >
              <img src={song.imageUrl} alt={song.nameFile} />
              <div className='HomeSliderSong-description'>
                <h3>{song.nameFile}</h3>
                <p>{song.nameAuthor}</p>
              </div>
            </Link>
          )
        }).slice(0, 5)}
      </div>
    </div>
  );
}
