import {useState, useEffect, useReducer, useMemo, useRef} from 'react';
import {Character} from '../../components/';
import {Container, FavContainer} from './CharactersList.styles';
import rootReducer from '../../reducers/rootReducer';

const INITIAL_STATE = {
   favorites: []
}

const CharactersList = ({theme}) => {
   const [characters, setCharacters] = useState([]);
   const [favCharacters, dispatch] = useReducer(rootReducer, INITIAL_STATE);
   const [search, setSearch] = useState('');
   const searchInput = useRef(null);

   useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character/')
         .then(response => response.json())
         .then(characters => setCharacters(characters.results));
   }, []);

   const handleClick = (character) => {
      const found = favCharacters.favorites.filter(char => char.name === character.name);
      if (found.length === 0) {
         dispatch({type: 'ADD_TO_FAVORITE', payload: character});
      }
   }

   const checkFaved = (character) => {
      const found = favCharacters.favorites.filter(char => char.name === character.name);
      if (found) {
         return true;
      } else {
         return false;
      }
   }

   const handleSearch = () => {
      setSearch(searchInput.current.value);
   }

   /*
   const filteredCharacters = characters.filter(char => {
      return char.name.toLowerCase().includes(search.toLowerCase());
   })
   */

   // Using memo
   const filteredCharacters = useMemo(() =>
      characters.filter(char => {
         return char.name.toLowerCase().includes(search.toLowerCase());
      }), [characters, search]
   );

   return (
      <>
         <FavContainer>
         {favCharacters.favorites.map(character => {
            return <Character key={Math.random()} theme={theme} characterData={character} />
         })}
         </FavContainer>
         {favCharacters.favorites.length > 0 && <hr />}
         <div>
            <input ref={searchInput} type="text" value={search} onChange={handleSearch} />
         </div>
         <Container>
            {filteredCharacters.map(character => {
               return (
                  <Character faved={() => checkFaved(character)} clicked={() => handleClick(character)} key={character.id} theme={theme} characterData={character} />
               );
            })}
         </Container>
      </>
   );
}

export default CharactersList;