import styled from 'styled-components';
import colors from '../../theme';
import { Shared } from '../../styles';

export const Title = styled(Shared.Title)``;

export const Section = styled(Shared.Section)`
  flex-direction: column;
  overflow: hidden;
  padding: 8rem 0;
`;

export const ImgLine = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 80vw;
`;

export const BoxImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;

  padding: 2rem 1rem;
  max-width: 20rem;
  cursor: pointer;

  :hover {
    background-color: ${colors.hover};
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const P = styled.p`
  text-align: center;
  font-size: 14px;
`;

export const H4 = styled.h4`
  padding: 0.5rem;
`;
