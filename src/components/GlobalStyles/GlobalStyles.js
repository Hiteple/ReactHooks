import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
      transition: all 0.50s linear;
   }

   h1, h2, p {
      color: ${({theme}) => theme.text}
   }
`;