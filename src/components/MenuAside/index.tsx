import React from 'react';
import { 
    Container,
    BadgeContainer,
    BadgeData,
    BadgeImage,
    BadgeText } from './style';

import UserAvatar from '../../assets/logo.svg';

const MenuAside: React.FC = () => {
    return(
        <Container>
            <BadgeContainer>
                <BadgeData>
                    <BadgeImage src={UserAvatar}/>
                    <BadgeText />
                </BadgeData>
            </BadgeContainer>
        </Container>
    )
};

export default MenuAside;