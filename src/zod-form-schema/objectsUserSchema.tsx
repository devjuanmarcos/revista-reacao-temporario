import { z } from "zod";
import { validarCnpj, validarCpf, validarTelefone } from "../utils/validations";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const file = z.any();

export const simpleZod = z.string().optional();
export const simpleZodMandatory = z.string().min(1, "Este espaço é obrigatório").optional();

export const simpleArrayZod = z.array(z.string()).optional();
export const simpleArrayZodMandatory = z.array(z.string()).min(1, "Este espaço é obrigatório").optional();

export const nomeCompleto = z
  .string()
  .min(1, "Nome obrigatório")
  .transform((name) => {
    return name
      .trim()
      .split(" ")
      .map((word) => {
        return word[0].toLocaleUpperCase().concat(word.substring(1));
      })
      .join(" ");
  })
  .optional();

export const cpf = z
  .string({ required_error: "O CPF deve conter 11 caracteres" })
  .min(14, "O CPF deve conter 11 caracteres")
  .max(14, "O CPF deve conter 11 caracteres")
  .refine((defaultValue) => {
    const cpf = defaultValue.replace(/\D/g, "");
    return validarCpf(cpf);
  }, "O CPF precisa ser válido")
  .transform((data) => data.replace(/\D/g, ""))
  .optional();

export const telefone = z
  .string({ required_error: "Digite o telefone" })
  .min(1, "Digite o telefone")
  .max(15, "O telefone deve conter no máximo 15 caracteres")
  .refine((value) => validarTelefone(value), {
    message: "Telefone inválido",
  })
  .transform((data) => data.replace(/\D/g, ""))
  .optional();

export const cep = z
  .string({ required_error: "Digite o CEP" })
  .min(9, "O CEP deve ter 8 caracteres")
  .max(9, "Digite o CEP")
  .transform((data) => data.replace(/\D/g, ""))
  .optional();

export const estado = z.string({ required_error: "Digite o estado" }).min(1, "Digite o estado").optional();

export const cidade = z.string({ required_error: "Digite a cidade" }).min(1, "Digite a cidade").optional();
export const bairro = z.string({ required_error: "Digite o bairro" }).min(1, "Digite o bairro").optional();
export const logradouro = z.string({ required_error: "Digite o logradouro" }).min(1, "Digite o logradouro").optional();
export const numeroResidencia = z.string().optional();

export const cnpj = z
  .string({ required_error: "O CNPJ deve conter 14 caracteres" })
  .min(14, "O CNPJ deve conter 14 caracteres")
  .max(14, "O CNPJ deve conter 14 caracteres")
  .refine((defaultValue) => {
    const cnpj = defaultValue.replace(/\D/g, "");
    return validarCnpj(cnpj);
  }, "O CNPJ precisa ser válido")
  .transform((data) => data.replace(/\D/g, ""))
  .optional();
