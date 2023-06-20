import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.Footer>
      <S.Ul>
        <S.Li>
          <a
            target="_blank"
            href="https://github.com/welsondutra"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </S.Li>
        <S.Li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/welson-dutra/"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </S.Li>
        <S.Li>
          <a
            target="_blank"
            href="https://www.instagram.com/welsondutra/"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </S.Li>
      </S.Ul>
    </S.Footer>
  );
};
