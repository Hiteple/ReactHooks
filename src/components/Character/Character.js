import {useContext} from 'react';
import {CharacterContainer} from './Character.styles';
import {ThemeContext} from 'styled-components';

const Character = ({characterData}) => {
   const {name, species, status, gender, image} = characterData;
   const theme = useContext(ThemeContext);

   return (
      <CharacterContainer theme={theme}>
         <h2>{name}</h2>
         <img src={image} alt={`${name}'s image`} />
         <p>Species: {species}</p>
         <p>Status: {status}</p>
         <p>Gender: {gender}</p>
      </CharacterContainer>
      
   );
}

export default Character;