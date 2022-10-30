import { object, string } from "yup";

export const validationSchema = object({
  creditCardNumber: string().required("Número do cartão é obrigatório."),
  ownerName: string().required("Nome do titular é obrigatório."),
  validateDate: string().required("Data de validade é obrigatória."),
  securityCode: string()
    .required("CVV é obrigatório.")
    .min(3, "CVV inválido.")
    .max(4, "CVV inválido."),
});
