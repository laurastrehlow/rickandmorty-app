import './Card.css'
import React, { useState } from 'react'
function Card({ name, species, image, status, location, origin }) {
  const [isTextVisible, setIsTextVisible] = useState(false)

  return (
    <section className="Card">
      <img src={image} alt="" height="200" />
      <h2>{name}</h2>
      <button
        onClick={event => {
          event.stopPropagation()
          setIsTextVisible(!isTextVisible)
        }}
      >
        {isTextVisible ? 'Hide details' : 'Show details'}
      </button>
      <p hidden={!isTextVisible}>
        Species: {species}
        <br />
        Status: {status}
        <br />
        Location: {location}
        <br />
        Origin: {origin}
      </p>
    </section>
  )
}

export default Card
