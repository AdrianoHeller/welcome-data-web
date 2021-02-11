import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    MdAccountCircle,
    MdAirplanemodeActive,
    MdAttachMoney,
    MdMemory,
    MdHighlight,
    MdPhoneIphone,
    MdDashboard
    } from 'react-icons/md';
import { 
    Container,
    BadgeContainer,
    BadgeData,
    BadgeWrapper,
    BadgeIcon,
    BadgeHr,
    BadgeAvatar,
    BadgeText,
    OptionContainer,
    OptionList,
    Option } from './style';

import WelcomeIcon from '../../assets/logo.svg';
import UserAvatar from '../../assets/mestre.png';

const MenuAside: React.FC = () => {
    
    const [currentHour,setCurrentHour] = useState();

    const generateDate: Function = (): string => {
        const date = new Date();
        const year = date.getFullYear();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const getTime = `${date.getHours()}:${date.getMinutes()}`
        return `${day}/${month}/${year}, às ${getTime}`;
    };

    return(
        <Container>
                    <BadgeContainer>
                        <BadgeWrapper>
                            <BadgeIcon src={WelcomeIcon}/>
                        </BadgeWrapper>
                        <BadgeWrapper>
                            <BadgeAvatar src={UserAvatar}/>
                        </BadgeWrapper>
                        <BadgeText>
                            <BadgeData>Adriano Heller Mylla</BadgeData>
                            <BadgeData>CTO</BadgeData>
                        </BadgeText>
                        <BadgeText>
                            <BadgeData>Último acesso em :<br/>{generateDate()}</BadgeData>
                        <BadgeHr/>
                        </BadgeText>
                    </BadgeContainer>
                    <OptionContainer>
                        <OptionList>
                            <Option>
                                <MdAccountCircle/>
                                <Link to={'/DashPeople'}>Clientes</Link>
                            </Option>
                            <Option>
                                <MdAirplanemodeActive/>
                                <Link to={'/DashTrips'}>Viagens</Link>
                            </Option>
                            <Option>
                                <MdAttachMoney/>
                                <Link to={'/DashMoney'}>Financeiros</Link>
                            </Option>
                            <Option>
                                <MdDashboard/>
                                <Link to={'/DashReports'}>Relatórios</Link>
                            </Option>
                            <Option>
                                <MdHighlight/>
                                <Link to={'/DashEvents'}>Ocorrências</Link>
                            </Option>
                            <Option>
                                <MdPhoneIphone/>
                                <Link to={'/DashApis'}>Integrações</Link>
                            </Option>
                            <Option>
                                <MdMemory/>
                                <Link to={'/DashWeex'}>Weex</Link>
                            </Option>
                        </OptionList>
                    </OptionContainer>           
        </Container>
    )
};

export default MenuAside;