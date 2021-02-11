import React from 'react';
import MenuAside from '../../components/MenuAside';
import MenuTop from '../../components/MenuTop';
import { Container,Content } from './style'; 
const DashboardMain: React.FC = () => {
    return(
        <Container>
            <MenuAside/>
            <MenuTop/>
            <Content>
            </Content>
        </Container>
    )
};

export default DashboardMain;