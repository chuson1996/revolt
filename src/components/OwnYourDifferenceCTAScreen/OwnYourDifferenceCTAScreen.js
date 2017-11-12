import React from 'react';
import { Container, OwnYourDifferenceImg } from './OwnYourDifferenceCTAScreen.style';
import ownYourDifferenceSrc from 'assets/ownyourdifference.png';
import { EmailSubscription } from 'components';

export default function OwnYourDifferenceCTAScreen() {
  return (
    <Container>
      <OwnYourDifferenceImg
        marginLeft={'-10px'}
        width="100%"
        src={ownYourDifferenceSrc}
        alt={'Own your difference'}/>

      <EmailSubscription
        title={'Become our partner artist'}
        cta={'Partner Up'}
        subtitle={'The world & Revolt value your talent.'}
        category={'artist'}
        thankYouMessage={'Thank you for signing up. We will contact you really soon!'}
      />
    </Container>
  );
}
