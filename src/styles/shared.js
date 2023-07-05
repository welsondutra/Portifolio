import styled from 'styled-components';
import colors from '../theme';

export const Section = styled.section`
  display: flex;
  align-items: center;

  margin: 0;
  min-height: 100vh;
  background-color: ${colors.background};
`;

export const Title = styled.h1`
  padding-bottom: 1rem;
`;
