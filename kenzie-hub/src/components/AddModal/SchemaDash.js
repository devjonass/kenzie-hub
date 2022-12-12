import * as yup from "yup";

export const SchemaDash = yup.object().shape({
  title: yup.string().required("Nome obrigatório"),
  status: yup.string().required("Escolha um status"),
});
