import React, { useState, useEffect } from 'react';
import {PlayerHeader} from "../components/PlayerHeader";
import {PlayerSlider} from "../components/PlayerSlider";
import { FooterMenu } from "../components/FooterMenu";
import { LoadingPlayer } from '../components/LoadingPlayer';

export function Player() {
  const [isLoading, setIsloading] = useState(true)
  const [api, setApi] = useState([])
  const [_, categoryNumberYId] = window.location.href.split('=');
  const [idUrl, categoryId] = categoryNumberYId.split('&');
  const index = api.findIndex((item)=> item.id === Number(idUrl))
  const url = `http://18.117.98.49:5000/api/v1/categories/${categoryId}`;
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data=>{
        setApi(data.files)
        setIsloading(false);
      })
  }, [])
  
  return (
    <div className="Player">
      <PlayerHeader />
      {isLoading ? <LoadingPlayer /> : <PlayerSlider api={api} indexp={index}/>}
      <FooterMenu/>
    </div>
  )
}
