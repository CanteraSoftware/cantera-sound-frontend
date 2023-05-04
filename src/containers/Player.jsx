import React, { useState, useEffect } from 'react';
import {PlayerHeader} from "../components/PlayerHeader";
import {PlayerSlider} from "../components/PlayerSlider";
import { FooterMenu } from "../components/FooterMenu";
import '../styles/Player.css'

export function Player() {
  const url = 'http://18.117.98.49:5000/api/v1/files'

  const [isLoading, setIsloading] = useState(false)
  const [api, setApi] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data=>{
        console.log({data});
        setApi(data)
        setIsloading(true);
      })
  }, [])

  return (
    <div className="Player">
      <PlayerHeader />
      {isLoading ? <PlayerSlider api={api}/> : <div className='Player-loading'>Loading...</div>}
      <FooterMenu/>
    </div>
  )
}
