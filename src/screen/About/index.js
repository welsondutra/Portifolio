import React from 'react';

import * as S from './styles';

const About = () => {
  const typography = { alignSelf: 'center', maxWidth: '70vw' };

  return (
    <S.Section id="about">
      <S.Container>
        <h1 style={typography}>Desenvolvedor Full-Stack</h1>
        <br />
        <h3 style={typography}>
          Olá, Meu nome é <b>Welson DutrSa</b>.
        </h3>
        <br />
        <p style={typography}>
          Sou um programador full stack, graduado em Análise e Desenvolvimento
          de Sistemas, com 2 anos e 4 meses de experiência. Tenho habilidades no
          desenvolvimento de interfaces responsivas utilizando <b>React.js</b> e
          na construção de APIs com <b>Node.js</b> e <b>Nest.js</b>, utilizando
          tanto <b>JavaScript</b> quanto <b>TypeScript</b>. Além disso, possuo
          conhecimento em banco de dados NoSQL, com ênfase em <b>MongoDB</b>. Ao
          longo da minha carreira, tive a oportunidade de trabalhar em projetos
          desafiadores, atuando como desenvolvedor full-stack e criando soluções
          tecnológicas.
        </p>
        <S.Buttons style={{}}>
          <S.Button
            href="/download/welson_dutra.pdf"
            download="welson_dutra.pdf"
          >
            Curriculo
          </S.Button>
          <S.Button href="#contact"> Contacte-me </S.Button>
        </S.Buttons>
      </S.Container>
      <S.ContainerImage>
        <S.Image src="/img/profile.jpeg" />
      </S.ContainerImage>
    </S.Section>
  );
};
export default About;
