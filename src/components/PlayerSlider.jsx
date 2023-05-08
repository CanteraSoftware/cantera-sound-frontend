import {React, useState, useEffect, useRef} from "react";
import { PlayerButtons } from "./PlayerButtons";
import '../styles/PlayerSlider.css'

export function PlayerSlider({api}) {
  const [songDescription, setSongDescription] = useState({name:'' , artist: ''})
  const [isPlaying, setIsPlaying] = useState(true)
  const [index, setIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const progressBarRef = useRef(null)

  
  useEffect(() => {
    setSongDescription({name: api[index].nameFile, artist: api[index].nameAuthor})
  }, [index])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (audioRef.current && progressBarRef.current) {
        const percent = (audioRef.current.currentTime / duration) * 100;
        progressBarRef.current.style.width = `${percent}%`
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [duration])

  const updateIndex = (newVal) => {
    setIndex(newVal)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  return (
    <>
      <audio
        ref={audioRef}  
        src={api[index].fileUrl}
        // autoPlay
        loop
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
      </audio>
      <div className='PlayerSlider'>
        <div className="PlayerSlider-container-slider">
          <section>
            {index<1 ? <div className="none"></div> :<img src={api[index-1].imageUrl} alt="" />}
          </section>
          <section>
            <img src={api[index].imageUrl} alt="" />
          </section>
          <section>
            {index>=api.length-1 ?  <div className="none"></div> : <img src={api[index+1].imageUrl} alt="" />}
          </section>
        </div>
      </div>
      <section className='PlayerSlider-container-description'>
        <div className="PlayerSlider-description">
          <h4>{songDescription.name}</h4>
          <p>{songDescription.artist}</p>
        </div>
        <div className="Progressline">
          <div ref={progressBarRef}></div>
        </div>
        <div className="PlayerSlider-TimeContainer">
          <span>1.2</span>
          <span>{duration}</span>
        </div>
      </section>
      <PlayerButtons isPlaying={isPlaying} handlePlayPause={handlePlayPause} api={api} index={index} updateIndex={updateIndex}/>
    </>
  );
}