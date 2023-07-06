import React from 'react';
import * as S from './styles';

const Contact = () => {
  return (
    <S.Section id="contact">
      <S.Title>Contato</S.Title>
      <S.Container>
        <S.Contact id="#info">
          <h5>Telefone</h5>
          <S.P>(31) 9 9407-4194</S.P>
          <h5>Email</h5>
          <S.P>welsonpereira83@gmail.com</S.P>
          <h5>GitHub</h5>
          <a
            href="https://github.com/welsondutra"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: '12px', opacity: '0.5', paddingBottom: '1rem' }}
          >
            https://github.com/welsondutra
          </a>
          <h5>Linkedln</h5>
          <a
            href="https://www.linkedin.com/in/welson-dutra/"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: '12px', opacity: '0.5' }}
          >
            https://www.linkedin.com/in/welson-dutra/
          </a>
        </S.Contact>
        <form action="https://api.staticforms.xyz/submit" method="post">
          <S.Input
            placeholder="Nome"
            id="#name"
            type="text"
            name="nome"
            autoComplete="off"
            required
          />
          <S.Input
            placeholder="Email"
            id="#email"
            type="email"
            name="email"
            autoComplete="off"
            required
          />
          <S.Message placeholder="Digite sua mensagem" id="#message" required />
          <S.Button type="submit">Enviar</S.Button>
          <input
            type="hidden"
            name="accessKey"
            value="8f8f5148-a0b6-4a0e-af3a-d8cf0b40b7b5"
          />
        </form>
      </S.Container>
    </S.Section>
  );
};

export default Contact;
