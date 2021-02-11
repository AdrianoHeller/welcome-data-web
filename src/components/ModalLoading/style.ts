import styled,{ keyframes } from 'styled-components';

export const Bounce = keyframes`
    0%{
        top:0;
        -webkit-animation-timing-function: ease-in;
    };
    40%{};
    50%{
        top:0;
        -webkit-animation-timing-function: ease-out;
        width: 12px;        
    };
    55%{
        top:0;
        -webkit-animation-timing-function: ease-in;
        width: 13px;
        height: 12px;
    };
    65%{
        top:0;
        -webkit-animation-timing-function: ease-out;
        width: 12px;
        height: 16px;
    };
    95%{
        top:0;
        -webkit-animation-timing-function: ease-in;
    };
    100%{
        top:0;
        -webkit-animation-timing-function: ease-in;
    };
`;

export const Container = styled.div`
    position: fixed;
    left:0;
    top:0;
    height:100vh;
    background-color: rgba(35,35,35,0.85);
`;

export const ModalWrapper = styled.div`

`;
export const Text = styled.p`

`;
export const Counter = styled.span`

`;