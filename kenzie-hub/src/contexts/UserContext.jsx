import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../components/services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [techs, setTechs] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    const getUser = async () => {
      if (!token) {
        return;
      }
      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.get("profile");

        setUsers(response.data);
        setTechs(response.data.techs);
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, []);

  const LoginUser = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", formData);
      const { token, user: userResponse } = response.data;
      toast.success("Login efetuado com sucesso!");
      setUsers(userResponse);
      localStorage.clear();
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.message);
    } finally {
      setLoading();
    }
  };

  const loginSubmit = async (data) => {
    await LoginUser(data);
  };

  const submitRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("users", formData);

      toast.success("Conta criada com sucesso!");

      navigate("/login");
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const submit = async (data) => {
    await submitRegister(data);
  };

  return (
    <UserContext.Provider
      value={{ loginSubmit, submit, loading, setLoading, users, techs }}
    >
      {children}
    </UserContext.Provider>
  );
};
