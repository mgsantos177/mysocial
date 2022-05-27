import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
  padding: 50px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 2rem;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
`;

export const InfoMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
