import React,{ useState, useCallback, useEffect, useRef } from 'react';
import axios from  'axios';
import { Link } from 'react-router-dom';
import WelcomeLogo from '../../assets/logo.svg';
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
    Reg
} from './style';

const Login: React.FC = () => {

const focusRef = useRef<HTMLInputElement|null>(null);
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

useEffect(() => {
    focusRef.current!.focus();
},[])

    return(
        <Container>
            <LogoContainer>
                <Logo src={WelcomeLogo}/>
            </LogoContainer>
            <FormGroup>
                <EmailContainer>
                    <IdIcon/>
                    <Email
                        ref={focusRef}
                        type={'email'}
                        value={email}
                        autoFocus={true}
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
                <Link to={'/'}><Reg>Não possuo cadastro</Reg></Link>
            </ForgotData>
        </Container>
    )
};

export default Login;