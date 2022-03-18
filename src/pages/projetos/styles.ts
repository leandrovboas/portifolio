import styled from 'styled-components';

interface ProjectProps {
  hasProject: boolean;
}

export const ProjetosContainer = styled.div<ProjectProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 1rem;

  span {
    display: flex;
    color: ${({ theme }) => theme.white};
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    display: ${props => (props.hasProject ? 'flex' : 'none')};
    font-size: 2rem;
    background-color: ${({ theme }) => theme.error};
    padding-left: 25%;
    border-radius: 2rem;
  }

  > main {
    display: ${props => (!props.hasProject ? 'grid' : 'none')};
    justify-items: center;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    /* display: grid; */
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding-bottom: 3rem;

    @media (max-width: 1480px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 550) {
      grid-template-columns: 1fr;
    }

    div.tilt {
      line-height: 1.6 !important;
      width: 300px !important;
      border-radius: 10px !important;
      padding: 0 !important;
      margin: 0 !important;
    }
  }
`;
