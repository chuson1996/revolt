import styled from 'styled-components';

export const Wrapper = styled.a`
  width: 200px;
  border-radius: 40px;
  border: 2px solid white;
  padding: 10px 20px 10px 10px;

  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Triangle = styled.div`
  clip-path: polygon(100% 50%, 0 0, 0 100%);
  background-color: white;
  width: 30px;
  height: 30px;
  transform: translate(3px, 0);
`;

export const Circle = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  margin-right: 10px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1.1em;
  color: white;
`;
