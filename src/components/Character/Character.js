import {CharacterContainer} from './Character.styles';

const Character = ({theme, characterData}) => {
   console.log(characterData)
   const {name, species, status, gender, image} = characterData;
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