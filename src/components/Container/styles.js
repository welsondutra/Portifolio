import styled from 'styled-components';
import colors from '../../theme';

export const Container = styled.div`
  min-height: 80vh;
  padding: 0 6rem;
  background-color: ${colors.primary};

  @media (max-width: 600px) {
    padding: 0;
  }
`;
