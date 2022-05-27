import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 300px;
  height: 400px;
  border: 1px solid gray;
  border-radius: 15px;
  justify-content: center;
  background-color: #fff;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0px;
  align-self: flex-start;

  img {
    border-radius: 8px;
    border: 0.5px solid gray;
    max-height: 300px;
    width: 230px;
    margin: 0 0px;
  }

  div {
    align-items: flex-start;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid gray;
  border-radius: 15px;
  padding: 10px;
  margin-top: 10px;
  width: 260px;
`;

export const Text = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 16px;
`;
