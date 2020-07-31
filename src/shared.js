import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${'' /* html {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
  } */}
`;

export const Row = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  text-align: left;
`;

export const Container = styled.div`
  margin: 0;
  width: auto;
  max-width: 100%;
`;