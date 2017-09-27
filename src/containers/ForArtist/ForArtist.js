import React from 'react';
import styled from 'styled-components';

const FullHeightContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  max-width: 100%;
  ${({ clickable }) => clickable && `
    cursor: pointer;
  `}
`;

const RevoltImg = styled(Img)`
  width: 400px;
  margin: auto;
  display: block;
`;

const FullWidthImg = styled(Img)`
  width: 100%;
`;

const Container = styled.div`
  padding: 30px;
`;

const Link = styled.a`
  position: relative;
  text-decoration: none;
  color: black;
  &::before {
    content: ' ';
    position: absolute;
    bottom: -0.2em;
    left: 0;
    width: 60%;
    height: 0.2em;
    background-color: black;

    transition: width .3s;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`;

export default function ForArtist({ artistName }) {
  return (
    <Container>
      <FullHeightContainer>
        <h1>Hi ___</h1>
      </FullHeightContainer>
      <p>Thank you for having interest in Revolt Sneakers. Let us briefly introduce ourselves.</p>

      <RevoltImg src={require('../../assets/revolt_black.png')}/>

      <p>Revolt is the world’s first custom designed sneaker brand made from recycled materials. We believe in the power of art to bring people together and create an exciting world. We collaborate with the most talented urban artists and custom-print every pair of our sneakers with bold, impressive and meaningful graphics. Revolt empowers artists to share their stories and perspectives using the universal language of art and our amazing sneakers as a blank canvas.</p>

      <p>We use the finest recycled fibers which provide the best comfort and durability while giving a helping hand in saving our planet earth. Also, we apply the most advanced cushioning technology (TPU) to forge our energy-support midsole. Revolt sneakers will not only look impressive on your feet but also propels them forward using the energy from your footstrike; the more power you give when walking, <b>the more you feel like walking on the air.</b></p>

      <FullHeightContainer>
        <h2>Now let us introduce ourselves!</h2>
      </FullHeightContainer>


      <FullWidthImg
        src={require('../../assets/jessetran.jpg')}
      />
      <h3>Jesse Tran - <small>Shoe Dog</small></h3>
      <p>
        Born in Saigon, Vietnam <br/>
        Age: 25
      </p>
      <p>
        {'Serial entrepreneur in Ecommerce, Fashion Tech & Manufacturing'}
        <br/>
        Ex- CEO of <Link target="_blank" href="https://www.linkedin.com/company/10904935/">Factory Finder</Link>
        <br/>
        Ex- Partnership Manager at <Link target="_blank" href="https://www.linkedin.com/company/2317307/">DealDash</Link>
        <br/>
        Aalto BIZ Alumnus
        <br/>
        Sneaker addict for 11 years
        <br/>
        Hobbies: Muay Thai, Urban Exploration, Street Art
      </p>

      <hr/>

      <FullWidthImg src={require('../../assets/yuchao.jpg')}/>
      <h3>Yu Chao - <small>Hand of the brand</small></h3>
      <p>
        Born in Taipei, Taiwan<br/>
        Age: 28
      </p>
      <p>
        Lead Visual Designer at Wärtsilä
        <br/>
        Ex- Visual Designer at Brand Union (one of Europe’s largest branding agencies)
        <br/>
        Ex- Co-Founder at Host My Pet
        <br/>
        Aalto ARTS Alumnus
        <br/>
        Website: <Link href="http://www.yuchao-portfolio.com" target="_blank">yuchao-portfolio.com</Link>
        <br/>
        Hobbies: Urban Art, Travelling, Dogs, Reading, Gymming
      </p>
      <FullWidthImg src={require('../../assets/yuchao-works.png')}/>
      <hr/>

      <FullWidthImg src={require('../../assets/chuhoangson.jpg')}/>
      <h3>Chu Hoang Son - <small>SoMe Warrior</small></h3>
      <p>
        Born in Hanoi, Vietnam <br/>
        Age: 21
      </p>
      <p>
        Software Engineer (Web Developer) at Zalando
        <br/>
        Enthusiast in Social Media Marketing, Photography and Storytelling
        <br/>
        Website: <Link href="https://www.sonchu.co" target="_blank">sonchu.co</Link>
        <br/>
        Hobbies: Street Art, Sneakers, Basketball, Piano
      </p>

    </Container>
  );
}
