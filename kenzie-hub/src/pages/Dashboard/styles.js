import styled from "styled-components";
import Modal from "styled-react-modal";

export const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;

  .modal-overlay {
    background: white;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    width: 90%;
    max-width: 500px;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }
  .header_modal {
    display: flex;
  } */
`;

export const StyledModal = Modal.styled`
  width: 369px;
  height: 342px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  .header_modal {
    display: flex;
    align-items: center;
    gap: 180px;
    justify-content: space-between;
    padding: 10px;
    background: #343B41;
    border-radius: 4px 4px 0px 0px;
    
  }
  .header_modal > h3 {
    font-weight: 700;
  font-size: 14px;
    color: var(--grey-0)
  }
  .header_modal > button{
    width: max-content;
    background: transparent;
    border: none;
    font-weight: 600;
    font-size: 16px;
    color: var(--grey-1);
    cursor: pointer;
  }
  form{
    margin-top: 15px;
    padding-left: 19px;
    display:flex;
    align-items: flex-start;;
   flex-direction: column; 
   gap: 11px
  }
  label{
  
  font-weight: 400;
  font-size: 12.182px;
  color: var(--grey-0)
  }
  input,select{
    color: white;
    width: 329.93px;
    height: 48px;
    background: var(--grey-2);
    border: 1.2182px solid var(--grey-0);
    border-radius: 4px;
  }
  button{
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    width: 329px;
    height: 48px; 
    background: var(--color-primary);
    border: 1.2182px solid var(--color-primary);
    border-radius: 4.06066px;
    cursor: pointer;
  }
  .modal-overlay {
    background: white;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    width: 90%;
    max-width: 500px;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }

`;

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
  }
  li > h5 {
    color: #ffffff;
    font-weight: 700;
    font-size: 14.21px;
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
