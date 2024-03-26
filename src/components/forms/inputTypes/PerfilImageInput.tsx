import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";

interface PerfilImageInputProps {
  registerKey: string;
}

const PerfilImageInput: React.FC<PerfilImageInputProps> = ({ registerKey }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { register, setValue } = useFormContext();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setValue(registerKey, file);
    }
  };

  return (
    <div className="flex flex-col items-start ">
      <label htmlFor={registerKey} className="cursor-pointer">
        <div className="w-24 h-24 bg-rev-cinza-200 rounded-full flex items-center justify-center relative overflow-hidden">
          {selectedImage ? (
            <Image
              width={100}
              height={100}
              src={selectedImage}
              alt="Perfil"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="text-white text-xs">Foto de perfil</span>
          )}
        </div>
      </label>
      <input
        id={registerKey}
        type="file"
        accept="image/*"
        className="hidden"
        {...register(registerKey)}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default PerfilImageInput;
