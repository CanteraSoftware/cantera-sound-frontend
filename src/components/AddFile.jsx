import React, { useState } from 'react';
import '../styles/AddFile.css'

export function AddFile({ see, notSee }) {
  const [fileUrl, setFileUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Objeto que se enviará
    const formData = new FormData();
    formData.append('fileUrl', fileUrl);

    const url = 'http://18.117.98.49:5000/api/v1/files/upload';

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setFileUrl(data.Location);
      });
  };

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick = () => {
    notSee(false);
  };

  return (
    <>
      {see &&
        <div className='AddFile'>
          <div className="Add-container">
            <h2>Agrega Tu Archivo</h2>
            <form onSubmit={handleSubmit} className='Add-form'>
              <div className='Add-form-content'>
                <label className='file'>Archivo</label>
                <input
                  type="file"
                  name="uploads"
                  accept=".mp3, .mp4"
                  multiple
                  onChange={handleFileInputChange}
                />
              </div>
              <div className="Add-container-btn">
                <button
                  className='Add-btn-cancel'
                  onClick={handleClick}
                >
                  Cancelar
                </button>
                <button
                  type='submit'
                  className='Add-btn-save'
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  );
}
