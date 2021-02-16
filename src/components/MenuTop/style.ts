import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MenuHeader;
    display: flex;
    width:100%;
    background-color:${props => props.theme.colors.mainHeader};
`;


