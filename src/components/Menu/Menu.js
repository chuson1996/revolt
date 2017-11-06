import React from 'react';
import RevoltLogo from 'assets/revolt-logo.svg';
import styled, { css } from 'styled-components';
import revoltLogoUrl from 'assets/revolt-logo-black.svg';
import media from 'theme/media';

const padding = 20;
export const OverLogo = styled.div`
  width: 50px;
  height: 100%;
  background-image: url(${revoltLogoUrl});
  position: absolute;
  top: 0;
  left: ${padding}px;
  background-position: ${padding}px ${padding + 4}px;
  background-size: 50px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  z-index: 100;

  pointer-events: none;

  ${({ hideInMobileAndTablet }) => hideInMobileAndTablet && css`
    ${media.tablet`
      display: none;
    `}
  `}
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: ${padding}px;
  z-index: 99;
`;

export const Logo = styled.img`
  width: 50px;
`;

export default function Menu() {
  return (
    <MenuContainer>
      <Logo src={RevoltLogo} alt={'revolt logo'}/>
    </MenuContainer>
  );
}
