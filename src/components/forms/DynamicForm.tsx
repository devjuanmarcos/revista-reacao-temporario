"use client";

import React, { KeyboardEvent, useState } from "react";

import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AvisoModal from "../modal/AvisoModal";
import Image from "next/image";
import { cepMask, cnpjMask, cpfMask, telefoneMask } from "@/utils/inputMasks";
import { CheckboxInput } from "./inputTypes/CheckboxInput";
import PerfilImageInput from "./inputTypes/PerfilImageInput";
import { InputFile } from "./inputTypes/FileInput";
import { getCep } from "@/services/apiViaCep";
import { Title } from "../TitleWithParagraph";

interface InputProps {
  formTitle?: string;
  title: string;
  typeInput: string;
  register: string;
  id: string;
  options?: string[];
  multipleChoice?: boolean;
  placeholder?: string;
  requiredField?: boolean;
  lowText?: string;
  highText?: string;
}

export interface InputPropsRelacion extends InputProps {
  relatedFieldId?: string | null;
}

interface DynamicProps {
  item: InputProps[];
  pageTitle?: string;
  line?: boolean;
  schema: ZodType<any, any, any>;
  src?: string;
  locality?: boolean;
  preview?: boolean;
  nextFocusRef?: React.RefObject<HTMLInputElement>;
}

export const DynamicForm = ({ item, pageTitle, locality, line, schema, src, preview, nextFocusRef }: DynamicProps) => {
  const [output, setOutput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  function createUser(data: z.infer<typeof schema>) {
    setOutput(JSON.stringify(data, null, 2));
    console.log(data);
    setShowModal(true);
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (nextFocusRef && nextFocusRef.current) {
        nextFocusRef.current.focus();
      }
    }
  };

  const renderLocationInputs = () => {
    const checkCEP = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const cep = e.target.value.replace(/\D/g, "");
      try {
        const response = await getCep(cep);
        const data = response.data;
        setValue("endereco_estado", data.uf);
        setValue("endereco_cidade", data.localidade);
        setValue("endereco_bairro", data.bairro);
        setValue("endereco_rua", data.logradouro);
        setFocus("endereco_complemento");
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      }
    };
    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      cepMask(event, setValue);
    };

    const labelClassName = "text-ls pt-2 text-rev-cinza-200 font-medium flex flex-col";
    const inputClassName = "border border-rev-cinza-200 shadow-sm h-10 px-3 rounded-lg text-rev-cin";

    return (
      <>
        <label className={labelClassName}>
          CEP
          <input
            key={1}
            type={"text"}
            className={inputClassName}
            {...register("endereco_cep" as any, { onChange: handleCepChange })}
            onBlur={checkCEP}
          />
        </label>

        <label className={labelClassName}>
          Estado
          <input key={3} type={"text"} className={inputClassName} {...register("endereco_estado")} />
        </label>

        <label className={labelClassName}>
          Município
          <input key={4} type={"text"} className={inputClassName} {...register("endereco_cidade")} />
        </label>

        <label className={labelClassName}>
          Bairro
          <input key={6} type={"text"} className={inputClassName} {...register("endereco_bairro")} />
        </label>

        <label className={labelClassName}>
          Logradouro
          <input key={6} type={"text"} className={inputClassName} {...register("endereco_rua")} />
        </label>

        <label className={labelClassName}>
          Complemento
          <input key={8} type={"text"} className={inputClassName} {...register("endereco_complemento")} />
        </label>

        <label className={labelClassName}>
          Número
          <input key={8} type={"text"} className={inputClassName} {...register("endereco_numero")} />
        </label>
      </>
    );
  };

  const renderCheckboxInput = (item: InputPropsRelacion, registerKey: any) => (
    <>
      {item.options?.map((checkboxItem) => (
        <CheckboxInput
          key={checkboxItem}
          checkboxItem={checkboxItem}
          registerKey={registerKey}
          multipleChoice={item.multipleChoice}
          checked={(watch(registerKey) || []).includes(checkboxItem)}
          onChange={() => {
            const currentValue = watch(registerKey) || [];
            let updatedValue: string[] = [];
            if (item.multipleChoice) {
              updatedValue = currentValue.includes(checkboxItem)
                ? currentValue.filter((item: string) => item !== checkboxItem)
                : [...currentValue, checkboxItem];
            } else {
              updatedValue = [checkboxItem];
            }
            setValue(registerKey, updatedValue);
          }}
        />
      ))}
    </>
  );

  const renderCheckboxLineInput = (item: InputPropsRelacion, registerKey: any) => (
    <div className={`flex flex-w items-end justify-start max-w-[44rem] w-screen max-lg:w-auto`}>
      <span className="pr-2  max-w-[20%] max-2sm:hidden text-rev-cinza-200 ">{item.lowText}</span>

      <div className={`flex flex-wrap items-center justify-center`}>
        {item.options?.map((checkboxItem, id) => (
          <label
            key={checkboxItem && item.id && registerKey && id}
            className={`flex flex-col-reverse item-center m-2  `}
          >
            <input
              type="checkbox"
              className={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none ${
                item.multipleChoice ? "rounded-md" : "rounded-full"
              } border border-rev-cinza-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-400 checked:bg-gray-400 checked:before:bg-gray-400 hover:before:opacity-10`}
              checked={watch(registerKey)?.includes(checkboxItem)}
              onChange={() => {
                const currentValue = watch(registerKey) || [];
                if (item.multipleChoice) {
                  let updatedValue: string[] = [];
                  if (Array.isArray(currentValue)) {
                    updatedValue = currentValue.includes(checkboxItem)
                      ? currentValue.filter((item) => item !== checkboxItem)
                      : [...currentValue, checkboxItem];
                  } else {
                    updatedValue = [checkboxItem];
                  }
                  setValue(registerKey, updatedValue);
                } else {
                  setValue(registerKey, [checkboxItem]);
                }
              }}
            />
            <span className="ml-2 text-rev-cinza-200">{checkboxItem}</span>
          </label>
        ))}
      </div>

      <span className="pl-2 max-w-[20%] max-2sm:hidden text-rev-cinza-200">{item.highText}</span>
    </div>
  );

  const renderSelectInput = (item: InputPropsRelacion, registerKey: any) => (
    <select
      key={item.id && item.register}
      className="border border-rev-cinza-200 shadow-sm h-10 px-3 rounded-lg text-rev-cinza-200"
      {...register(registerKey)}
    >
      <option value="">Selecione...</option>
      {item.options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  const renderParagraphInput = (item: InputPropsRelacion) => (
    <>
      {item.options?.map((paragraph) => (
        <p key={item.id && paragraph} className="my-1 text-rev-cinza-200">
          {paragraph}
        </p>
      ))}
    </>
  );

  const renderPerfilImage = (item: InputPropsRelacion) => <PerfilImageInput registerKey={item.register} />;

  const renderFileInput = (item: InputPropsRelacion, registerKey: any) => (
    <InputFile
      placeholder=""
      buttonText="Adicionar arquivo"
      id={item.id}
      label={item.title}
      {...register(registerKey)}
    />
  );

  const renderDefaultInput = (item: InputPropsRelacion, registerKey: any) => {
    return (
      <input
        key={item.id && item.register}
        type={item.typeInput}
        className={`border border-rev-cinza-200 shadow-sm h-10 px-3 rounded-lg text-rev-cin`}
        {...register(registerKey)}
        onChange={(event) => {
          if (registerKey === "cpf_responsavel_empresa" || registerKey === "cpf") {
            cpfMask(event, setValue, registerKey);
          }
          if (
            registerKey === "telefone" ||
            registerKey === "telefone_responsavel_empresa" ||
            registerKey === "whatsapp"
          ) {
            telefoneMask(event, setValue, registerKey);
          }
          if (registerKey === "cnpj") {
            cnpjMask(event, setValue, registerKey);
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
    );
  };

  const renderTextAreaInput = (item: InputPropsRelacion, registerKey: any) => (
    <textarea
      key={item.id && item.register}
      rows={5}
      className="border border-rev-cinza-200 shadow-sm p-3 rounded-lg resize-none text-rev-cinza-200 w-full h-[160px]"
      {...register(registerKey)}
    />
  );

  return (
    <section className=" w-full flex items-start justify-between gap-10  overflow-y-hidden ">
      {src && (
        <div className="fixed top-auto right-[2%]  w-[36%] max-w-[629px] max-lg:hidden h-auto flex flex-shrink-0 rounded-sm">
          <Image
            src={src}
            alt="Banner formulário"
            width={200}
            height={200}
            className="w-full h-full rounded-sm select-none"
          />
        </div>
      )}

      <div className={`${src ? "w-[50%]" : "w-full"} max-lg:w-full  overflow-y-scroll`}>
        {pageTitle && <Title title={pageTitle} />}
        <form
          className={`flex flex-wrap justify-between w-full rounded max-w-[32.75rem]  overflow-y-hidden `}
          onSubmit={handleSubmit(createUser)}
        >
          {item.map((item: InputPropsRelacion, index) => {
            const registerKey = item.register as keyof z.infer<typeof schema>;

            return (
              <React.Fragment key={item.id}>
                {item.formTitle && <Title title={item.formTitle} />}
                <div
                  className={`flex flex-col gap-1 pb-[1rem] ${
                    line && "border-rev-cinza-200 bg-transparent border-b pb-8 mt-5"
                  }  w-full ${
                    item.title === "CEP"
                      ? "w-[10rem]  max-lg:w-[56%]"
                      : item.title === "Estado"
                      ? "w-[3.75rem]  max-lg:w-[36%]"
                      : item.title === "Cidade"
                      ? "w-[15rem]  max-lg:w-full"
                      : item.title === "Numero"
                      ? "w-[3.75rem] max-lg:w-[36%]"
                      : item.title === "Complemento"
                      ? "w-[5.625rem] max-lg:w-[56%]"
                      : item.title === "Bairro"
                      ? "w-[18.75rem] max-lg:w-full"
                      : "w-full"
                  } 
                ${item.title === "Data de nascimento" ? "w-[36%]" : item.title === "Telefone" ? "w-[56%]" : "w-full"}
                `}
                >
                  <label htmlFor={item.register} className="text-ls pt-2 text-rev-cinza-200 font-medium  ">
                    {item.title}
                  </label>

                  {item.typeInput === "perfilImage" && renderPerfilImage(item)}
                  {item.typeInput === "select" && renderSelectInput(item, registerKey)}
                  {item.typeInput === "checkbox" && renderCheckboxInput(item, registerKey)}
                  {item.typeInput === "checkboxLine" && renderCheckboxLineInput(item, registerKey)}
                  {item.typeInput === "paragraph" && renderParagraphInput(item)}
                  {item.typeInput === "file" && renderFileInput(item, registerKey)}
                  {item.typeInput === "textArea" && renderTextAreaInput(item, registerKey)}
                  {["text", "date", "tel", "email"].includes(item.typeInput) && renderDefaultInput(item, registerKey)}

                  {errors[registerKey as any] && (
                    <span className="text-red-500">{errors[registerKey as any]?.message as string}</span>
                  )}
                </div>
              </React.Fragment>
            );
          })}

          <div
            className={`flex flex-col gap-1 pb-[1rem] ${
              line && "border-rev-cinza-200 bg-transparent border-b pb-8 mt-5"
            }  w-full `}
          >
            {locality && renderLocationInputs()}
          </div>

          <div className={`w-full flex py-4 gap-4 ${preview ? "justify-start" : "justify-end"}`}>
            <button
              className=" w-min font-medium text-white bg-rev-azul-200 px-[1.625rem] h-9 rounded-full hover:bg-rev-azul-300"
              type="submit"
            >
              ENVIAR
            </button>
            {preview && (
              <button
                className="font-medium text-rev-azul-200 bg-none px-[0.875rem] h-9 rounded-full border-rev-azul-200 border-[1px] hover:border-rev-azul-300 hover:text-rev-azul-300 transition-colors duration-500 w-min"
                type="button"
              >
                PRÉ - VISUALIZAÇÃO
              </button>
            )}
          </div>
        </form>
        {/* <pre> {output} </pre> */}
      </div>

      {output && (
        <AvisoModal
          open={showModal}
          onClose={handleCloseModal}
          button="FECHAR"
          border="bg-rev-azul-200"
          type="aviso"
          description="O formulário foi enviado com sucesso"
          title="Sucesso"
        />
      )}
    </section>
  );
};
