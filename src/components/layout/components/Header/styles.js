import styled from 'styled-components';
import colors from '../../../../theme';

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 10vh;
  justify-content: space-around;
  align-items: center;

  background-color: ${colors.primary};
  box-shadow: 1px 1px 4px ${colors.footer};
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;

  flex-direction: row;
  align-items: center;

  @media (max-width: 999px) {
    position: absolute;
    top: 8vh;
    right: 0;
    width: 40vw;
    height: 92vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    /* background-color: ${colors.primary};
    transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
    transition: transform 0.3s ease-in; */
  }
`;

export const A = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

export const Li = styled.li`
  letter-spacing: 3px;
  margin: 32px;
  width: 100px;

  @media (max-width: 999px) {
    margin-left: 0px;
    opacity: 1;
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;
  @media (min-width: 999px) {
    display: none;
  }
`;
