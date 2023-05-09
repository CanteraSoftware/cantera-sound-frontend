import React from 'react';
import { Link } from 'react-router-dom';
import { FooterMenu } from '../components/FooterMenu';
import '../styles/Search.css'

//icons
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from 'react-icons/cg'

export function Search() {
  return (
    <div className='Search'>
      <div className="Search-container">
        <div className="Search-icon-container">
          <AiOutlineSearch className="Search-icons" />
        </div>
        <input
          className="Search-input"
          type="text"
          placeholder="Qué quieres escuchar?"
        />
        <Link className="Search-icon-container" to='/'>
          <CgClose className="Search-icons" />
        </Link>
      </div>
      <FooterMenu />
    </div>
  );
}
