import React from 'react';
import { Container, BlueRibbon, RedRibbon, PictureHolder, GreyWall } from './TeamPhotoScreen.style';
import { Img } from 'theme/image';
import teamPhotoSrc from 'assets/team-photo.jpg';
import blueRibbonSrc from 'assets/blue-ribbon.png';
import redRibbonSrc from 'assets/red-ribbon.png';
import { OverLogo } from 'components/Menu/Menu';

export default function TeamPhotoScreen(props) {
  return (
    <Container relative>
      <OverLogo hideInMobileAndTablet/>
      <GreyWall src={require('assets/grey-wall.jpg')} alt={'grey wall'}/>
      <PictureHolder>
        <Img
          block
          width="100%"
          src={teamPhotoSrc}
          alt={'Revolt team photo'}/>

        <BlueRibbon
          src={blueRibbonSrc}
          alt={'blue ribbon'}
        />

        <RedRibbon
          src={redRibbonSrc}
          alt={'red ribbon'}
        />
      </PictureHolder>
    </Container>
  );
}
