import React from 'react';
import {PlayerHeader} from "../components/PlayerHeader";
import {PlayerSlider} from "../components/PlayerSlider";
import {FooterMenu} from "../components/FooterMenu"
import { api } from '../exports/api';
import { useState } from 'react';
import { useEffect } from 'react';

export function Player() {
  // const URL_API = 'http://18.117.98.49:5000/api/v1/'
  const [index, setIndex] = useState(1)
  
  const updateIndex = (newVal)=>{
    setIndex(newVal)
  }
  
  return (
    <div className="Player">
      <PlayerHeader />
      <PlayerSlider audioUrl={api[index].fileUrl} data={api} index={index} updateIndex={updateIndex} />
      <FooterMenu/>
    </div>
  )
}
