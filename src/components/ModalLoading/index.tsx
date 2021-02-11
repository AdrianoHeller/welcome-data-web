import { countReset } from 'console';
import React from 'react';

import {
    Container,
    ModalWrapper,
    Text,
    Counter} from './style';

const ModalLoading: React.FC = () => {
    return(
        <Container>
            <ModalWrapper>                
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
            </ModalWrapper>
            <Text>Loading</Text>
        </Container>
    )
};

export default ModalLoading;