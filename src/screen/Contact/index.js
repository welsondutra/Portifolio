import React, { useState } from 'react';
import * as S from './styles';

const Contact = () => {
  const [sending, setSending] = useState(null);

  return (
    <S.Section id="contact">
      <S.Title>Contato</S.Title>
      <S.Container>
        <S.Contact id="#info">
          <h5>Telefone</h5>
          <S.P>(31) 9 9407-4194</S.P>
          <h5>Email</h5>
          <S.P>welsonpereira83@gmail.com</S.P>
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
        <S.Form>
          <S.Input disabled={sending} id="#name" type="text" />
          <S.Input disabled={sending} id="#email" type="email" />
          <S.Message disabled={sending} id="#message" />
          <S.Button
            disabled={sending}
            onClick={() => {
              setSending(true);
            }}
          >
            Enviar
          </S.Button>
        </S.Form>
      </S.Container>
    </S.Section>
  );
};

export default Contact;
