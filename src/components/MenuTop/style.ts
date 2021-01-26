import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const BadgeContainer = styled.div`
    display: flex;
`;

interface IBadgeProps{
    badgeSrc: string
};

export const BadgeImage = styled.img<IBadgeProps>`
    width: 100%;
`;

export const BadgeText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BadgeData = styled.p`
    color: ${props => props.theme.colors.textMedium}
`;