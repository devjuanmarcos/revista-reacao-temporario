import { FaCheck } from "react-icons/fa";
import { InputPropsRelacion } from "./forms/DynamicForm";

interface Step {
  subtitle: string;
  fields: InputPropsRelacion[];
  justify?: string;
}

interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
  status: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep, status }) => {
  return (
    <div className="flex  items-center pb-8 w-full">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`${
            i !== steps.length - 1 ? "w-full max-w-[8.5625rem]" : "w-auto"
          } flex justify-center  items-center ${
            i <= currentStep ? "before:bg-srtc-azul-200" : "before:bg-srtc-cinza-200"
          }`}
        >
          <div
            className={`flex items-center justify-center font-semibold w-8 min-w-8 h-8 min-h-8 px-2 mx-2 ${
              i <= currentStep ? "bg-rev-brand-200 text-white" : "bg-rev-brand-100 text-rev-brand-300 "
            } rounded-full text-base`}
          >
            <span>{i < currentStep ? <FaCheck /> : i === currentStep && status === true ? <FaCheck /> : i + 1}</span>
          </div>
          <div className={` w-full transition-colors duration-500 ${i !== steps.length ? "w-full" : "w-min"} `}>
            {i < currentStep ? (
              <div className="h-[0.0625rem] w-full max-w-[5.5625rem]  bg-rev-cinza-200 opacity-50" />
            ) : i !== steps.length - 1 ? (
              <div className="h-[0.0625rem] w-full max-w-[5.5625rem] bg-rev-cinza-200 opacity-50" />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};
