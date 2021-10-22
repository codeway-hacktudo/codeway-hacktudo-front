import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: 0;

 }

  body {
    overflow-x: hidden;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    -webkit-font-smoothing: antialiased;
  }

 body, input, button {
   font-family: 'Merriweather', serif;
   font-size: 16px;
   border: 0;
   background: transparent;
   input:-webkit-autofill {
    color: ${(props) => props.theme.colors.primary}, !important;
}
 }

 h1,h2,h3,h4,h5,h5, strong {
   font-weight: 500;
 }

 button {
   cursor: pointer;
 }
`;
