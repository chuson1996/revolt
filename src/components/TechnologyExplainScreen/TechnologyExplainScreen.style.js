import styled from 'styled-components';
import { Div } from 'theme/grid';
import { Screen } from 'containers/App/App.style';
import mbMedia from 'theme/mobileFirstMedia';


export const Container = styled(Screen)`
  padding-top: 10rem;
  padding-bottom: 50px;
  position: relative;
  ${mbMedia.btTablet`
    padding-bottom: 17rem;
  `}
`;

export const Explain = styled(Div)`
  display: flex;
  flex-direction: column;
  & > div {
    flex: 1;
    padding: 10px;
  }
  
  ${mbMedia.btTablet`
    flex-direction: row;
  `}
`;

export const ThumbnailImg = styled.img`
  height: 5rem;
  margin-right: 2rem;
  display: inline-block;
  cursor: pointer;
`;

export const RevoltShoeOutsideImg = styled.img`
  width: 100%;
`;

export const RevoltShoeBackImg = styled.img`
  width: 33%;
  display: block;
  margin: auto;
`;
