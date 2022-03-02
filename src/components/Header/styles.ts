import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  box-shadow: 0 2px 3px 0 ${({ theme }) => theme.backgroundDark};
  padding-top: 0.5rem;
  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }

    &::after {
      content: '';
      display: block;
      height: 0.2rem;
      width: 0%;
      background-color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
      transition: all ease-in-out 250ms;
    }

    &:hover ::after {
      width: 100%;
    }
  }
`;
export const Animation = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 0;
  width: 100%;
  background: #1abc9c;
  border-radius: 8px;
`;
