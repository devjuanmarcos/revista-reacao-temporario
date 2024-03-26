import React, { ChangeEvent, KeyboardEvent } from "react";
import { UseFormRegister, FieldValues, UseFormSetValue } from "react-hook-form";
import { cepMask, cnpjMask, cpfMask, telefoneFixoMask, telefoneMask } from "@/utils/inputMasks";
import { getCep } from "@/services/apiViaCep";

interface DefaultInputProps {
  type: string;
  register: UseFormRegister<FieldValues>;
  registerKey: string;
  errorMessage?: string;
  setValue: UseFormSetValue<FieldValues>;
  nextFocusRef?: React.RefObject<HTMLInputElement>;
  trigger?: any;
  setFocus?: any;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
  type,
  register,
  registerKey,
  errorMessage,
  setValue,
  nextFocusRef,
  setFocus,
  trigger,
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (nextFocusRef && nextFocusRef.current) {
        nextFocusRef.current.focus();
      }
    }
  };

  const checkCEP = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, "");
    try {
      const response = await getCep(cep);
      const data = response.data;
      console.log(data);
      setValue("endereco_estado", data.uf);
      setValue("endereco_cidade", data.localidade);
      setValue("endereco_rua_bairro", `${data.bairro}, ${data.logradouro}`);
      setFocus("endereco_numero");
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
    }
  };

  return (
    <>
      <input
        type={type}
        className="bg-rev-brand-100 text-rev-cinza-200 font-lato text-base font-medium rounded-[.125rem] focus:bg-rev-revista-background focus:outline-none focus:border-[.0625rem] focus:border-rev-brand-200  block w-full px-3  placeholder:text-rev-cinza-200 h-[2.875rem] "
        {...register(registerKey)}
        onChange={(event) => {
          if (registerKey === "cpf_responsavel_empresa" || registerKey === "cpf") {
            cpfMask(event, setValue, registerKey);
          }
          if (
            registerKey === "telefone_celular" ||
            registerKey === "telefone_responsavel_empresa" ||
            registerKey === "whatsapp"
          ) {
            telefoneMask(event, setValue, registerKey);
          }
          if (registerKey === "telefone_fixo") {
            telefoneFixoMask(event, setValue, registerKey);
          }
          if (registerKey === "cnpj") {
            cnpjMask(event, setValue, registerKey);
          }
          if (registerKey === "endereco_cep") {
            cepMask(event, setValue);
            checkCEP(event);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            const form = event.currentTarget.form;
            const index = Array.prototype.indexOf.call(form?.elements, event.currentTarget);
            const nextInput = form?.elements[index + 1] as HTMLInputElement;
            if (nextInput && nextInput.focus) {
              nextInput.focus();
            }
          } else {
            handleKeyDown(event);
          }
        }}
      />
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </>
  );
};

export default DefaultInput;
