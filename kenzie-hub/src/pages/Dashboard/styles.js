import styled from "styled-components";

export const Navbar = styled.nav`
  padding: 20px;
  background-color: var(--grey-4);
  width: 100%;
  height: 72px;
  border-bottom: 1px solid var(--grey-2);

  div {
    display: flex;
    align-items: center;
    gap: 190px;
    justify-content: space-evenly;
  }
  div > h2 {
    color: var(--color-primary);
  }
  div > button {
    width: 55.49px;
    height: 32px;
    background: var(--grey-3);
    border: 1px solid var(--grey-3);
    border-radius: 4px;
    color: var(--grey-0);
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
  }
  div > button:hover {
    background-color: var(--grey-2);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 118px;
  gap: 199px;
  justify-content: space-evenly;
  border-bottom: 1px solid var(--grey-2);

  h3 {
    font-weight: 700;
    font-size: 18px;
    color: var(--grey-0);
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: #868e96;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 118px;

  justify-content: space-evenly;

  h3 {
    color: var(--grey-0);
  }
  p {
    color: #ffffff;
  }
`;
