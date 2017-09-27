import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Motion, spring } from 'react-motion';
import ReactAccelerometer from 'react-accelerometer';
import media from './theme/media';

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
  constructor(props) {
    super(props);

    this.state = {
      heroImage: {
        rotateX: 0,
        rotateY: 0
      },
      revolt: {
        x: 0,
        y: 0
      }
    }
  }

  onMouseMove = ({ clientX, clientY, x, y }) => {
    const {
      innerWidth: screenWidth,
      innerHeight: screenHeight
    } = window;

    const leftPercent = x !== undefined ? x : ((clientX - screenWidth / 2) / screenWidth);
    const topPercent = y !== undefined ? y : ((clientY - screenHeight / 2) / screenHeight);

    this.setState({
      heroImage: {
        rotateX: spring(leftPercent * 5),
        rotateY: spring(topPercent * 5)
      },
      revolt: {
        x: spring(leftPercent * 50),
        y: spring(topPercent * 50)
      }
    });
  };

  onTilt = ({ x, y }) => {
    const leftPercent = x / 10;
    const topPercent = y / 10;

    this.setState({
      heroImage: {
        rotateX: spring(leftPercent * 5),
        rotateY: spring(topPercent * 5)
      },
      revolt: {
        x: spring(leftPercent * 50),
        y: spring(topPercent * 50)
      }
    });
  }

  render() {
    return (
      <ReactAccelerometer>
        {(position, rotation) =>
          <Container onMouseMove={position ? null : this.onMouseMove}>
            <HeroImage
              alt="background"
            />
            {/* <Motion style={!position ? this.state.heroImage : {
              // rotateX: spring(position.x / 10 * 5),
              // rotateY: spring(position.y / 10 * 5),
            }}>
              {({ rotateX, rotateY }) =>
              }
            </Motion> */}

            <Motion style={!position ? this.state.revolt : {
              x: spring(position.x / 20 * 50),
              y: spring(-position.y / 20 * 50)
            }}>
              {({ x, y }) =>
                <div
                  style={{
                    transform: `translate(${x}%, ${y}%)`,
                    textAlign: 'center'
                  }}
                >
                  <Revolt
                    src={require('./assets/revolt.png')}
                    alt="revolt"
                  />
                </div>
              }
            </Motion>
          </Container>
        }
      </ReactAccelerometer>
    );
  }
}

export default App;
