import React from "react";
import "../styles/AddAlert.css";
import { Link } from "react-router-dom";

//icons
import { VscHome } from "react-icons/vsc";
import { BsPlayCircle } from "react-icons/bs";

export function AddAlert({ see, notSee, alert, setAlert, dataFile }) {
  const GoToHome = () => {
    setAlert(!alert);
    notSee(!see);
  };

  return (
    <div className="AddAlert">
      <div className="AddAlert-container">
        <div className="AddAlert-container-title">
          <h2>
            Archivo Guardado <br />
            <span>Exitosamente</span>.
          </h2>
        </div>
        <div className="AddAlert-container-btn">
          <button className="AddAlert-btn" onClick={GoToHome}>
            <VscHome className="AddAlert-btn-icon" />
            Ir al inicio
          </button>
          <Link className="AddAlert-btn" to={`/player?id=${dataFile.id}&${dataFile.categoryId}`}>
            <BsPlayCircle className="AddAlert-btn-icon" />
            Reproducir audio
          </Link>
        </div>
      </div>
    </div>
  );
}
