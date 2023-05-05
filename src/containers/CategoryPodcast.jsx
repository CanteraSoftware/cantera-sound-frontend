import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { DataFile } from '../components/DataFile';
import { FooterMenu } from '../components/FooterMenu';
import "../styles/Category.css";

export function CategoryPodcast() {
  const url = 'http://18.117.98.49:5000/api/v1/categories/2'

  const [api, setApi] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setApi(data.files)
      })
  }, [])

  return (
    <div>
      <Header />
      <div className="Category">
        <div className="Category-container">
          <h2>Podcasts</h2>
          {api.map((podcast) => {
            return <DataFile
              key={podcast.id}
              img={podcast.imageUrl}
              title={podcast.nameFile}
              artist={podcast.nameAuthor}
            />
          })}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}
