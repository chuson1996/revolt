import React from 'react';
import RevoltLogo from 'assets/revolt-logo.svg';
import { MenuContainer, Logo } from './Menu.style';

export default function Menu() {
  return (
    <MenuContainer>
      <Logo src={RevoltLogo} alt={'revolt logo'}/>
    </MenuContainer>
  );
}
