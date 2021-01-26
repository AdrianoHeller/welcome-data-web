import React,{ useState, useCallback } from 'react';
import axios from  'axios';
import { Link } from 'react-router-dom';
import {
    Container,
    LogoContainer,
    Logo,
    FormGroup,
    IdIcon,
    LockIcon,
    EmailContainer,
    Email,
    PasswordContainer,
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
    const authData = await axios.get('/auth');
    console.log(authData);
},[]);

    return(
        <Container>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <FormGroup>
                <EmailContainer>
                    <IdIcon/>
                    <Email
                        type={'email'}
                        value={email}
                        onChange={handleEmailChange}
                        placeholder={'Insira seu e-mail'}
                    />
                </EmailContainer>
                <PasswordContainer>
                    <LockIcon/>
                    <Password
                    type={'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder={'Insira sua senha'}
                    />
                </PasswordContainer>
                <Submit onClick={handleFormSubmit}>Entrar</Submit>
            </FormGroup>
            <ForgotData>
                <Link to={'/'}><Rem>Esqueci minha senha</Rem></Link>
            </ForgotData>
        </Container>
    )
};

export default Login;