import { z } from "zod";
import {
  cnpj,
  cpf,
  file,
  nomeCompleto,
  simpleArrayZod,
  simpleArrayZodMandatory,
  simpleZod,
  simpleZodMandatory,
  telefone,
} from "./objectsUserSchema";

export const SolicitacaoAtendimento = z.object({
  nome_completo: nomeCompleto,
  telefone: telefone,
  email: simpleZodMandatory,
  responsavel_assinatura: simpleZod,
});

export const AssinaturaRevista = z.object({
  nome_completo: nomeCompleto,
  responsavel_assinatura: nomeCompleto,
  cpf: cpf,
  email: simpleZodMandatory,
  endereco_cep: simpleZodMandatory,
  endereco_rua_bairro: simpleZodMandatory,
  endereco_complemento: simpleZodMandatory,
  endereco_numero: simpleZodMandatory,
  endereco_cidade: simpleZodMandatory,
  endereco_estado: simpleZodMandatory,
  periodo_assinatura: simpleZodMandatory,
  telefone_fixo: simpleZod,
  telefone_celular: telefone,
  comentario: simpleZod,
});

export const PainelNovosPosts = z.object({
  titulo_noticia: simpleZodMandatory,
  paragrafo_noticia: simpleZodMandatory,
  imagem_destaque: simpleZodMandatory,
  alt_imagem_destaque: simpleZodMandatory,
  imagens_extra: simpleArrayZod,
  url: simpleArrayZod,
  categoria_noticia: simpleZodMandatory,
  resumo: simpleZodMandatory,
  data_publicacao: simpleZodMandatory,
});
