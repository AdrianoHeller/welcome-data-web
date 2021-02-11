import React from 'react';

import {
    Container,
    ModalWrapper,
    
} from './style';

const ModalLoading: React.FC = () => {
    return(
        <Container>
            <ModalWrapper/>       
            <p>Loading</p>
        </Container>
    )
};

export default ModalLoading;