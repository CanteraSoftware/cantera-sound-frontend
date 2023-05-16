import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataFile } from '../components/DataFile';
import { SearchPodcast } from '../components/SearchPodcast';
import { FooterMenu } from '../components/FooterMenu';
import '../styles/Search.css'

//icons
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from 'react-icons/cg'

export function Search() {
  const [files, setFiles] = useState([])
  const [filesSearch, setFilesSearch] = useState([])
  const [search, setSearch] = useState('')

  const url = "http://18.117.98.49:5000/api/v1/files";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        data.sort(() => {return Math.random() - 0.5})
        setFiles(data)
        setFilesSearch(data)
      })
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
    filterSearch(e.target.value)
  }

  const filterSearch = (searchTerm) => {
    let searchResults = filesSearch.filter((element) => {
      if (
        element.nameFile.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.nameAuthor.toString().toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return element
      }
    })

    setFiles(searchResults)
  }

  return (
    <div className='Search'>
      <div className="Search-container-input">
        <div className="Search-icon-container">
          <AiOutlineSearch className="Search-icons" />
        </div>
        <input
          className="Search-input"
          type="text"
          value={search}
          placeholder="Qué quieres escuchar?"
          onChange={handleChange}
        />
        <Link className="Search-icon-container" to='/'>
          <CgClose className="Search-icons" />
        </Link>
      </div>
      <div className="Search-container-suggesting">
        <h2>Sugerencias para ti</h2>
        {files.map(file => {
          return (
            <DataFile
              key={file.id}
              id={file.id}
              img={file.imageUrl}
              title={file.nameFile}
              artist={file.nameAuthor}
              catId={file.categoryId}
            />
          )
        }).slice(0, 5)}
      </div>
      <div className="Search-container-podcast">
        <h2>Podcast</h2>
        <SearchPodcast />
      </div>
      <FooterMenu />
    </div>
  );
}
