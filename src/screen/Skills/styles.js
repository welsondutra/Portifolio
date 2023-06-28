import styled from 'styled-components';
import * as colors from '../../theme';

export const Section = styled.section`
  display: flex;
  /* align-items: center;
  justify-content: center; */

  margin: 0;
  min-height: 100vh;
  padding: 7rem;
  background-color: ${colors.default.dark3};

  /* @media (max-width: 999px) {
    flex-direction: column;
    justify-content: space-around;
  } */
`;
