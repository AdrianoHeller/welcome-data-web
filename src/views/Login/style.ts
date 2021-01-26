import styled from 'styled-components';
import { 
    MdPermIdentity,
    MdLock } from 'react-icons/md';

export const Container = styled.div`
    display: grid;
    background-color:${props => props.theme.colors.contentBackground};
    grid-template-columns:100%;
    grid-template-rows: 30vh 60vh 10vh;
    grid-template-areas:
        'LC'
        'FG'
        'FD'
    ;
`;

export const LogoContainer = styled.div`
    grid-area: 'LC';
`;

export const Logo = styled.img`

`;

export const FormGroup = styled.div`
    grid-area: 'FG';
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EmailContainer = styled.div`
    position: relative;
    width: 100%;
    background: red;
`;

export const Email = styled.input`
    text-indent:20px;
    width: 80%;    
`;

export const IdIcon = styled(MdPermIdentity)`
    position: absolute;
`;

export const Password = styled.input`
    text-indent:20px;
    width:100%;
`;

export const PasswordContainer = styled.div`
    position: relative;
`;

export const LockIcon = styled(MdLock)`
    position: absolute;
`;

export const Submit = styled.button`
    max-width:200px;
    width: 200px;
    margin: 0 auto;
`;

export const ForgotData = styled.div`
    grid-area:'FD';
    > a{
        text-decoration:none;
        
    }
`;
export const Rem = styled.p`

`;