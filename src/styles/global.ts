import { createGlobalStyle } from 'styled-components';


import '../assets/fonts/Inter/index.css';

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        // color: #FFFFFF;
        box-sizing: border-box; 
        -webkit-tap-highlight-color: transparent;
    }
    button{
      cursor: pointer;
    }
    a{
      text-decoration: none;
      color: #2d2185ff;
      transition: color 0.3s;
      font-style: italic;
    }
    a:visited {
      color: #111111be;
    }
    a:hover {
      color: #302c51ff;
      text-decoration: underline; 
    }
    li{
      list-style-type: none;
    }
`;
