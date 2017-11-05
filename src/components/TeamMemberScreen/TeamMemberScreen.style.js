import styled from 'styled-components';
import { Div } from 'theme/grid';
import { green } from 'theme/variables';
import mbMedia from 'theme/mobileFirstMedia';

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 4rem;
  padding-top: 3rem;

  ${mbMedia.btTablet`
    padding-left: 15vw;
    padding-right: 5vw;
  `}
`;

export const MemberContainer = styled(Div)`
  margin-bottom: 2rem;
`;

export const MemberGroups = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  ${mbMedia.btDesktop`
    flex-direction: column;
    font-size: 1.5rem;

    h3 {
      margin-top: 0;
    }
  `}
  
`;

export const RevoltMembersDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${mbMedia.btDesktop`
    & > div {
      width: 30%;
      margin-right: 3%;
    }
    flex-direction: row;
  `}
`;

export const Name = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const Nickname = styled.p`
  font-size: 0.8em;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  color: ${green};
`;

export const Role = styled.p`
  font-size: 0.8em;
  margin-top: 0.2rem;
  margin-bottom: 0;
`;

export const AdvisorsDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${mbMedia.btDesktop`
    order: 1;
    & > div {
      width: 30%;
      margin-right: 3%;
    }
    flex-direction: row;
  `}
`;

export const CTA = styled.div`
  width: 100px;
  flex-grow: 0;
  margin-top: 1rem;
  flex-shrink: 0;
  font-size: 3em;
  font-weight: 500;
  margin-right: 10rem;
  display: none;
  ${mbMedia.btDesktop`
    display: block;
  `}
`;
