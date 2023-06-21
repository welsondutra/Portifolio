import styled from 'styled-components';
import * as colors from '../../../../theme';

export const Container = styled.footer`
  background-color: ${colors.default.dark1};
  color: ${colors.default.white};
  padding: 3rem;
  text-align: center;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const Li = styled.li`
  font-size: 1.5rem;
  margin: 0 1rem;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
