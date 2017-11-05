import styled from 'styled-components';
import { Div } from 'theme/grid';
import { blue } from 'theme/variables';
import media from 'theme/media';
import { Img } from 'theme/image';

export const Container = styled(Div)`
  background-color: ${blue};
  color: white;

  padding-left: 10vw;
  padding-right: 10vw;
  ${media.tablet`
    padding-left: 30px;
    padding-right: 30px;
  `}

  padding-top: 30px;
  padding-bottom: 30px;
`;

export const OwnYourDifferenceImg = styled(Img)`
  width: 580px;
  transform: translate(-80px,-110px);
  margin-bottom: -148px;
  ${media.tablet`
    margin-left: -10px;
    width: 100%;
    margin-bottom: 0%;
    transform: none;
  `}
`;

