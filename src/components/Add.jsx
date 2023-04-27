import React from 'react';
import '../styles/Add.css'

export function Add({ see, notSee }) {
  const handleClick = () => {
    notSee(false)
  }

  return (
    <>
      {see &&
        <div className='App'>
          <div className="App-container">
            <h2>Agrega Tu Archivo</h2>
            <div className='App-content'>
              <input className='App-input' type="text" placeholder='Nombre' />
              <select className='App-input' >
                <option>Música</option>
                <option>Podcast</option>
                <option>Audio libro</option>
              </select>
              <input className='App-input' type="text" placeholder='Artista / Autor' />
              <input
                className='App-input-audio'
                type="file"
                name="uploads"
                accept=".mp3"
                multiple
              />
              <div className="App-container-btn">
                <button className='App-btn-cancel' onClick={handleClick}>Cancelar</button>
                <button className='App-btn-save'>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
