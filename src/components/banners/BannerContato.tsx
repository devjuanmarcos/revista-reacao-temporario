"use client";

import { FaCheck } from "react-icons/fa";
import { ObjectMultistepForm } from "../forms/ObjectMultistepForm";
import { InputProps } from "../forms/inputTypes/FileInput";

const data = [
  {
    id: "1",
    title: "Nome completo",
    typeInput: "text",
    register: "nome_completo",
  },
  {
    id: "2",
    title: "Telefone",
    typeInput: "text",
    register: "telefone",
  },
  {
    id: "3",
    title: "Email",
    typeInput: "text",
    register: "email",
  },
  {
    id: "4",
    title: "Responsável pela assinatura",
    typeInput: "text",
    register: "responsavel_assinatura",
  },
];

const modalSucess = () => {
  return (
    <div className="flex flex-col pt-[5.75rem] pb-[4.625rem] justify-center items-center text-center  ">
      <div className="flex justify-center items-center p-[1.25rem]  w-[5.375rem] h-[5.375rem] rounded-full bg-rev-status-confirmacao">
        <FaCheck className="text-white bg-none w-full h-full" />
      </div>
      <span className="text-rev-status-confirmacao font-sarabun font-medium text-[1.375rem] pt-[1.125rem] pb-[1.625rem] ">
        Solicitação enviada com sucesso
      </span>
      <span className="font-sarabun text-base text-rev-cinza-200 pb-[2.25rem] w-full max-w-[16.5rem]">
        Agora é só aguardar que entraremos em contato o mais breve possível.
      </span>
    </div>
  );
};

export const BannerContato = () => {
  return (
    <div className="flex max-xl:flex-col px-[6.25rem] max-lg:px-4 gap-[4.125rem] bg-rev-brand-100   py-8 w-full min-w-[100vw] max-sm:min-w-full mx-[-6.25rem] max-lg:mx-0 max-lg:min-w-full items-end">
      <div className="flex flex-col gap-7 max-lg:pl-0">
        <div className="flex flex-col ">
          <span className="font-sarabun font-normal text-[1.375rem] text-rev-brand-400 dark:text-rev-cinza-200">
            Contato
          </span>
          <span className="font-sarabun font-bold text-[2.375rem] text-rev-cinza-200  ">Entre em contato conosco</span>
        </div>
        <div className="flex flex-col gap-6 text-rev-cinza-200 ">
          <p>{`Se você tiver alguma dúvida, sugestão, ou desejar obter mais informações sobre nossos produtos e serviços, estamos à disposição para ajudar. Utilize o formulário abaixo para nos enviar uma mensagem diretamente. Nossa equipe terá prazer em responder o mais rápido possível.`}</p>
          <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col gap-5 gap-y-8 w-full mt-[9.375rem]">
            <div className="flex flex-col gap-2 w-full ">
              <span className="font-sarabun font-medium text-[1.375rem] text-rev-cinza-200  w-full">Endereço</span>
              <span className="font-lato text-base text-rev-cinza-200  w-full">
                Rua Federação Paulista de Futebol, 799 – cj 512 Várzea da Barra Funda, São Paulo – SP, CEP 01141-040
              </span>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="font-sarabun font-medium text-[1.375rem] text-rev-cinza-200  w-full">Contato</span>
              <span className="font-lato text-base text-rev-cinza-200  w-full">
                PABX: (11) 3873-1525 FAX: (11) 3801-2195 contato@revistareacao.com.br Atendimento: 0800-772-6612
                Whatsapp: (11) -4188
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[1.625rem] m-auto min-w-[34.25rem] max-sm:min-w-full w-full max-w-[40rem] max-lg:max-w-auto justify-center items-center">
        <ObjectMultistepForm items={data} schema="solicitacao-contato" modalSucess={modalSucess} />
      </div>
    </div>
  );
};
