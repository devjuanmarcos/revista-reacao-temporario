import Image from "next/image";
import Link from "next/link";

interface MiniCardPDFEditionProps {
  pdfId?: number;
  numeroEdicao?: string;
  dataEdicao?: string;
  descricaoEdicao?: string;
}

export const MiniCardPDFEdition = ({ pdfId, numeroEdicao, dataEdicao, descricaoEdicao }: MiniCardPDFEditionProps) => {
  return (
    <div className="flex gap-[1.625rem]  h-full w-full max-w-[37.9375rem] max-xl:min-w-full bg-rev-cards-cinza-100 pt-[1.625rem] pb-11 px-[2.0625rem] rounded-md ">
      <div className=" w-[13.9375rem] max-sm:w-[80%] max-sm:ml-[-2.0625rem] max-sm:mr-[-2.75rem] h-[18.75rem]  rounded-sm relative max-sm:absolute max-sm:z-[-20] aspect-square mt-[-3.3125rem] max-sm:mt-[-10.3125rem] ">
        <Image
          src={"/edicoes/Rectangle 963-1.png"}
          alt={`capa da revista ${numeroEdicao}`}
          width={1920}
          height={1920}
          sizes={"1920 1920"}
          className="w-[13.9375rem] max-sm:w-[80%] h-[18.75rem] "
        />
      </div>
      <div className="relative flex flex-col text-start w-full">
        <span className="text-rev-cinza-200 font-medium font-sarabun text-[1.375rem] ">Edição 124</span>
        <span className="text-rev-cinza-200 mb-4">Julho/ Agosto/ Setembro 2022</span>
        <span className="text-rev-cinza-200 text-base mb-[1.625rem]">
          Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos
          magnam eos sunt natus ex iusto dolorem sit repellendus laboriosam.
        </span>
        <Link href={`/edicoes/html-flip-bool/${pdfId}`} className="text-rev-brand-text-200 text-sm underline ">
          Ver mais
        </Link>
      </div>
    </div>
  );
};
