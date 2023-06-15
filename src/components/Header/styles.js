import { Grid } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Grid)`
  top: 0;
  left: 0;
  right: 0;

  flex-direction: row;
  justify-content: space-between;
  background-color: darkcyan;
  position: fixed;
  opacity: 1;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;

  display: flex;
  gap: 3rem;
  align-items: center;

  position: fixed;
  background-color: teal;
  height: 3rem;
  width: 100%;
`;
