import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { DataFile } from "../components/DataFile";
import { FooterMenu } from "../components/FooterMenu";
import { LoadingDataFile } from "../components/LoadingDataFile";
import "../styles/Category.css";

export function CategoryAudioBooks() {
  const url = "http://18.117.98.49:5000/api/v1/categories/3";

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
          <h2>Audio Libros</h2>
          {isLoading ? (
            <LoadingDataFile />
          ) : (
            api.map((book) => {
              return (
                <DataFile
                  key={book.id}
                  img={book.imageUrl}
                  title={book.nameFile}
                  artist={book.nameAuthor}
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