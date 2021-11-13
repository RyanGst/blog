import React from 'react';
import { globals } from '../../globals';
import { Container, HeaderLinks } from './styles';

export const Header: React.FC = () => (
  <Container>
    <HeaderLinks href="/">{globals.siteName}</HeaderLinks>
    <div className="flex-spacer" />
    <HeaderLinks target="_blank" href="https://github.com/RyanGst">GitHub</HeaderLinks>
    {/* <HeaderLinks href="/blog/the-ultimate-tech-stack">Motivação</HeaderLinks> */}
  </Container>
);
