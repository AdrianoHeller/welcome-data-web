import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: 'Rajdhani';
        src: url('../fonts/Rajdhani/Rajdhani-Regular.ttf');
    }
    body,html,#root{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }
    
    input, button{
        margin: 0;
        padding: 0;
        font-family:'Rajdhani';
        outline: none;
    }
`; 