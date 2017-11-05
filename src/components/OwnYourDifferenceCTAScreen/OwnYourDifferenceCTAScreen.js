import React from 'react';
import { Container, OwnYourDifferenceImg } from './OwnYourDifferenceCTAScreen.style';
import { InputGroup } from 'theme/form';
import ownYourDifferenceSrc from 'assets/ownyourdifference.png';

export default function OwnYourDifferenceCTAScreen() {
  return (
    <Container>
      <OwnYourDifferenceImg
        marginLeft={'-10px'}
        width="100%"
        src={ownYourDifferenceSrc}
        alt={'Own your difference'}/>

      <h2 className="balance-text">Become our partner artist</h2>
      <InputGroup marginTop="25px">
        <input type="email" placeholder={'Email'}/>
        <button>Partner Up</button>
      </InputGroup>
      <p>The world & Revolt value your talent.</p>
    </Container>
  );
}
