import {useContext} from 'react';
import {Container, Title, Button} from './Header.styles';
import {ThemeContext} from 'styled-components';

const Header = ({toggleThemeProp}) => {
   const theme = useContext(ThemeContext);

   return (
      <Container>
         <Title>React Hooks</Title>
         <Button
            theme={theme}
            onClick={toggleThemeProp}
            type="button"
         >
               Change theme
         </Button>
      </Container>
   );
}

export default Header;