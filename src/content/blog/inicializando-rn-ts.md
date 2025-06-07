---
author: Ryan Machado
pubDatetime: 2022-06-28T14:40:15.000Z
modDatetime: 2025-06-06T14:40:15.000Z
title: 🇧🇷Inicializando um projeto React Native com Typescript
slug: inicializando-rn-ts
featured: true
draft: false
tags:
  - RN
  - React
  - typescript
description: Aprenda a inicializar um projeto React Native com Typescript.
---

Typescript foi eleita a 5º linguagem mais amada por desenvolvedores profissionais de acordo com a pesquisa do [Stack Overflow](https://survey.stackoverflow.co/2022/#most-popular-technologies-language-prof), além de ter mais de [31 milhões de downloads semanais](https://www.npmjs.com/package/typescript) no NPM.

Basicamente, [Typescript](https://www.typescriptlang.org/) é um `superset` Javascript com suporte a tipagem estática criada pela Microsoft, que nos permite ter uma relação ainda mais “íntima” com nosso editor **( ͡° ͜ʖ ͡°).** O código escrito é compilado para Javascript e roda em [qualquer plataforma](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines) com suporte à JS.

## Comando para inicialização:

```bash
npx react-native init AwesomeTSProject --template react-native-template-typescript
```

<figure>
<img style="scale: 0.85; max-width: 100%;"  src="/img/inicializando-rn-ts/bootstrap.png"/>
<figcaption>Depois de rodar o comando, aguarde o bootstrap do projeto.</figcaption>
</figure>

<hr/>

## Como RN + Typescript se parece?

Uma das vantagens é escrever tipagem estática para `estados` e `props` , o que vai disponibilizar

checagem de tipos e autocomplete quando estivermos usando esse componente:

```tsx
//App.tsx

// Interfaces descrevem a estrutura de objetos
interface SectionProps {
  children: React.ReactNode;
  title: string;
}

/* O componente Section é tipado explícitamente como React.FC, que recebe
uma tipagem genérica que descreve suas props.
*/
const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
};
```

Agora que escrevemos nosso componente, podemos usá-lo em diferentes partes da nossa aplicação, como no próximo exemplo:

![Error](/img/inicializando-rn-ts/error-ts.png)

Quando não fornecemos um valor para a propriedade `title` recebemos um erro de sintaxe:

```tsx
Property 'title' is missing in type '{ children: string; }' but required in type 'SectionProps'.ts(2741)
```

Ou seja, o valor para título, que deve ser uma string está ausente, essa tipagem foi definida quando escrevemos a interface `SectionProps`.

Um erro parecido pode ser observado quando tentamos fornecer um valor de outro tipo para essa propriedade:

<small>
<img width="550" src="/img/inicializando-rn-ts/error-ts-2.png"/>
</small>

```tsx
const App = () => {
  return (
    <SafeAreaView>
      <Section title="React Native com Typescript">
        React Native é um framework para contrução de apps multiplataforma
      </Section>
      {/* Type 'number' is not assignable to type 'string' */}
      <Section title={5}>
        React Native é um framework para contrução de apps multiplataforma
      </Section>
    </SafeAreaView>
  );
};
```

## Conclusão:

Escrevi esse artigo buscando mostrar como criar um projeto React Native usando Typescript, você pode ir mais fundo consultando os materiais listados aqui:

- [React + Typescript - Documentação Oficial](https://www.typescriptlang.org/pt/docs/handbook/react.html)
- [Usando React Native e Typescript](https://reactnative.dev/docs/typescript)
- [Typescript do zero](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

Obrigado por ler até aqui! Sinta-se livre para me mandar uma mensagem no [Linkedinho](https://www.linkedin.com/in/ryan-lucas-machado/)!
