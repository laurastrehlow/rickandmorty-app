import React, { useState, useEffect } from 'react';
import Card from './Card'
import './App.css'

function App() { 
  const [userInput, setUserInput] = useState('')
  const [characters, setCharacters] = useState([])
  
 useEffect(() => {
    getAllCharacters()
  }, []) 

    function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    
      fetch(url)
        .then(res => res.json())
        .then(data => {setCharacters(oldState => [...oldState, ...data.results])
      
          const nextUrl = data.info.next
          nextUrl && getAllCharacters(nextUrl)
        })
      } 

  return <>
  <input 
        value={userInput}
        onChange={event => setUserInput(event.target.value)} placeholder="Search character..." />
         {
          characters.filter(character => character.name.toLowerCase().includes(userInput.toLowerCase()))
          .map(character => <Card key={character.id} name={character.name} species={character.species} image={character.image} status={character.status} location={character.location.name} origin={character.origin.name}/>)}
        </>
}

export default App;
