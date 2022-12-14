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
  width: 60%;
  margin: 0 auto;

  flex-direction: column;
  height: 118px;

  justify-content: space-evenly;

  h3 {
    color: var(--grey-0);
  }
  p {
    color: #ffffff;
  }
  .techsAndButton {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 29px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 70%;
  }

  .techsAndButton > button {
    width: 32.49px;
    height: 32px;
    background: #212529;
    border-radius: 4px;
    border: transparent;
    color: white;
    font-weight: 700;
    font-size: 19px;
    cursor: pointer;
  }
`;

export const ListTech = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 93%;
  height: 416px;
  background: #212529;
  border-radius: 4px;
  list-style: none;

  li {
    margin-top: 15px;
    display: flex;
    padding: 25px;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 49px;
    background: #121214;
    border-radius: 4px;
    cursor: pointer;
  }
  li:hover {
    background: #343b41;
  }
  li > h5 {
    color: #ffffff;
    font-weight: 700;
    font-size: 14.21px;
  }
  li > .btnCLick {
    color: #ffffff;
    font-weight: 700;
    font-size: 14.21px;
    width: 100%;
    background-color: transparent;
    border: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .statusAndtrash {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .statusAndtrash > p {
    font-weight: 400;
    font-size: 12.182px;
    color: var(--grey-1);
  }
  .statusAndtrash > span {
    margin-top: 5px;
  }
  .statusAndtrash > span:hover {
    color: #121214;
  }
`;
