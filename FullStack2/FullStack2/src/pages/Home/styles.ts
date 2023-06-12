import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const PageContent = styled.div`
  width: 95%;
  height: 85vh;
  margin: 0 auto;
  padding-top: 3rem;
  background-color: ${ colors.white };
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: none;
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const Button = styled.button`
  width: 168px;
  height: 40px;
  border: none;
  background-color: ${ colors.primary };
  border-radius: 8px;
  padding: .5rem;
  color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;

  :hover{
    cursor: pointer;
  }
`;

export const MainContent = styled.main`
  width: 95%;
  margin: 0 auto;
  display: flex;
`;

export const CurrentPageTitle = styled.h2`
  color: ${ colors.primary };
  font-size: 2.2rem;
`;