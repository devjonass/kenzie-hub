import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./Schema";
import { Container, FormRegister, Link } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Register = () => {
  const { submit, loading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });

  return (
    <Container>
      <div className="title_and_button">
        <h2>Kenzie Hub</h2>
        <Link to="/login">Voltar</Link>
      </div>
      <FormRegister onSubmit={handleSubmit(submit)} noValidate>
        <div className="title_register">
          <h3>Crie sua conta</h3>
          <p>Rápido e grátis, vamos nessa</p>
        </div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
          disabled={loading}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
          disabled={loading}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
          disabled={loading}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
          disabled={loading}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          name="bio"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
          disabled={loading}
        />
        {errors.bio && <span>{errors.bio.message}</span>}
        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          name="contact"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
          disabled={loading}
        />
        {errors.contact && <span>{errors.contact.message}</span>}
        <label htmlFor="course_module">Selecionar módulo</label>
        <select
          id="course_module"
          {...register("course_module")}
          disabled={loading}
        >
          <option value="Primeiro módulo">Primeiro módulo</option>
          <option value="Segundo módulo">Segundo módulo</option>
          <option value="Terceiro módulo">Terceiro módulo</option>
          <option value="Quarto módulo">Quarto módulo</option>
        </select>
        {errors.course_module && <span>{errors.course_module.message}</span>}

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando.." : "Cadastrar"}
        </button>
      </FormRegister>
    </Container>
  );
};
