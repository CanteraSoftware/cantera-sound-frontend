import React from "react";
import '../styles/PlayerButtons.css'

//icons
import {BsPlayFill} from "react-icons/bs"
import { BsPauseFill } from "react-icons/bs" 
import {BsShuffle} from "react-icons/bs"
import {BsRewindFill} from "react-icons/bs"
import {BsFillFastForwardFill} from "react-icons/bs"
import { BsRepeat1 } from "react-icons/bs"

export function PlayerButtons({isPlaying, handlePlayPause, updateIndex, index, api}) {
  return(
    <div className="PlayerButtons">
      <div className="PlayerButtons-container">
        <button >
          <BsShuffle className="small"/>
        </button>
        <button onClick={()=>{
          if (index<=0) {
            updateIndex(index = api.length-1)
          }else{
            updateIndex(index -1)
          }
        }}>
          <BsRewindFill className="small"/>
        </button>
        <button
          className="play-pause"
          onClick={handlePlayPause}
        >
          {isPlaying ? < BsPauseFill className="btnPause" /> : <BsPlayFill className="btnPlay" />}
        </button>
        <button onClick={()=>{
          if (index >= api.length-1) {
            updateIndex(index = 0)
          }else{
            updateIndex(index + 1)
          }
          }}>
          <BsFillFastForwardFill className="small"/>
        </button>
        <button >
          <BsRepeat1 className="small"/>
        </button>
      </div>
    </div>
  )
}
