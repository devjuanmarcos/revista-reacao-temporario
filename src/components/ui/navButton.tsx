"use client";

interface NavButtonProps {
  text: string;
  background?: string;
}

export const NavButton = ({ text, background }: NavButtonProps) => {
  return (
    <button
      className={`py-4 px-[.625rem] text-center min-w-max h-[3.5rem] rounded-[1.125rem] 
    ${background ?? "bg-rev-brand-100"}
  `}
    >
      <span className="w-full min-w-max text-rev-cinza-200">{text}</span>
    </button>
  );
};
