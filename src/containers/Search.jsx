import React from 'react';
import { FooterMenu } from '../components/FooterMenu';
import '../styles/Search.css'

//icons
import { AiOutlineSearch } from "react-icons/ai";

export function Search() {
  return (
    <div className='Search'>
      <div className="Search-container">
        <input
          className="Search-input"
          type="text"
          placeholder="Buscar"
        />
        <div className="Search-icon-container">
          <AiOutlineSearch className="Search-icons" />
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}
