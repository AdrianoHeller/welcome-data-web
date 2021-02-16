import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.cardOne};
`;

export const LeftSide = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: stretch;
    >span{
        width: 10px;
        background-color:${props => props.theme.colors.cardTwo};
    }
`;

export const RightSide = styled.div`
    flex:4;
    display: flex;
    flex-direction: column;
`;

export const TextBoxTop = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: ${props => props.theme.colors.cardThree};
`;