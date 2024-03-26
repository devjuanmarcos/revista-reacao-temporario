"use client";

import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import { ObjectMultistepForm } from "../forms/ObjectMultistepForm";
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  independentSetValue?: string;
  independentRegisterKey?: string;
}

const steps = [
  {
    title: "Formulário de cadastro de assinatura",
    subtitle: "",
    fields: [
      {
        id: "1",
        title: "Nome completo",
        typeInput: "text",
        register: "nome_completo",
      },
      {
        id: "2",
        title: "Responsável pela assinatura",
        typeInput: "text",
        register: "responsavel_assinatura",
      },
      {
        id: "3",
        title: "CPF",
        typeInput: "text",
        register: "cpf",
      },
      {
        id: "4",
        title: "Email válido",
        typeInput: "text",
        register: "email",
      },
    ],
  },
  {
    title: "Formulário de cadastro de assinatura",
    subtitle: "",
    fields: [
      {
        id: "5",
        title: "CEP",
        typeInput: "text",
        register: "endereco_cep",
      },
      {
        id: "6",
        title: "Endereço completo",
        typeInput: "text",
        register: "endereco_rua_bairro",
      },
      {
        id: "7",
        title: "Cidade",
        typeInput: "text",
        register: "endereco_cidade",
      },
      {
        id: "8",
        title: "Estado",
        typeInput: "text",
        register: "endereco_estado",
      },
      {
        id: "9",
        title: "Número",
        typeInput: "text",
        register: "endereco_numero",
      },
      {
        id: "10",
        title: "Complemento",
        typeInput: "text",
        register: "endereco_complemento",
      },
    ],
  },
  {
    title: "Formulário de cadastro de assinatura",
    subtitle: "",
    fields: [
      {
        id: "1",
        title: "Telefone fixo",
        typeInput: "text",
        register: "telefone_fixo",
      },
      {
        id: "2",
        title: "Celular",
        typeInput: "text",
        register: "telefone_celular",
      },
      {
        id: "3",
        title: "Comentário que desejar",
        typeInput: "textArea",
        register: "comentario",
      },
      {
        id: "3",
        title: "Plano selecionado",
        typeInput: "select",
        register: "periodo_assinatura",
        options: ["Plano anual", "Plano semestral"],
      },
    ],
  },
];

const ModalCadPlano: React.FC<ModalProps> = ({ open, onClose, independentSetValue, independentRegisterKey }) => {
  const [openModal, setOpenModal] = useState(open);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setOpenModal(open);

    if (open) {
      modalRef.current?.focus();
    }
  }, [open]);

  const modalClass = `fixed bg-rev-revista-background inset-0 flex rounded-2xl items-center justify-center z-50 ${
    openModal ? "opacity-100" : "opacity-0 pointer-events-none"
  } transition-all duration-500 ease-in-out`;

  const modalSucess = () => {
    return (
      <div className="flex flex-col pt-[5.75rem] pb-[4.625rem] justify-center items-center text-center  ">
        <div className="flex justify-center items-center p-[1.25rem]  w-[5.375rem] h-[5.375rem] rounded-full bg-rev-status-confirmacao">
          <FaCheck className="text-white bg-none w-full h-full" />
        </div>
        <span className="text-rev-status-confirmacao font-sarabun font-medium text-[1.375rem] pt-[1.125rem] pb-[1.625rem] ">
          Enviado com sucesso
        </span>
        <span className="font-sarabun text-base text-rev-cinza-200 pb-[2.25rem] w-full max-w-[16.5rem]">
          Clique no link abaixo e faça o pagamento dentro do PagSeguro
        </span>
        <Button text="Pagar" variant="normal" width="w-max" />
      </div>
    );
  };

  return (
    <dialog className={modalClass} ref={modalRef}>
      <div className="absolute  w-[100vw] h-[100vh]  transition-all duration-500 backdrop-blur-sm "></div>
      <div className="absolute  w-[100vw] h-[100vh] opacity-50 bg-black"></div>
      <div className="w-full bg-rev-revista-background">
        <ObjectMultistepForm
          schema="assinatura-revista"
          steps={steps}
          modalSucess={modalSucess}
          independentSetValue={independentSetValue}
          independentRegisterKey={independentRegisterKey}
        />
      </div>
      <button onClick={onClose} className="absolute top-0 right-0 p-4  mb-4 rounded-full z-10 text-rev-cinza-200 w-max">
        Fechar
      </button>
    </dialog>
  );
};
export default ModalCadPlano;
