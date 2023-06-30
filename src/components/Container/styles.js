import styled from 'styled-components';
import * as colors from '../../theme';

export const Container = styled.div`
  min-height: 80vh;
  padding: 0 6rem;
  background-color: ${colors.default.dark2};

  @media (max-width: 600px) {
    padding: 0;
  }
`;
