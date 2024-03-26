import React, { useState } from "react";
import { InputPropsRelacion } from "../DynamicForm";
import { CheckboxInput } from "./CheckboxInput";

interface SelectWithCheckBoxProps {
  item: InputPropsRelacion;
  registerKey: any;
  expanded: boolean;
  onToggle: () => void;
  watchValue: string[];
  setValue: (name: string, value: any, shouldValidate?: boolean) => void;
}

export const SelectWithCheckBox: React.FC<SelectWithCheckBoxProps> = ({
  item,
  registerKey,
  expanded,
  onToggle,
  watchValue,
  setValue,
}) => {
  const [selectedValuesTemp, setSelectedValuesTemp] = useState<string[]>(watchValue);

  const handleCheckboxChangeTemp = (checkboxItem: string) => {
    const updatedValues: string[] = selectedValuesTemp.includes(checkboxItem)
      ? selectedValuesTemp.filter((item) => item !== checkboxItem)
      : [...selectedValuesTemp, checkboxItem];
    setSelectedValuesTemp(updatedValues);
  };

  const applySelections = () => {
    setValue(registerKey, selectedValuesTemp);
  };

  return (
    <div className="w-full inline-block">
      <div className="selectBox" onClick={onToggle}>
        <input
          className="border border-rev-cinza-200 shadow-sm h-10 px-3 rounded-lg text-rev-cinza-200 w-full cursor-pointer"
          placeholder="Selecione..."
          readOnly
          value={selectedValuesTemp.join(", ")}
        />
        <div className="overSelect"></div>
        <div
          className={`arrow absolute right-2 top-1/2 w-0 h-0 border-solid border-4 border-transparent border-t-black mt-[-2px] 
              ${expanded ? "transform rotate-180 transition-transform" : "transition-transform"}`}
        ></div>
      </div>
      <div
        className={`${
          expanded ? "block" : "hidden"
        }   scrollbar-thin scrollbar-webkit border-[1px] border-rev-cinza-200 rounded-xl absolute z-10 bg-rev-residencia-background overflow-y-scroll max-h-80   w-full max-w-96 mt-3 mb-4`}
      >
        {item.options?.map((checkboxItem) => (
          <CheckboxInput
            key={checkboxItem}
            checkboxItem={checkboxItem}
            registerKey={registerKey}
            multipleChoice={item.multipleChoice}
            checked={selectedValuesTemp.includes(checkboxItem)}
            onChange={() => handleCheckboxChangeTemp(checkboxItem)}
          />
        ))}
      </div>
      {expanded && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => {
            applySelections();
            onToggle();
          }}
        ></div>
      )}
    </div>
  );
};
