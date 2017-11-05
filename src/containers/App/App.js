import React, { Component } from 'react';
import Menu from 'components/Menu/Menu';
import PlayButton from 'components/PlayButton/PlayButton';
import { Screen1, Screen2, RevoltTextSmLogo, Hr, NewsletterCTAScreen, RevoltTextLongLogo, SubHeadlineDiv, VerticalHr } from './App.style';
import { InputGroup } from 'theme/form';
import { Div, Flex } from 'theme/grid';
import revoltTextLogoSrc from 'assets/revolt-text-logo.svg';
import revoltTextLongLogoSrc from 'assets/revolt-text-long-logo.svg';
import { OwnYourDifferenceCTAScreen, TechnologyExplainScreen, TeamPhotoScreen, TeamMemberScreen } from 'components';

class App extends Component {
  render() {
    return (
      <Div noOverflow>
        <Menu/>
        <Screen1>
          <RevoltTextSmLogo src={revoltTextLogoSrc} alt={'revolt logo'}/>
          <RevoltTextLongLogo src={revoltTextLongLogoSrc} alt={'revolt logo'}/>

          <h2 className="balance-text">Artist-designed sneakers made from recycled materials.</h2>

          <SubHeadlineDiv>
            <p>
              <b>BE THE FIRST</b>
              <br/>
              <small>
                Get the latest news on our development, styles and EXCLUSIVE offers straight to your email.
              </small>
            </p>

            <InputGroup marginTop="25px">
              <input type="email" placeholder={'Email'}/>
              <button><b>SUBSCRIBE</b></button>
            </InputGroup>
          </SubHeadlineDiv>
        </Screen1>

        <Screen2 relative>
          <VerticalHr/>
          <Hr/>
          <Flex>
            <Flex hideInTablet flex={2} alignItems={'flex-end'} paddingBottom="16px">
              <PlayButton href="https://youtu.be/B2DV1LR-5t8" title={'Click to see our product video'} target="_blank"/>
            </Flex>
            <Div flex={3}>
              <p>
                We believe in the power of art to bring people together and transform imagination into reality. Revolt empowers artists to share their stories using the universal language of art and our amazing sneaker as a blank canvas. We collaborate with the most talented artists and create every pair of our sneakers with bold and expressive visuals. Why are we doing this? Because mainstream thinking sucks; at Revolt we value rebellious intelligence to erase all conventional boundaries and build a different world free from the status quo.
              </p>
            </Div>
          </Flex>
          <Hr/>
        </Screen2>

        <OwnYourDifferenceCTAScreen/>

        <TechnologyExplainScreen/>

        <TeamPhotoScreen/>

        <TeamMemberScreen/>

        <NewsletterCTAScreen>
          <h1 className="balance-text">Join the movement.</h1>
          <p>Subscribe to our newsletter.</p>
          <InputGroup marginTop="25px">
            <input type="email" placeholder={'Email'}/>
            <button>Subscribe</button>
          </InputGroup>          
        </NewsletterCTAScreen>
      </Div>
    );
  }
}

export default App;
