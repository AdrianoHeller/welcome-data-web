import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MenuAside;
    display: flex;
    flex-direction:column;
    background-color:${props => props.theme.colors.mainHeader};
    height:100%;
    font-family:'Rajdhani';
    
`;

export const BadgeWrapper = styled.div`
    display: flex;
    flex-direction:column;
`;

export const BadgeContainer = styled.div`
    display: flex;
    flex-direction:column;
    width:100%;    
`;


export const BadgeIcon = styled.img`
    width: 50%;
    margin:0 auto;
`;

export const BadgeAvatar = styled.img`
    width: 50%;
    margin:0 auto;
    border-radius:15%;
`;

export const BadgeText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BadgeHr = styled.hr`
    border: 2px solid ${props => props.theme.colors.textDark};
    width: 100%;
`;

export const BadgeData = styled.p`
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.textMedium};
`;

export const OptionContainer = styled.div`
    height: 60%;
    display: flex;
    flex-direction:column;
    width: 100%;
    justify-content:center;
    align-items:center;
`;

export const OptionList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Option = styled.li`
    > svg{
        color:${props => props.theme.colors.textMedium};
    };
    > a{
        text-decoration: none;
        color:${props => props.theme.colors.textMedium};
    };
`;