import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../services/api";
import { SchemaView } from "./SchemaView";
import {
  StyleDivTop,
  StyledModal,
  StyleFildeset,
  StyleForm,
  StyleInput,
  StyleSection,
  StyleSelect,
  DivBtns,
} from "./styles";

export const ViewModal = () => {
  const { setModalView, dataTech } = useContext(ModalContext);
  const { setLoading, getUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(SchemaView),
  });

  const TechEdit = async (formData) => {
    try {
      setLoading(true);
      const response = await api.put(`users/techs/${dataTech.id}`, formData);
      console.log(response);
      getUser();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const EditTech = (data) => {
    TechEdit(data);
  };

  const techDelete = async () => {
    try {
      setLoading(true);
      const response = await api.delete(`users/techs/${dataTech.id}`);
      getUser();
      setModalView(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submit = (id) => {
    techDelete(id);
    reset();
  };
  return (
    <StyledModal>
      <StyleSection>
        <StyleDivTop>
          <h4>Cadastrar tecnologia</h4>
          <button onClick={() => setModalView(false)}>X</button>
        </StyleDivTop>
        <StyleForm onSubmit={handleSubmit(submit)} noValidate>
          <StyleFildeset>
            <label>Nome</label>
            <StyleInput readOnly value={dataTech.title}></StyleInput>
          </StyleFildeset>
          <StyleFildeset>
            <label>Selecionar status</label>
            <StyleSelect {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </StyleSelect>
            {errors.status && <p>{errors.status.message}</p>}
          </StyleFildeset>
          <DivBtns>
            <button onClick={() => EditTech()}>Salvar alterações</button>
            <button onClick={() => techDelete()}>Excluir</button>
          </DivBtns>
        </StyleForm>
      </StyleSection>
    </StyledModal>
  );
};
