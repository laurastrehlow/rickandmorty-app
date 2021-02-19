import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'
import Header from '../Header/Header'
import './App.css'

function App() { 
  const [filteredSpecies, setFilteredSpecies] = useState('all')
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
      <Header title="”To live is to risk it all.” - Rick" />
      <button className="Button"
        onClick={() => setFilteredSpecies('Human')} 
        disabled={filteredSpecies === 'Human'}>Humans</button>
        <button className="Button"
        onClick={() => setFilteredSpecies('Alien')} 
        disabled={filteredSpecies === 'Alien'}>Aliens</button>
        <button className="Button"
        onClick={() => setFilteredSpecies('all')}
        disabled={filteredSpecies === 'all'}>All</button>
      <input value={userInput}
        onChange={event => setUserInput(event.target.value)} placeholder="Search character..." />
         {
          characters.filter(character => character.name.toLowerCase().includes(userInput.toLowerCase()) && (filteredSpecies === 'all' || character.species === filteredSpecies)) 
          .map(character => <Card key={character.id} name={character.name} species={character.species} image={character.image} status={character.status} location={character.location.name} origin={character.origin.name}/>)}
        
        </>
}

export default App;
