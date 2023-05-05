import React, { useState, useEffect } from 'react';
import {PlayerHeader} from "../components/PlayerHeader";
import {PlayerSlider} from "../components/PlayerSlider";
import { FooterMenu } from "../components/FooterMenu";
import { Loading } from '../components/Loading';

export function Player() {
  const url = 'http://18.117.98.49:5000/api/v1/files'

  const [isLoading, setIsloading] = useState(true)
  const [api, setApi] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data=>{
        console.log({data});
        setApi(data)
        setIsloading(false);
      })
  }, [])

  return (
    <div className="Player">
      <PlayerHeader />
      {isLoading ? <Loading /> : <PlayerSlider api={api}/>}
      <FooterMenu/>
    </div>
  )
}
