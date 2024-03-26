"use client";
import "@/app/globals.css";
import React, { forwardRef, useEffect, useState } from "react";
import { FieldError } from "react-hook-form";
import { useRef } from "react";
import { GoUpload } from "react-icons/go";

export interface InputProps extends React.InputHTMLAttributes<HTMLLabelElement> {
  placeholder?: string;
  buttonText?: string;
  filter?: boolean;
  label?: string;
  error?: FieldError;
  onFileChange?: (file: File | null) => void;
}

const InputFile = React.forwardRef<HTMLLabelElement, InputProps>(
  ({ buttonText, onFileChange, id, placeholder, ...rest }, ref) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    useEffect(() => {
      if (selectedFile && onFileChange) {
        onFileChange(selectedFile);
      }
    }, [selectedFile, onFileChange]);

    function handleKeyDown(e: React.KeyboardEvent<HTMLLabelElement>) {
      if (e.key === "Enter" && fileInputRef.current) {
        e.currentTarget.blur();
        fileInputRef.current.click();
      }
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0] ?? null;

      setSelectedFile(file);
    }

    function handleClick() {
      fileInputRef?.current?.click();
    }

    return (
      <>
        <label
          role="button"
          {...rest}
          onClick={handleClick}
          onKeyDown={(e) => handleKeyDown(e)}
          className="flex w-max items-center gap-2 hover:bg-rev-hover-cinza text-rev-cinza-200 font-medium bg-rev-cinza-100 py-0.5 px-3 py-[7px] rounded-full cursor-pointer"
        >
          <GoUpload /> <span className="text-[0.875rem]">{selectedFile ? selectedFile.name : buttonText}</span>
        </label>
        <input
          ref={fileInputRef}
          onChange={handleFileChange}
          type="file"
          className="hidden"
          placeholder={placeholder}
        />
      </>
    );
  }
);

InputFile.displayName = "InputFile";

export { InputFile };
