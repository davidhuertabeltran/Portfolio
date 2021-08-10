import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#fff',
    text: 'rgb(19, 28, 35)',
    bodyInverse: 'rgb(19, 28, 35)',
    textInverse: '#fff'
};

export const darkTheme = {
    body: 'rgb(19, 28, 35)',
    text: '#fff',
    bodyInverse: '#fff',
    textInverse: 'rgb(19, 28, 35)'
}

export const GlobalStyle = createGlobalStyle`
    body { 
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        transition: all .5s linear;
    }

    .portfolio-card {
        // background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.textInverse};
        background: ${({theme}) => theme.bodyInverse};
        transition: all .5s linear;
    }
`;

