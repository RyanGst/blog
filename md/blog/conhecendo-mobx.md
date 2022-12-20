---
title: "Prazer, MobX: uma solução de gerenciamento de estado para aplicações React"
subtitle: "Como o MobX ajuda a manter o estado da sua aplicação atualizado e consistente"
published: true
datePublished: 1671484842000
author: Ryan Lucas
tags:
  - React
  - MobX
  - Javascript
authorPhoto: /img/profile.png
bannerPhoto: /img/aprendendo-mobx/cover.png
thumbnailPhoto: /img/aprendendo-mobx/cover.png
canonicalUrl: https://ryangst.me/blog/conhecendo-mobx
---

<br/>
<mark>
<i>TLDR: Mobx é uma solução de gerenciamento de estado: Nesse artigo escrevo um pouco sobre a teoria por trás do funcionamento

</i>
</mark>
<br/>
<br/>



[Link da documentação](https://github.com/mobxjs/mobx)

Não existe maneira melhor de criar aplicações bugadas e difíceis de manter do que não gerenciar corretamente o estado da sua aplicação.

Mobx busca fazer isso de maneira simples ao arrancar a raiz do problema: fazendo com que seja muito difícil criar estados inconsistentes. 

<hr/>


Para entender melhor como o MobX funciona, vamos começar pelo básico: o estado da aplicação. O estado da aplicação é basicamente todos os dados que são usados pela aplicação e que podem ser alterados ao longo do tempo. No React, esses dados geralmente são mantidos no componente de estado, mas com o MobX, podemos mantê-los em qualquer lugar.


As derivações são valores que podem ser calculados a partir do estado da aplicação. Por exemplo, se o estado da aplicação inclui um array de números e você quer saber a soma desses números, essa soma seria uma derivada. O MobX permite que você defina essas derivações de maneira fácil e as mantém atualizadas automaticamente sempre que o estado da aplicação for alterado.

As reações são basicamente como as derivações, mas em vez de produzir um valor, elas fazem alguma coisa quando o estado da aplicação muda. Por exemplo, você pode definir uma reação que atualize o DOM sempre que o estado da aplicação mudar. O MobX garante que as reações sejam executadas de maneira síncrona e sem problemas sempre que o estado da aplicação mudar.

Por último, temos as ações. As ações são todas as coisas que alteram o estado da aplicação. No MobX, todas as ações são processadas por derivações e reações, o que significa que todas as alterações no estado da aplicação são feitas de maneira síncrona e sem problemas. Isso é útil porque garante que não haja problemas como estados inconsistentes ou alterações no estado que não são refletidas corretamente na interface do usuário.

![Árvore de eventos MobX](https://mobx.js.org/assets/flow2.png)

Em resumo, o MobX é uma ferramenta útil para gerenciar o estado da sua aplicação de maneira fácil e consistente. Ao permitir que você defina derivações e reações para manter o estado da aplicação atualizado, ele torna mais fácil criar aplicações robustas e sem problemas. Se você está procurando uma maneira de gerenciar o estado da sua aplicação com o React, definitivamente deve dar uma olhada no MobX.