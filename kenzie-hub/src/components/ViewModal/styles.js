import styled from "styled-components";

export const StyledModal = styled.section`
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

export const StyleSection = styled.section`
  width: 369px;
  height: 360px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  padding: 10px;
  border-radius: 4p img {
    margin: 20px 0;
  }
  h1 {
    margin: 20px 0;
  }
  @media (min-width: 600px) {
    width: 370px;
  }
`;

export const StyleForm = styled.form`
  width: 100%;
  height: 90%;
  padding: 25px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: var(--grey-3);
  border-radius: 4px;
`;

export const StyleDiv = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  background-color: aqua;
`;

export const StyleDivTop = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  h4 {
    font-weight: 700;
    font-size: 14px;
    color: #f8f9fa;
  }
  button {
    font-weight: 600;
    font-size: 16px;
    color: #868e96;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const StyleFildeset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  label {
    color: var(--grey-0);
    width: 80%;
    padding: 10px 15px;
    text-align: left;
  }
`;

export const StyleInput = styled.input`
  width: 95%;
  margin: 5px auto;
  padding: 10px;
  background-color: var(--grey-2);
  border-radius: 4px;
  color: var(--grey-1);
`;

export const StyleSelect = styled.select`
  width: 95%;
  margin: 5px auto;
  padding: 10px;
  background-color: var(--grey-2);
  border-radius: 4px;
  color: var(--grey-1);
`;

export const DivBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    width: 133.67px;
    height: 48px;
    background: #59323f;
    font-weight: 500;
    font-size: 15px;
    color: #ffffff;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background: #868e96;
  }
`;
