import styled from "styled-components";
import { colors } from "../../GlobalStyle";

type RowProps = {
  isHeader ?: boolean
}

export const ListContainer = styled.div`
  padding-top: 1rem;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

export const Row = styled.div<RowProps>`
  width: 100%;
  height: 3rem;
  background-color: ${(props) => (props.isHeader ? colors.lightGrey : colors.lightGrey)  };
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  width: 17%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 1px solid black;
`;

export const Title = styled.p<RowProps>`
  max-width: 95%;
  word-wrap: break-word;
  text-align: center;
  //border: 1px solid pink;
  color: ${ colors.grey };
  font-size: ${ (props) => ( props.isHeader ? '1rem' : '0.8rem' ) };
  font-weight: 600;
  line-height: 16px;
`;

export const ActionButton = styled.div`
  width: 64px;
  height: 32px;
  margin-left: 8px;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    cursor: pointer;
  }

`;

export const NoResults = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 120px;
    height: 120px;
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${ colors.grey }
  }
`;

