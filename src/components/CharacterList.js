import React from 'react';

const CharacterList = ({ characters, onCharacterClick }) => {
  return (
    <div>
      <ul>
        {characters.map(character => (
          <li key={character.id} onClick={() => onCharacterClick(character)}>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;