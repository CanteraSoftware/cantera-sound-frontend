import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { DataFile } from "../components/DataFile";
import { FooterMenu } from "../components/FooterMenu";
import { LoadingDataFile } from "../components/LoadingDataFile";
import "../styles/Category.css";

export function CategoryPodcast() {
  const categoryId = 2;
  const url = `http://18.117.98.49:5000/api/v1/categories/${categoryId}`;

  const [isLoading, setIsLoading] = useState(true);
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setApi(data.files);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="Category">
        <div className="Category-container">
          <h2>Podcasts</h2>
          {isLoading ? (
            <LoadingDataFile />
          ) : (
            api.map((podcast) => {
              return (
                <DataFile
                  id={podcast.id}
                  key={podcast.id}
                  img={podcast.imageUrl}
                  title={podcast.nameFile}
                  artist={podcast.nameAuthor}
                  catId={categoryId}
                />
              );
            })
          )}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}
