import React from 'react';
import { Link } from 'react-router-dom';
import { Container,LeftSide,RightSide,TextBoxTop } from './style';

interface IChildProps{
    data?: {
        type: string,
        value: number,
        aggregationType: string,
    },
    pathTo: string,
    children: React.ReactNode,
    gridArea: string
}

const MainInfoCard: React.FC<IChildProps> = ({ data,pathTo,children,gridArea }) => {
    
    return(
        <>
            <Container gridArea={gridArea}>
                <LeftSide>
                    <span></span>
                </LeftSide>
                <RightSide>
                    <TextBoxTop>
                        <p>{data!.type}</p>
                        <h3>{data!.value}</h3>
                        <h1>{data!.aggregationType}</h1>
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