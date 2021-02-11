import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MenuAside;
    display: flex;
    background-color:${props => props.theme.colors.mainHeader};
`;

export const BadgeContainer = styled.div`
    display: flex;
`;


export const BadgeImage = styled.img`
    width: 100%;
`;

export const BadgeText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BadgeData = styled.p`
    color: ${props => props.theme.colors.textMedium};
`;