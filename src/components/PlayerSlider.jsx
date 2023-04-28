import {React, useState, useEffect} from "react";
import '../styles/PlayerSlider.css'

const URL_API = 'http://18.117.98.49:5000/api/v1/'



export function PlayerSlider() {
  const [songDescription, setSongDescription] = useState({name: "M.A.",
  artist: "Ni idea la verdad",})
  // useEffect(()=>{
  //   fetch(`${URL_API}files`)
  //     .then(response => response.json)
  //     .then(data=>{
  //       console.log(data)
  //       setSongDescription(data[0])
  //     })
  // }, [])
  return (
    <>
      <div className='PlayerSlider'>
        <div className="PlayerSlider-container-slider">
          <section>
            <img src="https://i1.sndcdn.com/artworks-jTy3zaoSBktD4e0K-qvgDwg-t500x500.jpg" alt="" />
          </section>
          <section>
            <img src="https://lastfm.freetls.fastly.net/i/u/300x300/248a618cf08723dfccf2a39d3bf143a4.jpg" alt="" />
          </section>
          <section>
            <img src="https://i.ytimg.com/vi/FpKERvWaWQs/maxresdefault.jpg" alt="" />
          </section>
        </div>
      </div>
      <section className='PlayerSlider-container-description'>
        <div className="PlayerSlider-description">
          <h3>{songDescription.name}</h3>
          <p>{songDescription.artist}</p>
        </div>
        <div className="Progressline">
          <div></div>
        </div>
        <div className="PlayerSlider-TimeContainer">
          <span>1:20</span>
          <span>2:40</span>
        </div>
      </section>
      
    </>
  );
}
