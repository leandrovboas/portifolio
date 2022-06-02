import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 10rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      border-color: ${({ theme }) => theme.primary};
      > div.overlay {
        opacity: 0.5;
      }
    }
    > section {
      z-index: 2;
      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 1.5rem;
      }
      h2 {
        color: ${({ theme }) => theme.secondary};
        font-weight: 300;
        font-size: 1rem;
      }
    }
    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.7;
      transition: 0.5s;
    }

    ::after {
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      background: linear-gradient(
        45deg,
        ${({ theme }) => theme.primary} 40%,
        ${({ theme }) => theme.secondary} 70%
      );
      content: '';
      z-index: -1;
      border-radius: 2rem;
    }

    &:hover {
      box-shadow: 0 10px 30px black,
        inset 0 0 9px ${({ theme }) => theme.secondary},
        inset 0 0 9px ${({ theme }) => theme.primary};
    }
  }
`;
