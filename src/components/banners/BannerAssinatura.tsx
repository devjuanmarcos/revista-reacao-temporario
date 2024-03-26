"use client";

import { useState } from "react";
import ModalCadPlano from "../modal/ModalCadPlano";
import { Button } from "../ui/button";

export const BannerAssinatura = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [plan, setPlan] = useState("");
  const [isCheckedAnual, setIsCheckedAnual] = useState(false);
  const [isCheckedSemestral, setIsCheckedSemestral] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleAnualCheckboxClick = () => {
    setIsCheckedAnual(true);
    setPlan("Plano anual");
    setTimeout(() => {
      setIsCheckedAnual(false);
    }, 3000);
    setModalOpen(true);
  };

  const handleSemestralCheckboxClick = () => {
    setIsCheckedSemestral(true);
    setPlan("Plano semestral");
    setTimeout(() => {
      setIsCheckedSemestral(false);
    }, 3000);
    setModalOpen(true);
  };

  return (
    <div className="flex max-xl:flex-col px-[6.25rem] max-lg:px-4 gap-[7.625rem] bg-rev-brand-100   py-8 w-full min-w-[100vw] max-sm:min-w-full mx-[-6.25rem] max-lg:mx-0 max-lg:min-w-full ">
      <div className="flex flex-col gap-7  max-lg:pl-0">
        <div className="flex flex-col gap-4">
          <span className="font-sarabun font-normal text-[1.375rem] text-rev-brand-400 dark:text-rev-cinza-200">
            Planos de assinatura
          </span>
          <span className="font-sarabun font-bold text-[2.375rem] text-rev-cinza-200  ">
            Receba a Revista Reação em casa: assinatura fácil e sem complicações!
          </span>
        </div>
        <div className="flex flex-col gap-6 text-rev-cinza-200 ">
          <p>{`PASSO 1: Comece escolhendo o plano que melhor se encaixa em suas necessidades;`}</p>
          <p>{`PASSO 2: Complete seus dados pessoais no formulário abaixo e depois clique enviar;`}</p>
          <p>{`PASSO 3: Após o envio aguarde a mensagem de confirmação "ENVIADO COM SUCESSO".`}</p>
          <p>
            {`PASSO 4: Você será direcionado para o site do PagSeguro, onde poderá escolher a forma de pagamento mais
        conveniente para você.`}
          </p>
          <p>{`PASSO 5: Siga as instruções do PagSeguro para concluir o pagamento da sua assinatura.`}</p>
          <p>{`PASSO 6: Após a confirmação do pagamento, você receberá a revista Reação no conforto do seu lar.`}</p>
        </div>
      </div>

      <div className="flex flex-col gap-[1.625rem] m-auto min-w-[34.25rem] max-sm:min-w-full max-w-[40rem] max-lg:max-w-auto">
        <div className="bg-rev-branco-100 rounded-lg flex justify-between p-5 max-2sm:flex-col max-2sm:gap-4">
          <div className="flex gap-4 items-start">
            <input
              className="mt-[.700rem] cursor-pointer rounded-full peer relative appearance-none shrink-0 border-2 bg-white focus:outline-none focus:ring-offset-0  focus:border-2 checked:bg-rev-brand-200 checked:border-0 disabled:border-rev-brand-200 disabled:bg-steel-400 border-rev-brand-200 w-4 h-4 p-1"
              type="checkbox"
              checked={isCheckedAnual}
              onClick={handleAnualCheckboxClick}
            />
            <div className="flex flex-col gap-[1.125rem]">
              <span className="font-sarabun font-medium text-[1.375rem] text-rev-cinza-200">Assinatura Anual</span>
              <span className="text-rev-cinza-200">12 meses de assinatura</span>
              <span className="text-rev-cinza-200">6 edições</span>
            </div>
          </div>
          <span className="font-sarabun font-medium text-[1.375rem] text-rev-cinza-200">R$ 120/anual</span>
        </div>

        <div className="bg-rev-branco-100 rounded-lg flex justify-between p-5 max-2sm:flex-col max-2sm:gap-4">
          <div className="flex gap-4 items-start">
            <input
              className="mt-[.700rem] cursor-pointer rounded-full peer relative appearance-none shrink-0 border-2 bg-white focus:outline-none focus:ring-offset-0  focus:border-2 checked:bg-rev-brand-200 checked:border-0 disabled:border-rev-brand-200 disabled:bg-steel-400 border-rev-brand-200 w-4 h-4 p-1"
              type="checkbox"
              checked={isCheckedSemestral}
              onClick={handleSemestralCheckboxClick}
            />
            <div className="flex flex-col gap-[1.125rem]">
              <span className="font-sarabun font-medium text-[1.375rem] text-rev-cinza-200">Assinatura Semestral</span>
              <span className="text-rev-cinza-200">6 meses de assinatura</span>
              <span className="text-rev-cinza-200">3 edições</span>
            </div>
          </div>
          <span className="font-sarabun font-medium text-[1.375rem] text-rev-cinza-200">R$ 60/semestral</span>
        </div>
        <Button text="Continuar" width="w-full" variant="normal" onClick={handleModalOpen} />
      </div>
      <ModalCadPlano
        open={modalOpen}
        onClose={handleModalClose}
        independentSetValue={plan}
        independentRegisterKey={"periodo_assinatura"}
      />
    </div>
  );
};
