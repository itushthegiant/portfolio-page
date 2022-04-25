import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:929-365-9961">929-365-9961</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:etamar.levy@gmail.com">
            etamar.levy@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Do everything with a smile :)</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/itushthegiant">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/itamax/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/eta_levy/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
