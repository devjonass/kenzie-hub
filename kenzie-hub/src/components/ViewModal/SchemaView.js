import * as yup from "yup";

export const SchemaView = yup.object().shape({
  status: yup.string().required("Escolha um status"),
});
