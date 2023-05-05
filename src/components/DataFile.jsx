import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/DataFile.css'

export function DataFile({title, artist, img}) {
  return (
    <div className='DataFile'>
      <ul>
        <li>
          <Link className='DataFile-content' to='/player'>
            <img src={img} alt="" />
            <div className="DataFile-description">
              <h3>{ title }</h3>
              <p>{ artist }</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
