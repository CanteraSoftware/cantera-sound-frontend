import {React, useState, useEffect, useRef} from "react";
import '../styles/PlayerSlider.css'
import { PlayerButtons } from "./PlayerButtons";

export function PlayerSlider({ audioUrl }) {
  const [songDescription, setSongDescription] = useState({name: "M.A.",
    artist: "Ni idea la verdad",
  })

  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  function handlePlayPause() {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={audioUrl}
      >
      </audio>
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
      <PlayerButtons isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
    </>
  );
}
