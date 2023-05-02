import {React, useState, useEffect, useRef} from "react";
import '../styles/PlayerSlider.css'
import { PlayerButtons } from "./PlayerButtons";

export function PlayerSlider({ audioUrl, data, index, updateIndex}) {
  const [songDescription, setSongDescription] = useState({name:'' , artist: ''
  })

  useEffect(() => {
    setSongDescription({name: data[index].nameFile, artist: data[index].nameAuthor})
  }, [index])
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
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
        autoPlay
        // onEnded={updateIndex(index+1)}
      >
      </audio>
      <div className='PlayerSlider'>
        <div className="PlayerSlider-container-slider">
          <section>
            <img src={data[index-1].imageUrl} alt="" />
          </section>
          <section>
            <img src={data[index].imageUrl} alt="" />
          </section>
          <section>
            <img src={data[index+1].imageUrl} alt="" />
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
      <PlayerButtons isPlaying={isPlaying} handlePlayPause={handlePlayPause} index={index} updateIndex={updateIndex}/>
    </>
  );
}
