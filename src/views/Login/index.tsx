import React,{ useState, useCallback } from 'react';
import {
    Container,
    LogoContainer,
    Logo,
    FormGroup,
    Email,
    Password,
    Submit,
    ForgotData,
    Rem,
} from './style';

const Login: React.FC = () => {

const [email,setEmail] = useState<string>('');
const [password,setPassword] = useState<string>('');

const handleEmailChange = useCallback((evt:any):void => {
    setEmail(evt.target.value);
},[]);

const handlePasswordChange = useCallback((evt:any):void => {
    setPassword(evt.target.value);
},[]);

const handleFormSubmit = useCallback(async(): Promise<any> => {
    
},[]);

    return(
        <Container>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <FormGroup>
                <Email
                    value={email}
                    onChange={handleEmailChange}
                    placeholder={'Insira seu e-mail'}
                />
                <Password
                value={password}
                onChange={handlePasswordChange}
                placeholder={'Insira sua senha'}
                />
                <Submit>Entrar</Submit>
            </FormGroup>
            <ForgotData>
                <Rem>Esqueci minha senha</Rem>
            </ForgotData>
        </Container>
    )
};

export default Login;