import React from "react";
import "../styles/AddAlert.css";
import "../styles/ErrorAlert.css";

import { VscHome } from "react-icons/vsc";
export function ErrorAlert({ see, notSee, alert, setAlert }) {
  const GoToHome = () => {
    setAlert(!alert);
    notSee(!see);
  };

  return (
    <div className="AddAlert">
      <div className="AddAlert-container">
        <div classNamer="AddAlert-container-errortitle">
          <h2>
            El archivo no fue enviado.
            <br />
            <span> Inténtelo más tarde</span>
          </h2>
        </div>
        <div className="AddAlert-container-btn">
          <button className="AddAlert-btn" onClick={GoToHome}>
            <VscHome className="AddAlert-btn-icon" />
            Ir al inicio
          </button>
        </div>
      </div>
    </div>
  );
}
