import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Motion, spring } from 'react-motion';
import ReactAccelerometer from 'react-accelerometer';
import media from './theme/media';
import Menu from './components/Menu/Menu';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Paytone+One');

  body {
    font-size: 40px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  perspective: 490px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url('${require('./assets/hero_background.jpg')}');
  background-size: 120%;
  background-position: 70% bottom;
  pointer-events: none;
  z-index: -1;
  background-repeat: no-repeat;

  ${media.tablet`
    background-size: cover;
    background-position: 60%;
  `}
`;

const Revolt = styled.img`
  max-height: 240px;
  max-width: 80vw;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        Placeholder
      </div>
    );
  }
}

export default App;
