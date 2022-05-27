import styled from "styled-components";

export const Container = styled.header`
  background-color: #fff;
  width: 100%;
`;

export const Content = styled.div`
  margin: 0px 1px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  justify-items: center;

  box-shadow: 0 1px 0 rgb(0 0 0 / 10%);

  input {
    margin: 0 30px;
    font-size: 16px;
    padding: 0.25em 0.5em;
    border: 1px solid #8b8a8b;
    border-radius: 8px;
    background-color: #fff;
    min-width: 100px;
    max-width: 500px;
    width: 50%;
  }

  a {
    text-decoration: none;
    font-size: 26px;
    font-weight: bolder;
    color: #0aea3e;
  }
`;
