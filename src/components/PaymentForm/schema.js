import * as Yup from "yup";
import valid from "card-validator";

const cardNumberSchema = Yup.string()
  .test(
    "Card number validation",
    "Cartão de crédito inválido",
    (value) => valid.number(value).isValid
  )
  .required("Campo obrigatório");

const expirationDateSchema = Yup.string()
  .test(
    "Expiration date validation",
    "Data inválida",
    (value) => valid.expirationDate(value).isValid
  )
  .required("Campo obrigatório");

const cvvSchema = Yup.string()
  .test(
    "CVV validation",
    "Código inválido",
    (value) => valid.cvv(value).isValid
  )
  .required("Campo obrigatório");

const validationSchema = Yup.object({
  cardNumber: cardNumberSchema,
  cardName: Yup.string().required("Campo obrigatório"),
  expirationDate: expirationDateSchema,
  cvv: cvvSchema,
});

export default validationSchema;
