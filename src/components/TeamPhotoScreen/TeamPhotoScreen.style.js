import styled from 'styled-components';
import { Div } from 'theme/grid';
import { Img } from 'theme/image';
import mbMedia from 'theme/mobileFirstMedia';
import media from 'theme/media';

export const Container = styled(Div)`
  position: relative;
`;

export const BlueRibbon = styled(Img)`
  position: absolute;
  opacity: 0.9;
  bottom: 0;
  right: 0;
  width: 30%;
  transform: translate(25%, 25%);

  ${mbMedia.btTablet`
    width: 15%;
  `}
`;

export const RedRibbon = styled(Img)`
  position: absolute;
  opacity: 0.9;
  top: 0;
  left: 0;
  width: 30%;
  transform: translate(-25%, -25%);

  ${mbMedia.btTablet`
    width: 15%;
  `}
`;

export const PictureHolder = styled.div`
  position: relative;
  ${mbMedia.btTablet`
    margin-left: 15vw;
    margin-right: 5vw;
  `}
`;

export const GreyWall = styled.img`
  position: absolute;
  left: 0;
  top: -7rem;
  width: 50vw;
  ${media.tablet`
    display: none;
  `}
`;
