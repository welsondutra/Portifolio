import styled from 'styled-components';
import { Shared } from '../../components';

export const Container = styled.div`
  max-width: 450px;
  padding: 0 5rem 4rem 1rem;

  @media (max-width: 1170px) {
    padding: 4rem 1rem 4rem 1rem;
  }
`;

export const Section = styled(Shared.Section)`
  justify-content: center;

  @media (max-width: 1170px) {
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

export const Button = styled.button``;
