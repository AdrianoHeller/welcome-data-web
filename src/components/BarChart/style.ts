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

export const GraphList = styled.ul`
    list-style: none;
    overflow-y: scroll;
    height: 70%; 
`;

interface IPropsGraphColor{
    bgLegendColor: {
        colorOne: string,
        colorTwo: string
    }
};

export const GraphItem = styled.li<IPropsGraphColor>`
    display: flex;
    width: 100%;
    >span{
        background-color:${props => props.bgLegendColor};
        margin: 0 0 0 10px;
    };
    >p{
        color:${props => props.theme.colors.textClear};
        font-size:1.5rem;
    };
`;

export const GraphContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
`;