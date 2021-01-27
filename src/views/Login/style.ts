import styled from 'styled-components';
import { 
    MdPermIdentity,
    MdLock } from 'react-icons/md';

export const Container = styled.div`
    display: grid;
    background-color:${props => props.theme.colors.contentBackground};
    grid-template-columns:100%;
    grid-template-rows: 30vh 30vh 40vh;
    grid-template-areas:
        'LC'
        'FG'
        'FD'
    ;
    max-height: 100vh;
`;

export const LogoContainer = styled.div`
    grid-area: 'LC';
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const Logo = styled.img`
    width: 150px;
    margin: 0;
    padding:0;
`;

export const FormGroup = styled.div`
    grid-area: 'FG';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const EmailContainer = styled.div`
    position: relative;
    width: 50%;    
`;

export const Email = styled.input`
    text-indent:calc((25vw / 2) + 10px);
    width: 100%;
    padding: 10px 10px 10px 0;    
    border: none;
    background: none;
    border-bottom: 1px solid ${props => props.theme.colors.cardThree};
    margin: 0 0 10px 0;
`;

export const IdIcon = styled(MdPermIdentity)`
    position: absolute;
    font-size:1.7rem;
    margin:5px 0 0 calc(200px / 8);
    color:${props => props.theme.colors.textClear};
`;

export const PasswordContainer = styled.div`
    position: relative;
    width: 50%;
`;

export const Password = styled.input`
    text-indent:calc((25vw / 2) + 10px);
    width:100%;
    padding: 10px 10px 10px 0;
    border: none;
    background: none;   
    border-bottom: 1px solid ${props => props.theme.colors.cardThree};
    margin: 0 0 10px 0;
`;

export const LockIcon = styled(MdLock)`
    position: absolute;
    font-size:1.5rem;
    margin:7px 0 0 calc(200px / 8);
    color:${props => props.theme.colors.textClear} ;

`;

export const Submit = styled.button`
    max-width:200px;
    width: 120px;
    margin: 10px 0;
    padding: 8px;
    border-radius: 20px;
    border: none;
    transition: opacity 0.5s;
    cursor: pointer;
    &:hover{
        opacity: .2;
        background-color: ${props => props.theme.colors.cardTwo};
        color:${props => props.theme.colors.textClear};
    };
`;

export const ForgotData = styled.div`
    grid-area:'FD';
    > a{
        text-decoration:none;
        text-align: center;    
    }
`;

export const Rem = styled.p`
    color: ${props => props.theme.colors.textClear};
    font-family: 'Rajdhani';
`;

export const Reg = styled.p`
    color: ${props => props.theme.colors.textClear};
    font-family: 'Rajdhani';
`;