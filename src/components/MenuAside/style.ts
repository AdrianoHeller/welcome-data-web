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
    height: 40%;
        
`;


export const BadgeIcon = styled.img`
    width: 50%;
    margin:0 auto;
    padding:20px;
`;

export const BadgeAvatar = styled.img`
    width: 50%;
    margin:0 auto;
    border-radius:15%;
    padding:20px;
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
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-evenly;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
`;

export const Option = styled.li`
    display:flex;
    align-items:center;
    transition: opacity 0.4s;
    > svg{
        color:${props => props.theme.colors.textMedium};
        margin-right: 5px;
        font-size:1.5rem;       
    };
    > a{
        text-decoration: none;
        color:${props => props.theme.colors.textMedium};
        font-size: 1.2rem;
        &:hover:before{
            content:'';
            border: 1px solid ${props => props.theme.colors.textDark};
            color: ${props => props.theme.colors.textDark};
                 
        };
        &:hover{
            color: ${props => props.theme.colors.textDark};     
        };
    };
    
`;