import React from 'react';

import { Grid } from '@mui/material';

import sections from '../../sections.json';
import * as S from './styles';

export const Layout = () => {
  return (
    <Grid>
      {sections.items.map((item) => {
        return (
          <S.Section id={item.name} key={item.id}>
            {item.name}
          </S.Section>
        );
      })}
    </Grid>
  );
};
