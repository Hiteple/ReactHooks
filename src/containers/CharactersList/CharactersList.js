import {useState, useEffect} from 'react';
import {Character} from '../../components/';
import {Container} from './CharactersList.styles';

const CharactersList = ({theme}) => {
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character/')
         .then(response => response.json())
         .then(characters => setCharacters(characters.results));
   }, []);

   return (
      <Container>
         {characters.map(character => {
            return (
               <Character key={character.id} theme={theme} characterData={character} />
            );
         })}
      </Container>
   );
}

export default CharactersList;