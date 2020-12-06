import {Container, Title, Button} from './Header.styles';

const Header = ({theme, toggleThemeProp}) => {
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