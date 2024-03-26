import { ChangeEvent } from "react";
import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

interface CheckboxInputProps {
  checkboxItem?: string;
  register?: UseFormRegister<FieldValues>;
  registerKey?: string;
  multipleChoice?: boolean;
  checked?: boolean;
  customKey?: string | number;
  mini?: boolean;
  errorMessage?: string;
  checkedValues?: string[];
  setValue?: any;
  onChange?: any;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  checkboxItem,
  register,
  registerKey,
  multipleChoice,
  customKey,
  mini,
  errorMessage,
  setValue,
  onChange,
  checkedValues,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (checkedValues) {
      if (!multipleChoice) {
        setValue(registerKey, e.target.checked ? checkboxItem : "");
      } else {
        const updatedValues = e.target.checked
          ? [...checkedValues, checkboxItem]
          : checkedValues.filter((value: string) => value !== checkboxItem);

        setValue(registerKey, updatedValues);
      }
    }
  };

  return (
    <label className={`flex items-center ${mini ? "m-2" : ""}`} key={customKey}>
      <input
        type="checkbox"
        className={`${multipleChoice ? "rounded-md" : "rounded-full"} peer relative appearance-none shrink-0 ${
          mini ? "w-3 h-3" : "w-4 h-4"
        } border-2 mt-1 bg-white focus:outline-none focus:ring-offset-0 focus:border-srtc-cinza-200 focus:border-4 checked:bg-srtc-azul-200 checked:border-0 disabled:border-steel-400 disabled:bg-steel-400 border-srtc-cinza-200`}
        checked={checkedValues?.includes(checkboxItem as any)}
        onChange={onChange ?? handleChange}
      />
      {mini ? (
        <svg
          className={`absolute w-3 h-3 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ) : (
        <svg
          className={`absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )}
      <span className="pl-2 w-[90%] text-lg text-srtc-cinza-200 hover:bg-slate-100">{checkboxItem}</span>
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </label>
  );
};
