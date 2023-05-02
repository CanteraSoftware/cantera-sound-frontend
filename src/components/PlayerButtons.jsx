import React from "react";
import '../styles/PlayerButtons.css'

//icons
import {BsPlayFill} from "react-icons/bs"
import { BsPauseFill } from "react-icons/bs" 
import {BsShuffle} from "react-icons/bs"
import {BsRewindFill} from "react-icons/bs"
import {BsFillFastForwardFill} from "react-icons/bs"
import { BsRepeat1 } from "react-icons/bs"

export function PlayerButtons({isPlaying, handlePlayPause}) {
  return(
    <div className="PlayerButtons">
      <div className="PlayerButtons-container">
        <button >
          <BsShuffle className="small"/>
        </button>
        <button >
          <BsRewindFill className="small"/>
        </button>
        <button
          className="play-pause"
          onClick={handlePlayPause}
        >
          {isPlaying ? < BsPauseFill className="btnPlay" /> : <BsPlayFill className="btnPlay" />}
        </button>
        <button >
          <BsFillFastForwardFill className="small"/>
        </button>
        <button >
          <BsRepeat1 className="small"/>
        </button>
      </div>
    </div>
  )
}
