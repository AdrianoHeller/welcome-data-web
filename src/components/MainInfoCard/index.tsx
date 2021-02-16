import React from 'react';
import { Link } from 'react-router-dom';
import { Container,LeftSide,RightSide,TextBoxTop } from './style';

interface IChildProps{
    data?: {
        type: string,
        value: number
    },
    pathTo: string,
    children: React.ReactNode
}

const MainInfoCard: React.FC<IChildProps> = ({ data,pathTo,children }) => {
    return(
        <>
            <Container>
                <LeftSide>
                    <span></span>
                </LeftSide>
                <RightSide>
                    <TextBoxTop>
                        <p>{data!.type}</p>
                        <h3>{data!.value}</h3>
                    </TextBoxTop>
                    <Link to={`/${pathTo}`}>
                        { children }
                    </Link>
                </RightSide>        
            </Container>
        </>
    )
};

export default MainInfoCard;