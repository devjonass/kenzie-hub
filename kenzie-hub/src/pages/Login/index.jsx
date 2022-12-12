import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaLogin } from "./SchemaLogin";
import { Link } from "./styles";
import { Container, FormLogin } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Login = () => {
  const { loginSubmit } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(SchemaLogin),
  });

  return (
    <Container>
      <h2>Kenzie Hub</h2>

      <FormLogin onSubmit={handleSubmit(loginSubmit)} noValidate>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <button type="submit"> Entrar</button>
        <div className="registerAndLink">
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </FormLogin>
    </Container>
  );
};
