import React from 'react';
import {PlayerHeader} from "../components/PlayerHeader";
import {PlayerSlider} from "../components/PlayerSlider";
import {FooterMenu} from "../components/FooterMenu"

import { useState } from 'react';
import { useEffect } from 'react';

export function Player() {
  const url = 'http://18.117.98.49:5000/api/v1/files'

  const [api, setApi] = useState([])
  useEffect(()=>{
    fetch(url)
      .then(response => response.json())
      .then(data=>{
        console.log(data[1].fileUrl);
        
        setApi(data)
      })
  },[])

  
  
  return (
    <div className="Player">
      <PlayerHeader />
      <PlayerSlider api={api} />
      <FooterMenu/>
    </div>
  )
}