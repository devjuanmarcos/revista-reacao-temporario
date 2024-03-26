"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
  loadingText?: string;
  variant?: "normal" | "sem-fundo" | "mini";
  width?: string;
  bgColor?: string;
  hoverBgColor?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
}

export const Button = ({
  text,
  loading,
  loadingText,
  variant,
  width,
  bgColor,
  hoverBgColor,
  onClick,
  type,
  className,
  ...rest
}: ButtonProps) => {
  let buttonClass = `font-lato text-base h-[2.5625rem] not-italic cursor-pointer select-none flex items-center justify-center px-8 transition-transform transform-gpu hover:-translate-y-[.125rem] hover:shadow-lg ${
    width || "w-full"
  } `;

  switch (variant) {
    case "sem-fundo":
      buttonClass += `rounded-lg text-rev-brand-300 bg-none border-2 border-rev-brand-300 `;
      break;

    case "normal":
      buttonClass += `rounded-lg bg-gradient-to-r from-[#1F9EB4] to-[#268494] hover:bg-gradient-to-br transition-all ease-out duration-500 text-white  ${className} hover: `;
      break;

    default:
      return className || "";
  }

  return (
    <button
      type={type || "button"}
      className={`${buttonClass} ${loading ? "opacity-70" : ""}`}
      disabled={loading}
      onClick={onClick}
      {...rest}
    >
      {loading ? loadingText : text}
    </button>
  );
};
