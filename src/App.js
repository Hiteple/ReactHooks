import {useState} from 'react';
import {Layout} from './components/';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Themes} from "./components/";
import {CharactersList} from './containers/';

const App = () => {
   const [theme, setTheme] = useState('light');

   const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light');
   }

  return (
     <ThemeProvider theme={theme === 'light' ? Themes.lightTheme : Themes.darkTheme}>
      <GlobalStyles />
      <Layout toggleThemeProp={themeToggler}>
         <CharactersList/>
      </Layout>
     </ThemeProvider>
    
  );
}

export default App;
