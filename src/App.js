import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import './App.css';
import Navbar from "./components/Navbar";
import Characters from "./components/Characters"
import Pagination from './components/Paginatio';
import Card from './components/Card/Card';
import { Card2 } from './components/Card2';
// import Card from './components/Card/Card';



function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
          setCharacters(data.results);
          setInfo(data.info);
        })
        .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl)
  }, [])

  return (
    <>
    <div>
      <Navbar brand="Rick & Morty App" />
    </div>
    <div className='row'>
    <div className='col col-4'>
      <Card2 selectedCharacter = {selectedCharacter} />
      <Card />
    </div>
    <div className='col col-8'>
    <div className='container mt-5'>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <Characters characters={characters} />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </div>
    </div>
    </div>
    </>
  )
}

export default App;
