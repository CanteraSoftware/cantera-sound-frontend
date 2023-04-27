import React from "react";
import {PlayerHeader} from "./PlayerHeader";
import {PlayerSlider} from "./PlayerSlider";
import {PlayerButtons} from './PlayerButtons';
import {FooterMenu} from "./FooterMenu"

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