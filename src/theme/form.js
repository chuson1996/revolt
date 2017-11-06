import styled from 'styled-components';
import { Div } from 'theme/grid';
import { red } from 'theme/variables';
import tinycolor from 'tinycolor2';

const borderRadius = '0';

export const InputGroup = styled(Div)`
  display: flex;

  input {
    flex: 1;
    height: 4rem;
    border-radius: ${borderRadius} 0 0 ${borderRadius};
    border: 0;
    padding-left: 20px;
    padding-bottom: 0;
    padding-top: 0;

    font-size: 1rem;

    &:focus {
      outline-offset: 0;
      outline: 0;
    }
  }

  button {
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 0 ${borderRadius} ${borderRadius} 0;
    height: 4rem;
    background-color: ${red};
    color: white;
    border: 0;

    font-size: 1rem;
    transition: background-color .3s, padding-right .3s;

    &:focus {
      outline-offset: 0;
      outline: 0;
    }

    &:hover {
      background-color: ${tinycolor(red).brighten(10).toString()};
      padding-right: 20px;
    }
  }
`;
