"use client";

import React from "react";
import { ZodType, z } from "zod";
import { AssinaturaRevista, SolicitacaoAtendimento } from "@/zod-form-schema/userSchema";
import { MultistepForm } from "./MultistepForm";

interface Step {
  title?: string;
  titleCard?: string;
  subtitle: string;
  fields: InputPropsRelacion[];
  justify?: string;
}

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

interface ObjectDynamicFormsProps {
  schema: "assinatura-revista" | "solicitacao-contato";
  items?: InputPropsRelacion[];
  steps?: Step[];
  urlApi?: string;
  put?: boolean;
  post?: boolean;
  locality?: boolean;
  line?: boolean;
  pageTitle?: string;
  src?: string;
  lastModal?: any;
  modalSucess?: any;
  independentSetValue?: string;
  independentRegisterKey?: string;
}

export const ObjectMultistepForm = ({
  schema,
  steps,
  items,
  urlApi,
  post,
  put,
  lastModal,
  modalSucess,
  independentSetValue,
  independentRegisterKey,
  locality,
  pageTitle,
  src,
  line,
}: ObjectDynamicFormsProps) => {
  let formSchema: ZodType<any, any, any> = {} as ZodType<any, any, any>;
  const ids: string[] = [];

  steps?.forEach((step) => {
    step.fields.forEach((field) => {
      ids.push(field.id);
    });
  });

  switch (schema) {
    case "assinatura-revista":
      formSchema = AssinaturaRevista;
      break;

    case "solicitacao-contato":
      formSchema = SolicitacaoAtendimento;
      break;

    default:
      break;
  }

  return (
    <MultistepForm
      schema={formSchema}
      steps={steps}
      items={items}
      lastModal={lastModal}
      urlApi={urlApi}
      post={post}
      put={put}
      ModalSucess={modalSucess}
      independentSetValue={independentSetValue}
      independentRegisterKey={independentRegisterKey}
    />
  );
};
