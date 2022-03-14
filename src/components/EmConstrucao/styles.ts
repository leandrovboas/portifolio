import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  position: relative;
  width: 500px;
`;

const animateLight = keyframes`
    0%,
    49.99% {
      background: #00c1c5;
      box-shadow: 0 0 5px #00c1c5,
        0 0 10px #00c1c5,
        0 0 40px #00c1c5;
    }
    50%,
    100% {
      background: #111;
      box-shadow: none;
    }
`;

export const Loading = styled.div`
  position: relative;
  display: flex;
  background: linear-gradient(#616161 0%, #333 10%, #222);
  border: 2px solid ${({ theme }) => theme.border};
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);

  > ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 10;
    pointer-events: none;
  }

  > ::after {
    content: '';
    position: absolute;
    top: 27px;
    right: 20px;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.primary},
      0 0 10px ${({ theme }) => theme.primary},
      0 0 40px ${({ theme }) => theme.primary};

    animation: ${animateLight} 1s linear infinite;
  }

  > span {
    position: relative;
    width: 80px;
    color: #fff;
    text-align: right;
    letter-spacing: 1px;
  }
`;

export const Percent = styled.div`
  position: relative;
  top: 2px;
  width: calc(100% - 120%);
  height: 20px;
  background: #151515;
  border-radius: 20px;
  margin: 0 10px;
  box-shadow: inset 0 0 10px #000;
  overflow: hidden;
`;

const animate = keyframes`
    0% {
      width: 0;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 100%;
      left: 100%;
    }
  }
`;

export const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  border-radius: 20px;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  animation: ${animate} 6s ease-in-out infinite;
`;
