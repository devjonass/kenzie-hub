import * as yup from "yup";

export const SchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatório")
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
});
