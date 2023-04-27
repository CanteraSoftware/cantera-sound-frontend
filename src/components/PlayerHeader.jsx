import React from "react";
import { Link } from "react-router-dom";
import "../styles/PlayerHeader.css";

//Icons
import { BsArrowLeftShort } from "react-icons/bs";
import { BsMusicNoteList } from "react-icons/bs";

export function PlayerHeader() {
  return (
    <div className="PlayerHeader">
      <Link to="/">
        <BsArrowLeftShort className="PlayerHeader-Icon-Back" />
      </Link>
      <h2>Reproduciendo</h2>
      <Link to="/category">
        <BsMusicNoteList className="PlayerHeader-Icon" />
      </Link>
    </div>
  );
}
