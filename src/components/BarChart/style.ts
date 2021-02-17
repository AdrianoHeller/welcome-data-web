import styled from 'styled-components';

interface IContainerGridPosProps{
    gridArea: string,
};

export const Container = styled.div<IContainerGridPosProps>`
    grid-area: ${props => props.gridArea};
    height: 100%;
    width: 100%;
    display: flex;
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
    
`;

export const GraphItem = styled.li<IPropsGraphColor>`
    display: flex;
    width: 100%;
    >span{
        margin: 0 0 0 10px;
        background-color:${props => props.color};
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