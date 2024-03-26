"use client";

import React from "react";
import { CheckboxInput } from "./CheckboxInput";
import DefaultInput from "./DefaultInput";
import { SelectWithCheckBox } from "./SelectWithCheckBox";
import { InputFile } from "./FileInput";
import { CheckboxLineInput } from "./CheckboxLineInput";
import { z } from "zod";
import { InputPropsRelacion } from "../ObjectMultistepForm";

export const renderSelectInputWithCheckBox = (
  item: InputPropsRelacion,
  registerKey: any,
  expandedOptions: any,
  toggleCheckboxes: any,
  watch: any,
  setValue: any
) => {
  return (
    <SelectWithCheckBox
      item={item}
      registerKey={registerKey}
      expanded={expandedOptions[item.id] as any}
      onToggle={() => toggleCheckboxes(item.id)}
      watchValue={watch(registerKey) || []}
      setValue={setValue as any}
    />
  );
};

export const renderCheckboxInput = (
  item: InputPropsRelacion,
  registerKey: any,
  watch: any,
  setValue: any,
  register: any
) => (
  <>
    {item.options?.map((checkboxItem: any) => (
      <CheckboxInput
        register={register}
        key={checkboxItem}
        checkboxItem={checkboxItem}
        registerKey={registerKey}
        multipleChoice={item.multipleChoice}
        checkedValues={watch(registerKey) || []}
        setValue={setValue}
      />
    ))}
  </>
);

export const renderDefaultInput = (
  item: InputPropsRelacion,
  registerKey: any,
  register: any,
  setValue: any,
  trigger: any,
  setFocus: any
) => {
  return (
    <DefaultInput
      type={item.typeInput}
      register={register}
      registerKey={registerKey}
      setValue={setValue}
      trigger={trigger}
      setFocus={setFocus}
    />
  );
};

export const renderFileInput = (item: InputPropsRelacion, registerKey: any, register: any) => (
  <InputFile
    placeholder=""
    buttonText="Adicionar arquivo"
    id={item.id}
    label={item.title}
    onFileChange={(file) => {}}
    {...register(registerKey)}
  />
);

export const renderCheckboxLineInput = (item: InputPropsRelacion, registerKey: any, watch: any, setValue: any) => (
  <CheckboxLineInput item={item} registerKey={registerKey} watch={watch} setValue={setValue} />
);

export const renderSelectInput = (item: InputPropsRelacion, registerKey: any, register: any) => (
  <label htmlFor={item.id} className="w-full h-full">
    <select
      key={item.id && item.register}
      className="border border-srtc-cinza-200 shadow-sm h-10 w-full px-3 rounded-lg text-srtc-cinza-200"
      {...register(registerKey)}
    >
      <option value="">Selecione...</option>
      {item.options?.map((option: any) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

export const renderParagraphInput = (item: InputPropsRelacion) => (
  <>
    {item.options?.map((paragraph: any) => (
      <p key={item.id + paragraph} className="my-1 text-srtc-cinza-200">
        {paragraph}
      </p>
    ))}
  </>
);

export const renderPerfilImage = (item: InputPropsRelacion) => (
  <label className="flex flex-row cursor-pointer relative overflow-hidden w-full gap-2" key={item.id + item.register}>
    <input className="hidden" type="file" />
    <div className="p-12 text-slate-900 bg-slate-200 rounded-full w-[126px] h-[126px]">Foto</div>
  </label>
);

export const renderTextAreaInput = (item: InputPropsRelacion, registerKey: any, register: any) => (
  <textarea
    key={item.id + item.register}
    rows={5}
    className="border border-srtc-cinza-200 shadow-sm p-3 rounded-lg resize-none text-srtc-cinza-200 w-full h-[160px]"
    {...register(registerKey)}
  />
);

export const renderFormField = (
  field: InputPropsRelacion,
  schema: any,
  register: any,
  expandedOptions: any,
  setExpandedOptions: any,
  watch: any,
  errors: any,
  line: any,
  setValue: any,
  trigger: any,
  setFocus: any,
  SIZETWO?: boolean
) => {
  const registerKey = field.register as keyof z.infer<typeof schema>;
  const toggleCheckboxes = (dropdownId: string) => {
    setExpandedOptions((prevOptions: any) => ({
      ...prevOptions,
      [dropdownId]: !prevOptions[dropdownId] ? "Selecione..." : null,
    }));
  };
  return (
    <React.Fragment key={field.register}>
      <div
        className={`flex flex-col gap-1 pb-[1rem] justify-start ${
          line && "border-srtc-cinza-200 bg-transparent border-b pb-8 mt-5"
        }  w-full ${SIZETWO ? "w-full max-w-[50rem]" : "max-w-[24.25rem]"} max-lg:max-w-[100%]
          `}
      >
        <label
          htmlFor={field.register}
          className="text-base text-rev-cinza-200 font-sarabun font-normal leading-auto  "
        >
          {field.title}
        </label>

        {field.typeInput === "perfilImage" && renderPerfilImage(field)}
        {field.typeInput === "select" && renderSelectInput(field, registerKey, register)}
        {field.typeInput === "selectWithCheckbox" &&
          renderSelectInputWithCheckBox(field, registerKey, expandedOptions, toggleCheckboxes, watch, setValue)}
        {field.typeInput === "checkbox" && renderCheckboxInput(field, registerKey, watch, setValue, register)}
        {field.typeInput === "checkboxLine" && renderCheckboxLineInput(field, registerKey, watch, setValue)}
        {field.typeInput === "paragraph" && renderParagraphInput(field)}
        {field.typeInput === "file" && renderFileInput(field, registerKey, register)}
        {field.typeInput === "textArea" && renderTextAreaInput(field, registerKey, register)}
        {["text", "date", "tel", "email"].includes(field.typeInput) &&
          renderDefaultInput(field, registerKey, register, setValue, trigger, setFocus)}

        {errors[registerKey as any] && (
          <span className="text-red-500">{errors[registerKey as any]?.message as string}</span>
        )}
      </div>
    </React.Fragment>
  );
};
