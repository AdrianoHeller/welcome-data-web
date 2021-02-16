import React,{ useState,useEffect } from 'react';
import MenuAside from '../../components/MenuAside';
import MenuTop from '../../components/MenuTop';
import ModalLoading from '../../components/ModalLoading';
import { Container,Content,MenuHeaderContentLeft,MenuHeaderContentRight } from './style'; 
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
                <MenuHeaderContentLeft>
                    <MdFilter/>
                </MenuHeaderContentLeft>
                <MenuHeaderContentRight>
                    <MdExitToApp/>
                </MenuHeaderContentRight>
            </MenuTop>    
            <Content>
                <MainInfoCard data={{
                  type:'Clientes',
                  value:0,
                  aggregationType:'total'  
                }} pathTo='DashPeople'
                gridArea={'cl'}>
                    <MdKeyboardArrowRight/>
                </MainInfoCard>
                <MainInfoCard data={{
                  type:'Viagens',
                  value:0,
                  aggregationType:'total'  
                }} pathTo='DashPeople'
                gridArea={'vi'}>
                    <MdKeyboardArrowRight/>
                </MainInfoCard>
                <MainInfoCard data={{
                  type:'Financeiro',
                  value:0,
                  aggregationType:'total'  
                }} pathTo='DashPeople'
                gridArea={'fi'}>
                    <MdKeyboardArrowRight/>
                </MainInfoCard>
                <MainInfoCard data={{
                  type:'Ocorrências',
                  value:0,
                  aggregationType:'total'  
                }} pathTo='DashPeople'
                gridArea={'oc'}>
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