import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=2191be9914ccd8f11b17d30ad1454f59&hash=59a0c069655ec162f487d56d6f45e38a`)
      .then(response => {
        setCharacter(response.data.data.results[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [characterId]);

  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <h3>Associated Comics:</h3>
      <ul>
        {character.comics && character.comics.items.map(comic => (
          <li key={comic.resourceURI}>
            <a href={comic.resourceURI}>{comic.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;