import styled from 'styled-components';
import colors from '../../theme';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.dark2};
  height: 10vh;
  box-shadow: 1px 1px 4px ${colors.dark1};
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
    background-color: ${colors.dark2};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: translateX(${(props) => (props.isOpen === true ? '0' : '100%')});
    transition: transform 0.3s ease-in;
  }
`;

export const A = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

export const Li = styled.li`
  letter-spacing: 3px;
  margin-left: 32px;

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
