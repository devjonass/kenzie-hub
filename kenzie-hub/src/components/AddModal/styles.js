import styled from "styled-components";

export const ColorBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  span {
    font-size: 10px;
    color: var(--negative);
  }
`;
export const Container = styled.div``;

export const StyledModal = styled.div`
  width: 369px;
  height: 360px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  .header_modal {
    display: flex;
    align-items: center;
    gap: 180px;
    justify-content: space-between;
    padding: 10px;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
  }
  .header_modal > h3 {
    font-weight: 700;
    font-size: 14px;
    color: var(--grey-0);
  }
  .header_modal > button {
    width: max-content;
    background: transparent;
    border: none;
    font-weight: 600;
    font-size: 16px;
    color: var(--grey-1);
    cursor: pointer;
  }
  form {
    margin-top: 15px;
    padding-left: 19px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 11px;
  }
  label {
    font-weight: 400;
    font-size: 12.182px;
    color: var(--grey-0);
  }
  input,
  select {
    color: white;
    width: 329.93px;
    height: 48px;
    background: var(--grey-2);
    border: 1.2182px solid var(--grey-0);
    border-radius: 4px;
  }
  button {
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
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
