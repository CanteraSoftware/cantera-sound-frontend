import React from 'react';
import {PlayerHeader} from "../components/PlayerHeader";
import {PlayerSlider} from "../components/PlayerSlider";
import {FooterMenu} from "../components/FooterMenu"
import { api } from '../exports/api';

export function Player() {
  // const URL_API = 'http://18.117.98.49:5000/api/v1/'
  return (
    <div className="Player">
      <PlayerHeader />
      <PlayerSlider audioUrl={api[7].fileUrl} data={api} index={7} />
      <FooterMenu/>
    </div>
  )
}
