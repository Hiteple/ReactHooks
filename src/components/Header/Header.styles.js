import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px 0;
`;

export const Title = styled.h1`
`;

export const Button = styled.button`
   color: ${({theme}) => theme.text};
   background-color: ${({theme}) => theme.body};
   border: ${({theme}) => theme.borderColor};
   margin-left: 10%;
   border-radius: 30px;
   padding: 10px 20px;
   cursor: pointer;
   outline: none;
   width: 10rem;
`;