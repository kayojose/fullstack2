import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label {
    color: ${ colors.darkGrey };
    margin-bottom: .6em;
    font-weight: 600;
  }

  input {
    padding: .5rem;
    border-radius: 8px;
    border: 2px solid ${ colors.darkGrey };
    width: 14rem;
    height: 2.4rem;


    placeholder {
      color: ${ colors.grey };
      font-size: 1.2rem;
    }
  }

`;