import './App.css';
import { Container, FormContainer, FormWrapper, ImageContainer, InputFieldWrapper, LoginSelectOptionsWrapper, LoginCheckboxWrapper, LoginCheckbox, Button, RegisterLink, InputFieldContainer, InputPassword, InputPasswordWrapper, InputLoginID, Image, EyeButton, Form, GoogleButton } from './styles/login-page-styles';
import illustration from "./assets/login-illustration.png";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react';

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginID, setLoginID] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="App">
      <Container>
        <ImageContainer>
          <h1>Welcome Back! 😀</h1>
          <Image src={illustration} alt={"illustration image of a woman"} />
        </ImageContainer>
        <FormContainer>
          <FormWrapper autoComplete="form">
            <h1>Login</h1>
            <Form>
            <InputFieldContainer>
              <input type="hidden" value="extra" />
              <InputFieldWrapper>
                <label htmlFor="email">Login ID</label>
                <InputLoginID 
                onChange={(e) => setLoginID(e.target.value)}
                value={loginID}
                autoComplete="login"
                type="text" name="login_id" id="login_id" placeholder='Enter Login ID'/>
              </InputFieldWrapper>
              <InputFieldWrapper>
                <label htmlFor="password">Password</label>
                <InputPasswordWrapper>
                  <InputPassword
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  autoComplete="new_password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="new_password" id="new_password" placeholder='Enter Password'/>
                  <EyeButton onClick={togglePasswordVisibility}>{passwordVisible? <BsEyeFill/> : <BsEyeSlashFill/>}</EyeButton>
                </InputPasswordWrapper>
              </InputFieldWrapper>
            </InputFieldContainer>
            </Form>
            <LoginSelectOptionsWrapper>
              <LoginCheckboxWrapper>
                <LoginCheckbox>
                    <input type="checkbox" name="remember_me" id="remember_me" />
                    <label htmlFor="remember_me">Remember Me</label>
                  </LoginCheckbox>
                  <LoginCheckbox>
                    <input type="checkbox" name="agree_to_terms" id="agree_to_terms" />
                      <label htmlFor="agree_to_terms">Agree to <a href="">Terms & Conditions</a></label>
                  </LoginCheckbox>
              </LoginCheckboxWrapper>
              <a href="">Change Password</a>
            </LoginSelectOptionsWrapper>
            <Button>Login</Button>
            <p>Or</p>
            <GoogleButton><FcGoogle/> Continue with Google</GoogleButton>
            <RegisterLink>Don't have an account? <a href="">Register Here</a></RegisterLink>
          </FormWrapper>
        </FormContainer>
      </Container>
    </div>
  );
}

export default App;
