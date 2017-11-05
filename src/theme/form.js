import styled from 'styled-components';
import { Div } from 'theme/grid';
import { red } from 'theme/variables';

export const InputGroup = styled(Div)`
  display: flex;

  input {
    flex: 1;
    height: 43px;
    border-radius: 25px 0 0 25px;
    border: 0;
    padding-left: 20px;

    &:focus {
      outline-offset: 0;
      outline: 0;
    }
  }
  button {
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 0 25px 25px 0;
    height: 45px;
    background-color: ${red};
    color: white;
    border: 0;
  }
`;
