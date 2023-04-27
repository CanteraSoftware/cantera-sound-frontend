import React from "react";
import {PlayerHeader} from "../components/PlayerHeader";
import {PlayerSlider} from "../components/PlayerSlider";
import {PlayerButtons} from '../components/PlayerButtons';
import {FooterMenu} from "../components/FooterMenu"

export function Player() {
  return (
    <div className="Player">
      <PlayerHeader />
      <PlayerSlider/>
      <PlayerButtons />
      <FooterMenu/>
    </div>
  )
}