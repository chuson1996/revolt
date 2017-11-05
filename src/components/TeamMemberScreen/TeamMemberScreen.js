import React from 'react';
import { Flex } from 'theme/grid';
import { Container, MemberContainer, RevoltMembersDiv, AdvisorsDiv, CTA, MemberGroups, Name, Nickname, Role } from './TeamMemberScreen.style';

export default function TeamMemberScreen(props) {
  return (
    <Container>
      <Flex row>
        <CTA>
          {`Let's meet our team.`}
        </CTA>
        
        <MemberGroups>
          <AdvisorsDiv>
            <MemberContainer>
              <Name>Henrik Tuomas</Name>
              <Role>Product Adivisor</Role>
            </MemberContainer>
            <MemberContainer>
              <Name>Johannes Savolainen</Name>
              <Role>{'Art & Business Advisor'}</Role>
            </MemberContainer>
          </AdvisorsDiv>
          <RevoltMembersDiv>
            <MemberContainer>
              <Name>Chu Hoang Son</Name>
              <Nickname>SoMe Warrior</Nickname>
              <Role>Web Developer/ Marketer</Role>
            </MemberContainer>
            <MemberContainer>
              <Name>Jesse Tran</Name>
              <Nickname>Shoe Dog</Nickname>
              <Role>Serial Entrepreneur</Role>
            </MemberContainer>
            <MemberContainer>
              <Name>Yu Chao</Name>
              <Nickname>Hand of the brand</Nickname>
              <Role>Visual Designer</Role>
            </MemberContainer>
          </RevoltMembersDiv>
        </MemberGroups>
      </Flex>
    </Container>
  );
}