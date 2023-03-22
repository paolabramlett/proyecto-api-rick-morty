import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import './App.css';
import Navbar from "./components/Navbar";
//import Characters from "./components/Characters"
//import Pagination from './components/Paginatio';
//import Card from './components/Card/Card';
import { Card2 } from './components/Card2';
// import Card from './components/Card/Card';

const fetchCharacters = () => {
  const url = "https://rickandmortyapi.com/api/character";
  return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.results
      })
      .catch(error => console.log({error}))
};


function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({})

  useEffect(() => {
   fetchCharacters()
    .then((respuesta) => {
      setCharacters(respuesta)
    })

  }, [])
  //console.log({characters})
  


  //const onPrevious = () => {
  //  fetchCharacters(info.prev);
  //}

 // const onNext = () => {
 //   fetchCharacters(info.next);
 // }



  return (
    <>
    <div>
      <Navbar brand="Rick & Morty App" />
									<div className='row'>
										{characters.length > 0 ? (
											<Card2 selectedCharacter={characters} />
										) : (
											<span>No hay nada en el array</span>
										)}
									</div>
    </div>
    </>
  )
}

export default App;
