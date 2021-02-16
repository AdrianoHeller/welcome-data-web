import React,{ useState,useEffect } from 'react';
import MenuAside from '../../components/MenuAside';
import MenuTop from '../../components/MenuTop';
import ModalLoading from '../../components/ModalLoading';
import { Container,Content,MenuHeaderContent } from './style'; 
import MainInfoCard from '../../components/MainInfoCard';
import { MdKeyboardArrowRight,MdExitToApp,MdFilter } from 'react-icons/md';

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
            <MenuTop>
                <MenuHeaderContent>
                    <MdFilter/>
                </MenuHeaderContent>
                <MenuHeaderContent>
                    <MdExitToApp/>
                </MenuHeaderContent>
            </MenuTop>    
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