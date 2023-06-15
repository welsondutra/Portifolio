import React from 'react';
import sections from '../../../sections.json';
import * as S from './styles';

export const Menus = () => {
  return (
    <S.Ul>
      {sections.items.map((item) => {
        return (
          <li key={item.id}>
            <a href={`#${item.name}`}>{item.name}</a>
          </li>
        );
      })}
    </S.Ul>
  );
};
