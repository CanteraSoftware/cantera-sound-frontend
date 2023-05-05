import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { DataFile } from '../components/DataFile';
import { FooterMenu } from '../components/FooterMenu';
import { Loading } from '../components/Loading';
import "../styles/Category.css";

export function CategorySong() {
  const url = 'http://18.117.98.49:5000/api/v1/categories/1'

  const [isLoading, setIsLoading] = useState(true)
  const [api, setApi] = useState([])

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
      .then(data => {
        setApi(data.files)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <Header />
      <div className="Category">
        <div className="Category-container">
          <h2>Canciones</h2>
          {isLoading ? <Loading /> :
            api.map((song) => {
              return <DataFile
                key={song.id}
                img={song.imageUrl}
                title={song.nameFile}
                artist={song.nameAuthor}
              />
            })
          }
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}
