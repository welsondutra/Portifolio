import styled from 'styled-components';
import colors from '../../../../theme';

export const Container = styled.footer`
  flex: 1;
  padding: 3rem;
  bottom: 0;
  text-align: center;

  background-color: ${colors.footer};
  color: ${colors.text};
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`;

export const Li = styled.li`
  font-size: 1.5rem;
  margin: 0 1rem;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
