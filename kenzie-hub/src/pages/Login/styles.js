import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Link = styled(LinkRouter)`
  width: 100%;
  height: 48px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #868e96;
  font-weight: 500;
  font-size: 16px;
  border: 1.2182px solid #868e96;
  border-radius: 4px;
  color: var(--grey-0);

  &:hover {
    background-color: var(--grey-2);
    border: transparent;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    position: absolute;
    top: 30px;
    color: var(--color-primary);
  }
`;

export const FormLogin = styled.form`
  span {
    font-size: 12px;
    color: var(--negative);
  }
  h3 {
    margin-top: 28px;
    text-align: center;
    color: var(--grey-0);
  }
  width: 100%;
  max-width: 369px;
  height: 502px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  background-color: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  label {
    color: var(--grey-0);
  }
  input {
    padding-inline: 5px;
    width: 100%;
    height: 48px;
    background: var(--grey-2);
    border: 1.2182px solid var(--grey-2);
    border-radius: 4px;
  }
  input:focus {
    border: 1.2182px solid #f8f9fa;
    color: #f8f9fa;
  }

  button {
    width: 100%;
    height: 48px;
    background-color: var(--color-primary);
    color: #ffffff;
    border: 1.2182px solid var(--color-primary);
    border-radius: 4.06066px;
    cursor: pointer;
  }
  button:hover {
    background: #ff427f;
  }

  .registerAndLink {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
  .registerAndLink > p {
    color: var(--grey-1);
    font-weight: 600;
    font-size: 12px;
  }
`;
