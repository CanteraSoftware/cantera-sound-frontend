import React from 'react';
import {PlayerHeader} from "../components/PlayerHeader";
import {PlayerSlider} from "../components/PlayerSlider";
import {FooterMenu} from "../components/FooterMenu"

export function Player() {
  const URL_API = 'http://18.117.98.49:5000/api/v1/'

  return (
    <div className="Player">
      <PlayerHeader />
      <PlayerSlider audioUrl="https://abril-cantera-songs.s3.sa-east-1.amazonaws.com/music/Finde-FMK-KePersonaje-BIGONE.mpeg"/>
      <FooterMenu/>
    </div>
  )
}
