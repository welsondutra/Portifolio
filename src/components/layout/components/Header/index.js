import React, { useState } from 'react';
import colors from '../../../../theme';
import * as S from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Container>
      <a
        style={{ textDecoration: 'none', fontWeight: 'bold' }}
        href="#home"
        className="logo"
      >
        Welson Dutra
      </a>

      <nav>
        <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <AiOutlineClose color={colors.white} />
          ) : (
            <GiHamburgerMenu color={colors.white} />
          )}
        </S.Hamburger>
        <S.Ul isOpen={isMenuOpen}>
          <S.Li>
            <S.A href={'#home'}>Inicio</S.A>
          </S.Li>
          <S.Li>
            <S.A href={'#about'}>Sobre</S.A>
          </S.Li>
          <S.Li>
            <S.A href={'#skills'}>Habilidades</S.A>
          </S.Li>
        </S.Ul>
      </nav>
    </S.Container>
  );
};

export default Header;
