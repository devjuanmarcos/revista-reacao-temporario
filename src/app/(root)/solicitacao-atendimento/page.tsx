import React from "react";
import { InputPropsRelacion } from "@/components/forms/DynamicForm";
import { ObjectDynamicForms } from "@/components/forms/ObjectDynamicForm";

const SolicitacaoAtendimentoData: InputPropsRelacion[] = [
  {
    id: "1",
    title: "Digite seu nome completo",
    typeInput: "text",
    register: "nome_completo",
  },
  {
    id: "2",
    title: "Digite seu telefone",
    typeInput: "text",
    register: "telefone",
  },
  {
    id: "3",
    title: "Digite seu email",
    typeInput: "email",
    register: "email",
  },
  {
    id: "4",
    title: "Campo extra para comentário",
    typeInput: "textArea",
    register: "comentario",
  },
];

export default async function SolicitacaoAtendimento() {
  return (
    <ObjectDynamicForms
      schema="solicitacao-atendimento"
      pageTitle="Solicitação de contato"
      profInfo={SolicitacaoAtendimentoData}
      line={false}
    />
  );
}
