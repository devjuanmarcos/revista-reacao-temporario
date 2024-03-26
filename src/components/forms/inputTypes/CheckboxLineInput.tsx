// CheckboxLineInput.tsx

import React from "react";
import { InputPropsRelacion } from "../DynamicForm";

interface CheckboxLineInputProps {
  item: InputPropsRelacion;
  registerKey: any;
  watch: any;
  setValue: any;
}

export const CheckboxLineInput: React.FC<CheckboxLineInputProps> = ({ item, registerKey, watch, setValue }) => (
  <div className={`flex flex-w items-end justify-start max-w-[44rem] w-full max-lg:w-auto`}>
    <span className=" max-w-[20%] max-2sm:hidden text-rev-cinza-200 ">{item.lowText}</span>

    <div className={`flex flex-wrap items-center justify-center px-1`}>
      {item.options?.map((checkboxItem, id) => (
        <label
          htmlFor={checkboxItem + item.id + registerKey + id}
          key={checkboxItem + item.id + registerKey + id}
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
          <span className=" text-rev-cinza-200 text-center">{checkboxItem}</span>
        </label>
      ))}
    </div>

    <span className="pl-2 max-w-[20%] max-2sm:hidden text-rev-cinza-200">{item.highText}</span>
  </div>
);
