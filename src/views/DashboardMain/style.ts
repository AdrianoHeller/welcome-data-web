import styled from 'styled-components';


export const Container = styled.div`
    display: grid;
    grid-template-columns:250px auto;
    grid-template-rows:70px auto;
    height: 100vh;
    grid-template-areas:
    'MenuAside MenuHeader'
    'MenuAside Content';
`;

export const Content = styled.div`
    grid-area: Content;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows:repeat(3,250px) auto;
    max-height: calc(100vh -70px);
    background-color:${props => props.theme.colors.contentBackground};
`;