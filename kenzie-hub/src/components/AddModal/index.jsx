import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import { UserContext } from "../../contexts/UserContext";
import { ColorBackground, Container, StyledModal } from "./styles";
import { api } from "../services/api";
import { SchemaDash } from "./SchemaDash";

export const AddModalTech = () => {
  const { setModalIsOpen } = useContext(ModalContext);
  const { setLoading, setTechs } = useContext(UserContext);
  const [updateTech, setUpadateTech] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(SchemaDash),
  });
  useEffect(() => {
    const getTechs = async () => {
      try {
        const response = await api.get("profile");

        setTechs(response.data.techs);
      
      } catch (error) {
        console.error(error);
      }
    };
    getTechs();
  }, [updateTech]);
  const PostTech = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("users/techs", formData);
      setUpadateTech((params) => !params);
      reset();
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
    <ColorBackground>
      <Container>
        <StyledModal>
          <div className="header_modal">
            <h3>Cadastrar tecnologias</h3>
            <button onClick={() => setModalIsOpen(false)}>X</button>
          </div>

          <form onSubmit={handleSubmit(Submit)} noValidate>
            <label htmlFor="title">Nome</label>
            <input type="text" id="title" {...register("title")} />
            {errors.title && <span>{errors.title.message}</span>}
            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="">Escolha um nível</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status && <span>{errors.status.message}</span>}
            <button type="submit">Cadastrar tecnologia</button>
          </form>
        </StyledModal>
      </Container>
    </ColorBackground>
  );
};
