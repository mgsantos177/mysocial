import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  padding: 50px;

  strong {
    font-size: 30px;
    padding: 50px 0 30px;
  }
`;

export const UserContent = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 200px;
  padding: 10px 20px;
  img {
    border-radius: 8px;
    border: 0.5px solid gray;
    max-height: 300px;
    width: 150px;
    margin: 0 0px;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;

  text {
    font-size: 20px;
    font-weight: 500;
    padding: 2px 0 2px;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 20px 0px 0px;
    align-items: flex-start;
  }
`;

export const FriendContent = styled.div`
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
