import Image from "next/image";
import Link from "next/link";

interface NoticiasRelacionadasProps {
  image: string;
  paragraph: string;
}

export const NoticiasRelacionadas = ({ image, paragraph }: NoticiasRelacionadasProps) => {
  return (
    <div className="flex flex-col gap-2 max-w-[244px] w-full h-full py-4 rounded">
      <div className="relative w-full  h-full items-center rounded overflow-hidden ">
        <Image src={image} alt="alt temp" className="w-full h-full object-cover " width={100} height={100} />
      </div>
      <div className="flex flex-col justify-between items-start gap-3">
        <p className="font-sarabun text-sm font-normal text-rev-cinza-200">{paragraph}</p>
      </div>
    </div>
  );
};
