import styled from 'styled-components';
import * as colors from '../../theme';

export const Container = styled.div`
  max-width: 400px;
  padding-right: 5rem;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  min-height: 100vh;
  padding: 4rem;
  background-color: ${colors.default.dark3};

  @media (max-width: 999px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
