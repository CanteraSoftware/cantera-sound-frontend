import React, { useState } from "react";
import { Header } from "../components/Header";
import { HomeSwiperSlider } from "../components/HomeSwiperSlider";
import { Categories } from "../components/Categories";
import { Add } from "../components/Add";
import "../styles/Home.css";
import { useEffect } from "react";

export function Home() {
  const [api, setApi] = useState([])
  const API = 'http://18.117.98.49:5000/api/v1/files';
  useEffect(()=>{
    fetch(API)
    .then(res => res.json())
    .then(data=>{
      setApi(data)
    })
  },[])
  const [seeModal, setSeeModal] = useState(false);

  const handleModal = () => {
    setSeeModal(!seeModal);
  };

  return (
    <div className="Home">
      <Header />
      <div className="Home-song-container">
        <h2>Canciones</h2>
        <div className="Home-song-container-slider">
          <HomeSwiperSlider />
        </div>
      </div>
      <Categories />
      <div className="Home-add-button-container">
        <button className="Home-add-button" onClick={handleModal}>
          Agrega Tu Archivo
        </button>
      </div>
      <Add see={seeModal} notSee={setSeeModal} />
    </div>
  );
}
