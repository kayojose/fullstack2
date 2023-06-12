import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const NewPartnerModalContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-width: 30vw;
    max-width: 40vw;
    max-height: 40vh;
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  /* h3 {
    color: #fdb314;
    width: 55%;
    margin: 10px 0 0 0;
  } */

  div#button-form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleContainer = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  /* h2 {
    color: #fdb314;
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    padding: 0;
    margin: 0;
  } */

  img {
    width: 7.5rem;
  }
`;

export const SubTitleContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 20px;
  width: 80%;
  
  p {
    font-size: 1.3rem;
    color: #646464;
    font-weight: 400;
    margin: 10px 0;

    strong {
      color: #583728;
    }
  }
`;

export const Button = styled.button`
  background-color: ${ colors.primary };
  color: ${ colors.lightGrey };
  font-weight: 600;
  width: 50%;
  height: 50px;
`;