import React from 'react';

import * as S from './styles';

const Home = () => {
  return (
    <S.Section id="inicio">
      <S.Container>
        <h1>Desenvolvedor Full-Stack</h1>
        <br />
        <h3>
          Olá, Meu nome é <b>Welson Dutra</b>.
        </h3>
        <br />
        <p>
          Sou um programador full stack, graduado em Análise e Desenvolvimento
          de Sistemas, com 2 anos de experiência. Tenho habilidades no
          desenvolvimento de interfaces responsivas utilizando <b>React.js</b> e
          na construção de APIs com <b>Node.js</b> e <b>Nest.js</b>, utilizando
          tanto <b>JavaScript</b> quanto <b>TypeScript</b>. Além disso, possuo
          conhecimento em banco de dados NoSQL, com ênfase em <b>MongoDB</b>.
        </p>
      </S.Container>
      <S.ContainerImage>
        <S.Image src="/assets/profile.jpeg" />
      </S.ContainerImage>
    </S.Section>
  );
};
export default Home;
