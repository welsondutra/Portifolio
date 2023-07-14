import styled, { keyframes } from 'styled-components';
import { Shared } from '../../styles';

const typing = keyframes`
  from {
    width: 0;
  }
`;

const blinking = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const Section = styled(Shared.Section)`
  flex-direction: column;
  justify-content: center;
`;

export const InitialText = styled.div`
  align-items: flex-start;
  max-width: 70vw;
`;

export const P = styled.p`
  align-self: center;
  font-size: 20px;
  letter-spacing: 3px;
  font-family: monospace;
  max-width: 70vw;
`;

export const Text = styled.p`
  font-size: 20px;
  letter-spacing: 3px;
  font-family: monospace;

  border-right: 4px solid;
  width: 31ch;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 3s steps(25),
    ${blinking} 0.5s infinite step-end alternate;
  @media (max-width: 470px) {
    max-width: 70vw;
    animation: none;
    border-right: 0;
    white-space: normal;
  }
`;

export const H2 = styled.h2`
  font-size: 30px;
  letter-spacing: 3px;
  font-family: monospace;
  padding: 0.5rem 0;
`;
