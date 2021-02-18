import {results} from './rickandmortyapi.json'
import React, { useState } from 'react';
import Card from './Card'
import './App.css'

function App() { 
  const [userInput, setUserInput] = useState('')
  return <>
  <input 
        value={userInput}
        onChange={event => setUserInput(event.target.value)} placeholder="Search character..." />
         {
          results.filter(character => character.name.toLowerCase().includes(userInput.toLowerCase()))
          .map(character => <Card key={character.id} name={character.name} species={character.species} image={character.image} status={character.status} location={character.location.name} origin={character.origin.name}/>)}
        </>
}

export default App;
