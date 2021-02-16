import styled from 'styled-components';

interface IContainerGridPosProps{
    gridArea: string
};

export const Container = styled.div<IContainerGridPosProps>`
    grid-area:${props => props.gridArea};
    font-family:'Rajdhani';
    display: flex;
    background-color: ${props => props.theme.colors.cardOne};
`;

export const LeftSide = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin: 20px 0 20px 0;
    >span{
        width: 10px;
        background-color:${props => props.theme.colors.cardThree};
    }
`;

export const RightSide = styled.div`
    flex:4;
    width: 100%;
    height:100%;
    display: flex;
    justify-content:space-between;    
    >a{
        text-decoration:none;
        color: ${props => props.theme.colors.cardTwo};
        align-self:flex-end;
        margin-right:10px;
        font-size:2.5rem;
        &:hover{
            font-size:3.5rem;
            color: ${props => props.theme.colors.cardThree};
            margin-right:2.5px;
        };
    };
`;


export const TextBoxTop = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: ${props => props.theme.colors.cardThree};
    > p{
        margin:0;
        padding:0;
        color: ${props => props.theme.colors.cardTwo};
        font-size: 3.0rem;

    };
    > h1{
        margin:0;
        padding:0;
        color: ${props => props.theme.colors.cardTwo};
        font-size:2.5rem;        
    };
    > h3{
        margin:0;
        padding:0;
        color: ${props => props.theme.colors.cardThree};
        font-size:2.5rem;
    }
`;