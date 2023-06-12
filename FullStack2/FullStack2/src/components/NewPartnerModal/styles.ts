import styled from 'styled-components';
import { colors } from "../../GlobalStyle";

export const Container = styled.div`
  width: 50vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const FormContainer = styled.div`
  margin-top: 1.5rem;
  width: 95%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem; 
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonsField = styled(Row)`
  margin-top: 2rem;
`;

export const HalfColumn = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;

  div#field {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  div#registers {
    width: 100%;

    span {
      margin-right: .5rem;
      font-size: .8rem;
      font-weight: bold;
      color: ${ colors.grey };
    }
  }
`;

export const Title = styled.h1`
  color: ${ colors.primary };
`;



export const Button = styled.button`
  width: 100%;
  height: 4rem;
  border-radius: 16px;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;

  :hover{
    cursor: pointer;
  }

`;
