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
              <h4>{ title }</h4>
              <p>{ artist }</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}