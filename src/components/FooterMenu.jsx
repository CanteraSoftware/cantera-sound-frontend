import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Add } from "./Add";
import { Categories } from "./Categories";
import '../styles/FooterMenu.css'

//icons
import { HiHome } from 'react-icons/hi'
import { AiOutlineSearch } from "react-icons/ai";
import { BiCategory } from 'react-icons/bi'
import { BiAddToQueue } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'

export function FooterMenu() {
  const [seeModal, setSeeModal] = useState(false);
  const [seeCategories, setSeeCategories] = useState(false);

  const closeAdd = () => {
    setSeeModal(!seeModal);
  }

  const handleCategories = () => {
    setSeeCategories(!seeCategories);
  }

  return (
    <div className='FooterMenu'>
      <Link className='FooterMenu-link' to='/'>
        <HiHome className='FooterMenu-icons' />
        <h6>Inicio</h6>
      </Link>
      <Link className='FooterMenu-link' to='/search'>
        <AiOutlineSearch className='FooterMenu-icons' />
        <h6>Buscar</h6>
      </Link>
      <div className='FooterMenu-link' onClick={handleCategories}>
        <BiCategory className='FooterMenu-icons' />
        <h6>Categorías</h6>
      </div>
      {seeCategories && <div className="FooterMenu-container-categories">
        <div className="FooterMenu-categories">
          <CgClose
            className="FooterMenu-categories-icon"
            onClick={handleCategories}
          />
          <Categories />
        </div>
      </div>}
      <div className='FooterMenu-link' onClick={closeAdd}>
        <BiAddToQueue className='FooterMenu-icons' />
        <h6>Agregar</h6>
      </div>
      <Add see={seeModal} notSee={setSeeModal} />
    </div>
  );
}
