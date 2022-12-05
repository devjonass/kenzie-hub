import * as yup from "yup";

export const Schema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("O e-mail digitado é inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(
      /(?=.*?[#?!@$%.^&*-])/,
      "É necessário pelo menos um caractere especial"
    )
    .min(8, "É necessário uma senha de pelos 8 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas não coincidem")
    .required("Confirme sua senha"),
  bio: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  course_module: yup.string().required("Escolha um módulo"),
});
