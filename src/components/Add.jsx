import React, { useState } from 'react';
import '../styles/Add.css';

export function Add({ see, notSee }) {
  const [nameFile, setNameFile] = useState('');
  const [nameAuthor, setNameAuthor] = useState('');
  const [category, setCategory] = useState(null);
  const [genres, setGenres] = useState(null);
  /* const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(''); */

  const handleSubmit = (e) => {
    e.preventDefault();

    // Objeto que se enviará
    const formData = new FormData();
    formData.append('nameFile', nameFile);
    formData.append('nameAuthor', nameAuthor);
    /* formData.append('file', file);
    formData.append('fileUrl', fileUrl); */

    const url = 'http://18.117.98.49:5000/api/v1/files/upload';

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        /* setFileUrl(data.Location); */
      });
  };

  /* const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  }; */

  const handleClick = () => {
    notSee(false);
  };

  return (
    <>
      {see &&
        <div className='Add'>
          <div className="Add-container">
            <h2>Agrega Tu Archivo</h2>
            <form onSubmit={handleSubmit} className='Add-form'>

              <div className='Add-form-input'>
                <label className='file'>Archivo</label>
                <input
                  className='Add-input'
                  type="text"
                  id='file'
                  /* value={nameFile} */
                  /* onChange={(e) => setNameFile(e.target.value)} */
                />
              </div>

              <div className='Add-form-input'>
                <label className='name'>Nombre</label>
                <input
                  className='Add-input'
                  type="text"
                  id='name'
                  value={nameFile}
                  onChange={(e) => setNameFile(e.target.value)}
                />
              </div>

              <div className='Add-form-input'>
                <label className='artist'>Artista / Autor</label>
                <input
                  className='Add-input'
                  type="text"
                  id='artist'
                  value={nameAuthor}
                  onChange={(e) => setNameAuthor(e.target.value)}
                />
              </div>

              <div className='Add-form-input'>
                <label className='category'>Categorías</label>
                <select className='Add-input' >
                  <option value="" disabled selected hidden></option>
                  <option>Música</option>
                  <option>Podcast</option>
                  <option>Audio libro</option>
                </select>
              </div>

              <div className='Add-form-input'>
                <label className='genres'>Géneros</label>
                <select className='Add-input' >
                  <option value="" disabled selected hidden></option>
                  <option>Comedia</option>
                  <option>Reggaeton</option>
                  <option>Misterio</option>
                </select>
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
