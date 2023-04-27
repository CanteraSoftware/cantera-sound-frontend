import React from "react";
import { Link } from "react-router-dom";
import '../styles/NotFound.css'


import logoApp from '../images/cat.png';
import imgError from '../images/pexels-lucas-pezeta-2930204.png'

export function NotFound(){
  return(
    
    <div className='NotFound-header'>
      <div className="NotFound-header-title">
        <div className="NotFound-header-content-title">
          <img className="NotFound-header-logoApp" src={logoApp} alt="" />
            <h1>Cantera <span>Music</span></h1>
        </div>
      </div>
      <main>
      <div className="NotFound-content-imgError">
          <img className="NotFound-imgError" src={imgError} alt="gatoBurlon" />
          <h1 className="NotFound-error-LineText">Oops!!<br/>No encontramos<br/>lo que buscabas.</h1>
          <Link className="NotFound-error-volver" to="/">Volver</Link>
      </div>
      </main>
    </div>
  )
}