import styled,{ keyframes} from 'styled-components';

export const load1 = keyframes`
    0%{};
    80%{};
    100% {
        box-shadow: 0 0;
        height: 4em;
    };
    40% {
        box-shadow: 0 -2em;
        height: 5em;
    };    
`;

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height:100vh;
    text-align:center;
    background-color: rgba(35,35,35,0.8);
    > p {        
        top: 40vh;
        left: 46vw;
        margin:0;
        padding: 0;
        font-size:1.5rem;
        font-family:'Rajdhani';
    }
`;

export const ModalWrapper = styled.div`
    top:25vh;
    &,
    &:before,
    &:after {
        background: ${props => props.theme.colors.contentBackground};
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
        };
    & {        
        color: ${props => props.theme.colors.contentBackground};
        text-indent: -9999em;
        margin: 88px auto;
        position: relative;
        font-size: 11px;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    };
    &:before,
    &:after {
        position: absolute;
        top: 0;
        content: '';
    };
    &:before {
        left: -1.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    };
    &:after {
        left: 1.5em;
    };
`;