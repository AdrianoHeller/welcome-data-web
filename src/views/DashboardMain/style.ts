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
    grid-template-areas:
     'cl vi fi oc'
     'int int rl oc'
     'we we we we';
    max-height: calc(100vh -70px);
    background-color:${props => props.theme.colors.contentBackground};
`;

export const MenuHeaderContentLeft = styled.div`
    height:100%;
    flex:1;
    display:flex;
    align-items:center;
    >svg{
        color:${props => props.theme.colors.textClear};
        font-size:1.5rem;
        margin: 0 0 0 30px;
        cursor: pointer;
        &:hover{
            color:${props => props.theme.colors.textDark};
        };
    }
`;


export const MenuHeaderContentRight = styled.div`
    height:100%;
    flex:2;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    >svg{
        color:${props => props.theme.colors.textClear};
        font-size:1.5rem;
        margin: 0 30px 0 0;
        cursor: pointer;
        &:hover{
            color:${props => props.theme.colors.textDark};
        };
    }
`;