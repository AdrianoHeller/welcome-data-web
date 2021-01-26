import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
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
export const Logo = styled.div`

`;
export const FormGroup = styled.div`
    grid-area: 'FG';
    display: flex;
    flex-direction: column;
`;
export const Email = styled.input`
    padding: 10px;
        
`;
export const Password = styled.input`

`;

export const Submit = styled.button`

`;
export const ForgotData = styled.div`
    grid-area:'FD';
`;
export const Rem = styled.p`

`;