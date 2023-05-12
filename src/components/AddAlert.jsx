import React from 'react';
import '../styles/AddAlert.css'
import { Link } from 'react-router-dom';

//icons
import { VscHome } from 'react-icons/vsc'
import { BsPlayCircle } from 'react-icons/bs'

export function AddAlert() {
  return (
    <div className='AddAlert'>
      <div className="AddAlert-container">
        <div className="AddAlert-container-title">
          <h2>Archivo Guardado <br /><span>Exitosamente</span>.</h2>
        </div>
        <div className="AddAlert-container-btn">
          <Link className='AddAlert-btn' to={'/'}>
            <VscHome className='AddAlert-btn-icon' />
            Ir al inicio
          </Link>
          <Link className='AddAlert-btn' to={'/'}>
            <BsPlayCircle className='AddAlert-btn-icon' />
            Reproducir audio
          </Link>
        </div>
      </div>
    </div>
  );
}
