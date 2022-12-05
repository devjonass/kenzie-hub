import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaLogin } from "./SchemaLogin";
import { api } from "../../components/services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "./styles";

import { Container, FormLogin } from "./styles";

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(SchemaLogin),
  });

  const LoginUser = async (formData) => {
    try {
      const response = await api.post("sessions", formData);

      setLoading(true);
      toast.success("Login efetuado com sucesso!");
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.message);
    } finally {
      setLoading(false);
    }
  };

  const loginSubmit = async (data) => {
    await LoginUser(data);
  };
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
          disabled={loading}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
          disabled={loading}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <button type="submit" disabled={loading}>
          {" "}
          {loading ? "Entrando.." : "Entrar"}
        </button>
        <div className="registerAndLink">
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </FormLogin>
    </Container>
  );
};
