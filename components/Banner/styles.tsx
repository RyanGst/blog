import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.0), rgb(255, 94, 20, 0.5)),
    url('/img/bg.jpg');
  background-size: cover;
  padding: 8em;

  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
    padding: 2em;
  }
`;

export const Header = styled.h2`
  color: white;
  font-size: 3rem;
  font-family: 'Blatant';
  letter-spacing: 0.2ch;
`

export const Paragraph = styled.p`
  color: white;
  font-size: 1.4rem;
`