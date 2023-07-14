import styled from 'styled-components';
import { Shared } from '../../styles';
import colors from '../../theme';

export const Title = styled(Shared.Title)`
  padding-bottom: 4rem;
`;

export const Section = styled(Shared.Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 300px;
  padding: 0 5rem;
`;

export const P = styled.p`
  font-size: 12px;
  opacity: 0.5;
  padding-bottom: 1rem;
`;

export const Form = styled.form`
  width: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 750px;
  @media (max-width: 1100px) {
    padding: 2rem 0 0 0;
    display: flex;
  }
`;

const inputProps = {
  width: '100%',
  border: 'none',
  outline: 'none',
  color: (props) => (!props.disabled ? colors.text : colors.primary),

  'padding-left': '10px',
  'border-radius': '12px',
  'margin-bottom': '0.5rem',
  ' font-family': 'monospace',
  'background-color': colors.secondary,
};

export const Input = styled.input`
  ${inputProps}
  height: 2rem;
`;

export const Message = styled.textarea`
  ${inputProps}
  padding-top: 10px;
  height: 10rem;
  resize: none;
`;

export const Button = styled.button`
  width: 100px;
  height: 2rem;
  border-radius: 12px;

  font-family: monospace;
  background-color: ${colors.secondary};
  color: ${colors.text};
  border: none;
  cursor: pointer;
  color: ${(props) => (!props.disabled ? colors.text : colors.primary)};
`;
