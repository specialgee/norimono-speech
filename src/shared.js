import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${'' /* html {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Impact', sans-serif;
  } */}
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Container = styled.div`
  padding: 2em;
  margin: 0 20px 20px 20px;
  width: auto;
  max-width: 100%;
  min-width: 300px;
  transform: translate(0, 10%);
  button {
    font-size: 16px;
    padding: 8px;
    text-align: center;
    width: 100%;
  }
  h2 {
    margin-top: 0;
  }
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 4px;
  }
  select,
  textarea {
    font-size: 16px;
    margin-bottom: 12px;
    width: 100%;
  }
  textarea {
    border: 1px solid darkgrey;
    padding: 10px;
    resize: auto;
    max-width: 280px;
    height: 100px;
  }
`;