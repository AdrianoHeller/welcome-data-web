import React,{ useState,useEffect } from 'react';
import MenuAside from '../../components/MenuAside';
import MenuTop from '../../components/MenuTop';
import ModalLoading from '../../components/ModalLoading';
import { Container,Content } from './style'; 
import MainInfoCard from '../../components/MainInfoCard';
import { MdKeyboardArrowRight } from 'react-icons/md';

const DashboardMain: React.FC = () => {
    const [apiData,setApiData] = useState(null);

    useEffect(() => {

    },[apiData]);

    return(
        <>
        {
            apiData === null ? 
        <Container>
            <MenuAside/>
            <MenuTop/>
            <Content>
                <MainInfoCard data={{
                  type:'Clientes',
                  value:0,
                  aggregationType:'total'  
                }} pathTo='DashPeople'>
                    <MdKeyboardArrowRight/>
                </MainInfoCard>
            </Content>
        </Container> 
        : 
        <ModalLoading/>
        }
        </>
    )
};

export default DashboardMain;