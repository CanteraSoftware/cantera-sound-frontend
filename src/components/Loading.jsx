import React from 'react';
import '../styles/Loading.css'

export function Loading() {
  return (
    <div className='Loading'>
      <div className="Loading-wrapper">
        <span className="Loading-circle"></span>
        <span className="Loading-circle"></span>
        <span className="Loading-circle"></span>
        <span className="Loading-shadow"></span>
        <span className="Loading-shadow"></span>
        <span className="Loading-shadow"></span>
      </div>
    </div>
  );
}
