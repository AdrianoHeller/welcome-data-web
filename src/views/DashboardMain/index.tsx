import React,{ useState,useEffect } from 'react';
import MenuAside from '../../components/MenuAside';
import MenuTop from '../../components/MenuTop';
import ModalLoading from '../../components/ModalLoading';
import { Container,Content } from './style'; 

const DashboardMain: React.FC = () => {
    const [apiData,setApiData] = useState(null);

    useEffect(() => {

    },[apiData]);

    return(
        <>
        {
            apiData !== null ? 
        <Container>
            <MenuAside/>
            <MenuTop/>
            <Content>
            </Content>
        </Container> 
        : 
        <ModalLoading/>
        }
        </>
    )
};

export default DashboardMain;