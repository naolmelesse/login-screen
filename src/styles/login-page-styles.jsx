import styled from "styled-components";

export const Container = styled.div`
    user-select: none;
    @media (max-width: 767px) {
        flex-direction: column;
        padding-top: 2rem;
        height: auto;
        
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    h1{
        font-size: 2.5rem;
        @media (max-width: 480px) {
            font-size: 2rem;
        }
        @media (max-width: 380px) {
            font-size: 1.5rem;
        }
    }
`;

export const ImageContainer = styled.div`
    @media (max-width: 480px) {
        width: 80%;
    }
    width: 40%;
`;

export const Image = styled.img`
    @media (max-width: 767px) {
        width: 50%;
        height: auto;
    }

    width: 40%;
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
        width: 90%;
        height: auto;
    }
    width: 55%;
    height: 90%;
    @media (min-width: 768px) {
        background: #fefefe;
        box-shadow: 0 0 10px #EBF3E8;
    }
    border-radius: 1rem;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 767px) {
          width: 100%;
          height: auto;
    }
    width: 80%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const EyeButton = styled.div`
    font-size: 1rem;
    color: gray;
    cursor: pointer;
`;

export const InputFieldContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap:1rem;
`;

export const InputLoginID = styled.input`
    border-radius: 0.5rem;
    outline: none;
    border: 0.1rem solid gray;
    padding: 1rem;
    font-size: 1rem;
    &:active, &:focus{
        border: 0.1rem solid #F79F24;
    }
    `;
    
    export const InputPasswordWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.1rem solid gray;
    border-radius: 0.5rem;
    padding-right: 1rem;
    overflow: hidden;
    &:focus-within {
        border: 0.1rem solid #F79F24;
      }
    `;
    
export const InputPassword = styled.input`
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    outline: none;
    border: none;
`;

export const InputFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    input{
        background: none;
    }
    label{
        text-align: left;
        font-weight: 500;
    }
    
    input::placeholder {
        font-size: 1rem;
    }

    input:hover,
    input:focus,
    input:valid {
        background: none;
    }


`;

export const LoginSelectOptionsWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      margin-top:1rem;
      @media (max-width: 280px) {
        flex-direction: column;
        }
      @media (max-width: 480px) {
        font-size: 0.8rem;
        }
      a{
        color: #F79F24;
        text-decoration: none;

        @media (max-width: 280px) {
            text-align: right;
            margin-top: 0.5rem;
        }
        }
    `;
    
    export const LoginCheckboxWrapper = styled.div`
      display: flex;
      flex-direction: column;
      gap:1rem;
      `;
      
export const LoginCheckbox = styled.div`
display: flex;
gap: 0.5rem;
@media (max-width: 480px) {
    gap: 0.2rem;
}
width: fit-content;
      a{
          color: #F79F24;
          text-decoration: underline;
          &:hover{
              text-decoration: none;
        }
      }
`;

export const Button = styled.button`
      cursor: pointer;
      &:hover{
          background-color: #1562A1;
      }
      transition: background-color 0.3s;
      width: 70%;
      border-radius: 0.5rem;
      @media (max-width: 480px) {
          border-radius: 0.3rem;
          margin-top: 1rem;
          padding: 0.5rem;
        }
        padding: 1rem 0;
      margin: auto;
      border: none;
      background-color: #1575A7;
      font-size: 1rem;
      color: #fff;
      margin-top: 2rem;
      `;

export const GoogleButton = styled.button`
    display: flex;
    align-items:center;
    justify-content:center;
    gap: 1rem;
    cursor: pointer;
    width: 70%;
    border-radius: 0.5rem;
    @media (max-width: 280px) {
        font-size:0.8rem;
  }
    @media (max-width: 480px) {
          margin-top: 0rem;
          margin-bottom: 1rem;
          border-radius: 0.3rem;
        padding: 0.5rem;
    }
      padding: 1rem 0;
      margin: auto;
      border: 0.1rem solid #777;
      background-color: #fefefe;
      font-size: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
`;

export const RegisterLink = styled.p`
      text-align: center;
      @media (max-width: 480px) {
        font-size: 0.8rem;
        }
      a{
        color: #F79F24;
        font-weight: bold;

        &:hover{
            text-decoration: none;
      }
      }
`;