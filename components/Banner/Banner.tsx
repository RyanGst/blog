import React from "react";
import { Container, Header, Paragraph } from "./styles";

export default function Banner() {
  return (
    <Container>
      <div>
        <Header className="font-mono mb-8 text-4xl lg:text-5xl text-white font-bold max-w-sm">
          SEJA BEM VINDO!
        </Header>
        <Paragraph>
          Sou <b>Ryan Lucas</b>, desenvolvedor <code>Javascript</code><br/> e aluno do curso de Análise e
          Desenvolvimento de sistemas na FATEC-OU
        </Paragraph>
      </div>
    </Container>
  );
}
