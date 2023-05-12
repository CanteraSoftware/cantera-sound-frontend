import React, { useState, useEffect } from 'react';
import '../styles/Add.css';
import { AddAlert } from './AddAlert';

export function Add({ see, notSee }) {
  //campos del form
  const [nameFile, setNameFile] = useState('');
  const [nameAuthor, setNameAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [genres, setGenres] = useState('');
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  //categorias
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  //desabilita boton guardar
  const [isSubmitting, setIsSubmitting] = useState(false);
  //alerta
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    //obtengo las categorías
    fetch('http://18.117.98.49:5000/api/v1/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
  }, []);

  useEffect(() => {
    //obtengo los géneros
    fetch('http://18.117.98.49:5000/api/v1/genders')
      .then(response => response.json())
      .then(data => setGenders(data))
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //activar el estado de envío
    setIsSubmitting(true)

    const startTime = performance.now()
    
    //objeto que se enviará
    const formData = new FormData();
    formData.append('nameFile', nameFile);
    formData.append('nameAuthor', nameAuthor);
    formData.append('categoryId', category);
    formData.append('genderId', genres);
    formData.append('file', file);
    formData.append('fileUrl', fileUrl);

    const url = 'http://18.117.98.49:5000/api/v1/files/upload';

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFileUrl(data.Location);
        const endTime = performance.now();
        const duration = endTime - startTime;
        console.log(`El archivo tardó ${duration} milisegundos en subir.`);
        setIsSubmitting(false);
        setAlert(true)
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
        <div className='App'>
          <div className="App-container">
            <h2>Agrega Tu Archivo</h2>
            <form onSubmit={handleSubmit} className='App-content'>
              <div className='App-content-input'>
                <label className='name'>Nombre</label>
                <input
                  className='App-input'
                  type="text"
                  id='name'
                  value={nameFile}
                  onChange={(e) => setNameFile(e.target.value)}
                />
              </div>
              <div className='App-content-input'>
                <label className='artist'>Artista / Autor</label>
                <input
                  className='App-input'
                  type="text"
                  id='artist'
                  value={nameAuthor}
                  onChange={(e) => setNameAuthor(e.target.value)}
                />
              </div>
              <div className='App-content-input'>
                <label className='category'>Categorías</label>
                <select
                  className='App-input'
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option disabled selected hidden></option>
                  {categories.map((category) => {
                    return (
                      <option
                        key={category.id}
                        value={category.id}
                      >
                        {category.nameCategory}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className='App-content-input'>
                <label className='genres'>Géneros</label>
                <select
                  className='App-input'
                  onChange={(e) => setGenres(e.target.value)}
                >
                  <option disabled selected hidden></option>
                  {genders.map((genres) => {
                    return (
                      <option
                        key={genres.id}
                        value={genres.id}
                      >
                        {genres.nameGender}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className='App-content-input'>
                <label className='file'>Archivo</label>
                <input
                  className='App-input-audio'
                  type="file"
                  name="uploads"
                  accept=".mp3"
                  multiple
                  onChange={handleFileInputChange}
                />
              </div>
              <div className="App-container-btn">
                <button className='App-btn-cancel' onClick={handleClick}>Cancelar</button>
                <button
                  type='submit'
                  className={`App-btn-save ${isSubmitting ? 'disabled' : ''}`}
                  disabled={isSubmitting}
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
          {alert ? <AddAlert
            see={see}
            notSee={notSee}
            alert={alert}
            setAlert={setAlert}
          /> : null}
        </div>
      }
    </>
  );
}
