import React, { useState } from "react";
import "../styles/Header.css";

//icons
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import logoApp from "../images/cat.png";

export function Header() {
  const [openSearch, setOpenSearch] = useState(false);

  const handleClick = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className="Header">
      <div className="Header-title">
        <div className="Header-content-title">
          <img className="Header-logoApp" src={logoApp} alt="" />
          <h1>
            Cantera <span>Music</span>
          </h1>
        </div>
        <div className={`Header-search ${openSearch && "open"}`}>
          <div className="Header-search-container">
            <input
              className="Header-search-input"
              type="text"
              placeholder="Buscar"
            />
            <div className="Header-search-icon-container">
              <AiOutlineSearch className="Header-icons-search" />
            </div>
          </div>
          <button
            onClick={handleClick}
            className={`bnt-closed ${openSearch && "open"}`}
          >
            <CgClose className="Header-icons-search" />
          </button>
        </div>
        <div onClick={handleClick}>
          <AiOutlineSearch className="Header-icons-search-btn" />
        </div>
      </div>
    </div>
  );
}
