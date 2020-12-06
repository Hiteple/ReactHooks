import styled from 'styled-components';

export const CharacterContainer = styled.div`
   cursor: pointer;
   min-height: 400px;
   width: 300px;
   border-radius: 30px;
   margin: 10px;
   padding: 10px 20px;
   background-color: ${({theme}) => theme.body};
   color: ${({theme}) => theme.text};
   transition: all .3s ease;
   border: ${({faved}) => faved ? '1px solid red' : '1px solid blue'};
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