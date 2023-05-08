import React, { useState,useEffect } from "react";
import { Header } from "../components/Header";
import { HomeSwiperSlider } from "../components/HomeSwiperSlider";
import { Categories } from "../components/Categories";
import { Add } from "../components/Add";
import { LoadingDataFile } from "../components/LoadingDataFile";
import "../styles/Home.css";

export function Home() {
  const url = 'http://18.117.98.49:5000/api/v1/categories/1'

  const [api, setApi] = useState([])
  const [seeModal, setSeeModal] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setApi(data.files)
        setIsLoading(false)
      })
  }, [])

  const handleModal = () => {
    setSeeModal(!seeModal);
  };

  return (
    <div className="Home">
      <Header />
      <div className="Home-song-container">
        <h2>Canciones</h2>
        <div className="Home-song-container-slider">
          {isloading ? <LoadingDataFile /> : <HomeSwiperSlider api={api} />}
        </div>
      </div>
      {/* <LoadingHome /> */}
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
