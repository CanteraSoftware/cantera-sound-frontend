import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Song.css'

export function Song({title, artist, img}) {
  return (
    <div className='Song'>
      <ul>
        <li>
          <Link className='Song-content' to='/player'>
            <img src={img} alt="" />
            <div className="Song-description">
              <h3>{ title }</h3>
              <p>{ artist }</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
