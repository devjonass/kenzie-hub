import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import { UserContext } from "../../contexts/UserContext";
import { Container, StyledModal } from "../../pages/Dashboard/styles";
import { api } from "../services/api";
import { SchemaDash } from "./SchemaDash";

export const AddModalTech = () => {
  const { setIsOpen } = useContext(ModalContext);
  const { setLoading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(SchemaDash),
  });
  const PostTech = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("users/techs", formData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const Submit = (data) => {
    PostTech(data);
    reset();
  };

  return (
    <Container>
      <StyledModal>
        <div className="header_modal">
          <h3>Cadastrar tecnologias</h3>
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>

        <form onSubmit={handleSubmit(Submit)} noValidate>
          <label htmlFor="title">Nome</label>
          <input type="text" id="title" {...register("title")} />
          {errors.title && <span>{errors.title.message}</span>}
          <label htmlFor="status">Selecionar status</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status && <span>{errors.status.message}</span>}
          <button type="submit">Cadastrar tecnologia</button>
        </form>
      </StyledModal>
    </Container>
  );
};
