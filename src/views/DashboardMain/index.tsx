import React,{ useState,useEffect,useCallback } from 'react';
import MenuAside from '../../components/MenuAside';
import MenuTop from '../../components/MenuTop';
import ModalLoading from '../../components/ModalLoading';
import { Container,Content,MenuHeaderContentLeft,MenuHeaderContentRight } from './style'; 
import MainInfoCard from '../../components/MainInfoCard';
import { MdKeyboardArrowRight,MdExitToApp,MdFilter } from 'react-icons/md';
import CustomBarChart from '../../components/BarChart';
import axios from 'axios';

interface IDataProps{
    data:{
        username: string,
        amount: number,
        earn: number,
        spent: number
    }[]
}

const DashboardMain: React.FC = () => {
    const [apiData,setApiData] = useState<IDataProps|any>([]);

    const getFullData = useCallback(async() => {
        try{
            const data = await axios.get('http://localhost:3001/fullData');
            if(data !== null){
                setApiData(data.data);
                console.log(apiData);
            };
        }catch(err){
            alert(err);
        }         
    },[apiData]);


    useEffect(() => {
        getFullData();        
            
    },[]);

    return(
        <>
        {
            apiData.length > 0 ? 
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
                <CustomBarChart chartName={'Balanço'}
                gridArea={'int'}
                bgLegendColor={{
                    colorOne: 'grey',
                    colorTwo:'yellow'
                }}
                data={apiData}
                />
            </Content>
        </Container> 
        : 
        <ModalLoading/>
        }
        </>
    )
};

export default DashboardMain;