import React from 'react';
import { Wrapper, Circle, Triangle, Title } from './PlayButton.style';

export default function PlayButton({ title, href, ...rest }) {
  return (
    <Wrapper href={href} {...rest}>
      <Circle>
        <Triangle/>
      </Circle>
      <Title>{title}</Title>
    </Wrapper>
  );
}
