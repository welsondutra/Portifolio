import React from 'react';
import * as S from './styles';

const Home = () => {
  return (
    <S.Section id={'home'}>
      <S.InitialText>
        <S.P>Olá, Mundo!</S.P>
        <S.H2>Sou Welson Dutra...</S.H2>
        <S.Text>Desenvolvedor Full-Stack!</S.Text>
      </S.InitialText>
    </S.Section>
  );
};

export default Home;
