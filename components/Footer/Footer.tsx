import React from 'react';
import { globals } from '../../globals';
import { Container, FooterLinks, FooterName } from './styles';

export const Footer: React.FC = () => (
  <Container >
    <FooterName>{`© ${globals.yourName} ${new Date().getFullYear()}`}</FooterName>
    <div className="flex-spacer" />
    <FooterLinks href="https://github.com/RyanGst">
      <img src="/img/gh.svg" alt="GitHub" height="40" width="40" />
    </FooterLinks>
    <FooterLinks href="https://twitter.com/ryangst_">
      <img src="/img/twitter.svg" alt="GitHub" height="40" width="40" />
    </FooterLinks>
    <FooterLinks href="/rss.xml">
      <img src="/img/rss-white.svg" alt="RSS Feed" height="30" width="30" />
    </FooterLinks>
  </Container>
);
