"use client";

import { TitleWithParagraph } from "@/components/TitleWithParagraph";
import { SimpleTitleCard } from "@/components/cards/SimpleTitleCard";
import Image from "next/image";
import Link from "next/link";

export const BannerMainHome = () => {
  return (
    <div className=" xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-10 w-full overflow-hidden h-full  items-center max-xl:flex-wrap">
      <div className="w-full max-w-[24rem] max-lg:max-w-full">
        <div className="hidden max-md:flex relative bg-rev-cinza-100 w-full h-full  max-h-[15.625rem] mb-8 overflow-hidden">
          <Image
            src={"/temp/mulherMexendoCelular.png"}
            alt="capa da notícia principal em destaque"
            className="w-full h-full object-cover"
            width={300}
            height={300}
          />
          <Link
            className="z-10 px-[3.8125rem] py-4 absolute bottom-0 left-0 bg-white bg-opacity-70 hover-[#ECF4F4] hover:bg-opacity-100 text-[#12303A] hover:text-black "
            href={"/notícia"}
            target="_blank"
          >
            <span className="font-sarabun text-base font-semibold ">Continuar lendo</span>
          </Link>
        </div>
        <TitleWithParagraph
          title="Desfile das Campeãs: Inclusão é marca da Escola de Samba Embaixadores da Alegria"
          font="font-sarabun"
          fontWeight="font-bold"
          fontSize="text-[2.375rem] leading-[3.25rem] tracking-tighter"
          paragraph="Criada em 2006, a Escola de Samba Embaixadores da Alegria realiza no próximo sábado (17) seu décimo sexto desfile, às 19h, precedendo a apresentação das agremiações campeãs do carnaval deste ano na Marquês de Sapucaí."
        />
      </div>

      <div className="max-md:hidden relative bg-rev-cinza-100 w-full h-full max-w-[31.625rem] max-h-[35.625rem]  overflow-hidden">
        <Image
          src={"/temp/mulherMexendoCelular.png"}
          alt="capa da notícia principal em destaque"
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
        <Link
          className="z-10 px-[3.8125rem] py-4 absolute bottom-0 left-0 bg-white bg-opacity-70 hover-[#ECF4F4] hover:bg-opacity-100 text-[#12303A] hover:text-black "
          href={"/noticias/noticia"}
          target="_blank"
        >
          <span className="font-sarabun text-base font-semibold ">Continuar lendo</span>
        </Link>
      </div>

      <div className="flex flex-col max-xl:hidden max-xl:pt-[1.25rem]">
        <span className="font-lato text-base mb-[-1rem] max-xl:mb-0 text-[#787878] w-full item-start font-bold">
          NOTÍCIAS POPULARES
        </span>
        <div className="w-full max-w-[21.25rem] flex flex-col gap-4 max-md:flex-col max-md:max-w-none  max-xl:max-w-none ">
          <SimpleTitleCard />
          <SimpleTitleCard />
          <SimpleTitleCard />
        </div>
      </div>
    </div>
  );
};
