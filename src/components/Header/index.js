import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import sections from '../../sections.json';
import * as S from './styles';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <a className="logo">Welson Dutra</a>
      <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)} color={'#fff'}>
        {isMenuOpen ? <ClearIcon /> : <MenuIcon />}
      </S.Hamburger>
      <S.Ul isOpen={isMenuOpen}>
        {sections.items.map((item) => {
          return (
            <S.Li key={item.id}>
              <S.A className="active" key={item.id} href={`#${item.name}`}>
                {item.name}
              </S.A>
            </S.Li>
          );
        })}
      </S.Ul>
    </nav>
  );
};
