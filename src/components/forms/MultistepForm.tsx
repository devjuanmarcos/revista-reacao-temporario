import React, { ReactComponentElement, ReactNode, useEffect, useState } from "react";
import { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { renderFormField } from "./inputTypes/Renders";
// import { Button } from "../ui/Button";
import AvisoModal from "../modal/AvisoModal";
import { useRouter } from "next/navigation";
// import StepThumbModal from "../modal/StepThumbModal";
import { AxiosError } from "axios";
import { ProgressBar } from "../progressBar";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa";

interface InputProps {
  formTitle?: string;
  title: string;
  titleCard?: string;
  typeInput: string;
  register: string;
  id: string;
  options?: string[];
  multipleChoice?: boolean;
  placeHolder?: string;
  requiredField?: boolean;
  lowText?: string;
  highText?: string;
  width?: string;
  justify?: string;
}

interface InputPropsRelacion extends InputProps {
  relatedFieldId?: string | null;
}

interface FirstModalThumbProps {
  title: string;
  upText: string;
  description: string;
}

interface LastModalProps {
  title: string;
  description: string;
  route: string;
  routeTwo?: string;
  buttonText: string;
}

interface DynamicProps {
  schema: ZodType<any, any, any>;
}

interface Step {
  title?: string;
  titleCard?: string;
  subtitle: string;
  fields: InputPropsRelacion[];
}

type ModalSuccessType = React.FC;

interface MultistepFormProps extends DynamicProps {
  steps?: Step[];
  items?: InputProps[];
  urlApi?: string;
  post?: boolean;
  put?: boolean;
  lastModal?: LastModalProps[];
  ModalSucess?: ModalSuccessType;
  independentSetValue?: string;
  independentRegisterKey?: string;
}

export const MultistepForm = ({
  steps,
  items,
  urlApi,
  post,
  put,
  schema,
  lastModal,
  ModalSucess,
  independentSetValue,
  independentRegisterKey,
}: MultistepFormProps) => {
  const router = useRouter();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [expandedOptions, setExpandedOptions] = useState<{ [key: string]: string | null }>({});
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(true);
  const [showModalError, setShowModalError] = useState(false);
  const [showModalSucess, setShowModalSucess] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    getFieldState,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: zodResolver(schema),
    shouldUnregister: false,
    mode: "all",
  });
  const [alternativeRoute, setAlternativeRoute] = useState(false);
  useEffect(() => {
    setValue(independentRegisterKey as never, independentSetValue as never);
  }, [independentSetValue, independentRegisterKey, setValue]);

  const submitFormData = async (formData: any) => {
    setCurrentStepIndex((prevIndex) => prevIndex - 1);
    setShowModalSucess(true);

    // try {
    //   if (post && urlApi) {
    //     // const response = await apiPost(urlApi, formData);
    //   }
    //   if (put && urlApi) {
    //     // const response = await apiPut(urlApi, formData);
    //   }
    //   console.log("Response:", formData);
    //   setShowModal(true);
    //   if (lastModal?.[0]?.routeTwo && (watch(registerAlternativeRoute as any) as any) == "Não") {
    //     setAlternativeRoute(true);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   if (error instanceof AxiosError) {
    //     const axiosError = error as AxiosError;
    //     if (axiosError.response && axiosError.response.status === 500) {
    //       console.log("Dados já cadastrados no nosso sistema");
    //       setShowModalError(true);

    //       return;
    //     }
    //   }
    //   // setShowModal(true);
    // }
  };

  async function nextStep() {
    let hasError = false;
    if (steps) {
      for (const field of steps[currentStepIndex].fields) {
        await trigger(field.register as any);
        if (getFieldState(field.register as never).invalid) {
          hasError = true;
        }
      }
      if (!hasError) {
        setCurrentStepIndex((prevIndex) => prevIndex + 1);
      }
    }
  }

  return (
    <section
      className={`relative w-full ${showModalSucess && steps ? "max-w-[28.25rem]" : ""}
      ${steps && !showModalSucess ? "min-w-[56.25rem]" : ""}
      ${items ? "w-full max-w-[34.375rem] min-w-[34.375rem] max-lg:min-w-full" : ""}
      max-lg:min-w-full p-8  text-rev-cinza-200 bg-rev-revista-background rounded-lg transition-all duration-500`}
    >
      <form
        className={`flex flex-wrap flex-col gap-5 justify-center items-center w-full ${
          showModalSucess ? "max-h-0 opacity-0" : "100vh overflow-hidden opacity-100"
        }`}
        onSubmit={handleSubmit(submitFormData)}
      >
        {steps && (
          <>
            <div className="flex flex-col w-full">
              {steps[currentStepIndex]?.title && (
                <h2 className="text-[1.375rem] font-sarabun font-medium pt-1 pb-9">{steps[currentStepIndex]?.title}</h2>
              )}
              <ProgressBar steps={steps} currentStep={currentStepIndex} status={showModal} />

              {steps[currentStepIndex]?.subtitle && (
                <span className="text-lg text-srtc-cinza-200 leading-4 pb-6">{steps[currentStepIndex]?.subtitle}</span>
              )}
              <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 justify-between w-full">
                {steps[currentStepIndex]?.fields.map((field) =>
                  renderFormField(
                    field,
                    schema,
                    register,
                    expandedOptions,
                    setExpandedOptions,
                    watch,
                    errors,
                    false,
                    setValue,
                    trigger,
                    setFocus
                  )
                )}
              </div>
            </div>
            {/* Botões de avançar e retroceder */}
            <div className="mt-4 flex gap-3 justify-end w-full">
              {currentStepIndex !== 0 && (
                <Button
                  variant={"sem-fundo"}
                  text="Voltar"
                  type="button"
                  onClick={() => setCurrentStepIndex((prevIndex) => prevIndex - 1)}
                  width="w-max"
                />
              )}
              {currentStepIndex === steps.length ? (
                <Button variant={"normal"} text={"Finalizar"} type={"submit"} width="w-max" />
              ) : (
                <Button variant={"normal"} text={"Avançar"} type={"button"} onClick={nextStep} width="w-max" />
              )}
            </div>
          </>
        )}

        {items && (
          <>
            <div className="w-full flex flex-col gap-[.5625rem]">
              <span className="font-sarabun font-medium text-[1.375rem] mb-[2.0625rem]">Formulário de contato</span>

              {items.map((item) => {
                let SIZETWO = true;
                return renderFormField(
                  item,
                  schema,
                  register,
                  expandedOptions,
                  setExpandedOptions,
                  watch,
                  errors,
                  false,
                  setValue,
                  trigger,
                  setFocus,
                  SIZETWO
                );
              })}
            </div>

            <Button text="Enviar" type="submit" width="w-full" variant="normal" />
          </>
        )}
      </form>

      {showModalSucess && ModalSucess && <ModalSucess />}
      <AvisoModal
        open={showModalError}
        onClose={() => router.push(`/${alternativeRoute ? lastModal?.[0]?.routeTwo : lastModal?.[0]?.route}`)}
        button={lastModal?.[0]?.buttonText ?? "FECHAR"}
        border="bg-srtc-azul-200"
        type="aviso"
        description={lastModal?.[0]?.description ?? "Dados já cadastrados no nosso sistema"}
        title={lastModal?.[0]?.title ?? "Ops"}
      />
    </section>
  );
};
