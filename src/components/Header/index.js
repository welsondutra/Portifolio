import React from 'react';
import sections from '../../sections.json';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Container container>
      <S.Ul>
        {sections.items.map((item) => {
          return (
            <li key={item.name}>
              <a href={`#${item.name}`}>{item.name}</a>
            </li>
          );
        })}
      </S.Ul>
    </S.Container>
  );
};
