import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2191be9914ccd8f11b17d30ad1454f59&hash=59a0c069655ec162f487d56d6f45e38a')
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div>
      <CharacterList characters={characters} onCharacterClick={handleCharacterClick} />
      {selectedCharacter && (
        <CharacterDetail characterId={selectedCharacter.id} />
      )}
    </div>
  );
};

export default App;