import styled from 'styled-components';

interface IContainerGridPosProps{
    gridArea: string,
};

export const Container = styled.div<IContainerGridPosProps>`
    grid-area: ${props => props.gridArea};
    height: 100%;
    width: 100%;
    display: flex;
    font-family:'Rajdhani';
`;

export const GraphLegendContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 100%;

    > h1{
        margin: 0;
        padding:0;
        color:${props => props.theme.colors.textClear};
        font-size:1.5rem;
    };
`;

interface IPropsGraphColor{
    color: string,    
};

export const GraphList = styled.ul`
    list-style: none;
    overflow-y: scroll;
    height: 70%;
    margin:0;
    padding:0; 
    &::-webkit-scrollbar{
        width: 10px;
        background-color:${props => props.theme.colors.cardOne};        
    };
    
    &::-webkit-scrollbar-thumb{
        background-color:${props => props.theme.colors.cardTwo};
        
    };    
    &::-webkit-scrollbar-track{
        background-color:${props => props.theme.colors.cardTwo};
        border-radius: 4px;

    };
    
`;

export const GraphItem = styled.li<IPropsGraphColor>`
    margin:0 15px 0 0 ;
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    >span{
        margin: 0 5px 0 0;
        background-color:${props => props.color};
        height: 15px;
        width: 15px;
    };    
    >p{
        color:${props => props.theme.colors.textClear};
        font-size:1.2rem;
    };
`;

export const GraphContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 100%;
    width:100%;
`;