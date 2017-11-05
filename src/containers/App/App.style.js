import styled from 'styled-components';
import heroBackgroundMobile from 'assets/hero_background-mobile.jpg';
import footerBackground from 'assets/footer-background.jpg';
import greyBackground from 'assets/grey-background.jpg';
import { Div } from 'theme/grid';
import media from 'theme/media';

export const Screen = styled(Div)`
  ${media.tablet`
    padding-left: 30px;
    padding-right: 30px;
  `}
  padding-left: 20vw;
  padding-right: 20vw;
`;

export const Screen1 = styled(Screen)`
  height: 87vh;
  background-image: url('${heroBackgroundMobile}');
  background-size: cover;

  padding-top: 13vh;
  color: white;
`;

export const RevoltTextSmLogo = styled.img`
  display: none;
  width: 100%;
  margin: auto;
  margin-bottom: 40px;
  ${media.tablet`
    display: block;
  `}
`;

export const RevoltTextLongLogo = styled.img`
  width: 100%;
  margin-bottom: 40px;
  ${media.tablet`
    display: none;
  `}
`;

export const SubHeadlineDiv = styled(Div)`
  width: 50%;
  ${media.tablet`
    width: 100%;
  `}
`;

export const VerticalHr = styled.div`
  position: absolute;
  left: 10vw;
  top: 46px;
  width: 10px;
  background-color: white;
  height: calc(100% - 92px);
  ${media.tablet`
    display: none;
  `}
`;

export const Hr = styled.hr`
  border: 0;
  border-top: 7px solid white;
  margin: 30px 60px;
  display: none;
  ${media.tablet`
    display: block;
  `}
`;

export const Screen2 = styled(Screen)`
  padding-top: 30px;
  padding-bottom: 30px;
  background-image: url('${greyBackground}');
  color: white;

  ${media.tablet`
    padding-top: 1px;
    padding-bottom: 1px;
  `}
`;

export const NewsletterCTAScreen = styled(Screen)`
  background-image: url('${footerBackground}');
  color: white;
  padding-top: 20px;
  padding-bottom: 40px;
`;
