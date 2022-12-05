import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Link = styled(LinkRouter)`
  width: 67.49px;
  height: 40.11px;
  background: var(--grey-3);
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--grey-0);
  font-weight: 600;
  font-size: 12px;

  &:hover {
    background-color: var(--grey-2);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .title_and_button {
    display: flex;
    align-items: center;
    gap: 180px;
    position: absolute;

    top: 10px;
  }
  .title_and_button > h2 {
    color: var(--color-primary);
  }
`;

export const FormRegister = styled.form`
  margin-top: 200px;
  width: 370px;
  height: 691.19px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  background: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  span {
    font-size: 12px;
    color: var(--negative);
  }
  label {
    color: var(--grey-0);
    font-weight: 400;
    font-size: 12.182px;
  }
  input,
  select {
    width: 100%;
    height: 48px;
    color: #868e96;
    background: #343b41;
    padding-inline: 5px;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
  }
  input:focus {
    border: 1.2182px solid #f8f9fa;
    color: #f8f9fa;
  }
  button {
    width: 330px;
    height: 48px;
    background-color: var(--color-primary-negative);
    border: 1.2182px solid var(--color-primary-negative);
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
  }
  .title_register {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    justify-content: center;
  }
  .title_register > h3 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 18px;
  }
  .title_register > p {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-1);
  }
`;
