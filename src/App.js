import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Motion, spring } from 'react-motion';
import ReactAccelerometer from 'react-accelerometer';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Paytone+One');

  body {
    font-size: 40px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  h1, h2, h3, h4 {
    font-family: 'Paytone One', sans-serif;
    color: #ff0000;
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
  background-image: url('${require('./assets/hero.jpg')}');
  background-size: cover;
  background-position: center;

  pointer-events: none;
  z-index: -1;
`;

const Revolt = styled.img`
  height: 120px;
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
            <Motion style={!position ? this.state.heroImage : {
              // rotateX: spring(position.x / 10 * 5),
              // rotateY: spring(position.y / 10 * 5),
            }}>
              {({ rotateX, rotateY }) =>
                <HeroImage
                  style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`,
                    WebkitTransform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`
                  }}
                  alt="background"
                />
              }
            </Motion>

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
                    src={require('./assets/revolt.svg')}
                    alt="revolt"
                  />

                  <h1>COMING SOON</h1>
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
