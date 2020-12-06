import styled from 'styled-components';

export const CharacterContainer = styled.div`
   cursor: pointer;
   min-height: 400px;
   width: 300px;
   border: ${({theme}) => theme === 'light' ? '1px solid #000' : '1px solid #fff'};
   border-radius: 30px;
   margin: 10px;
   padding: 10px 20px;
   background-color: ${({theme}) => theme === 'light' ? '#fff' : '#363537'};
   transition: all .3s ease;
   & h2 {
      text-align: center;
      padding: 10px 0;
   }
   & img {
      width: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #fff;
   }
   &:hover {
      transform: translateY(-3%);
   }
`;