import { Title } from "@/components/TitleWithParagraph";
import Image from "next/image";
import Link from "next/link";

export const BannerMainNews = () => {
  return (
    <section className="relative  bg-blueGray-50 rounded-md">
      <div className="relative pt-[16.375rem]  flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center ">
          <Image
            src={"/noticias/desfileCapaTemp.png"}
            alt="Desfile capa"
            fill
            className="w-full h-full object-cover "
          />
        </div>
        <div className=" relative mx-auto w-full opacity-90 bg-rev-cards-branco-100 max-w-[57rem] rounded-t-md">
          <div className="items-start flex flex-col px-[2rem] pt-[1.625rem] pb-5 gap-4 ">
            <Title title="Desfile das Campeãs: Inclusão é marca da Escola de Samba Embaixadores da Alegria" />
            <span className="text-rev-cinza-200">
              Criada em 2006, a Escola de Samba Embaixadores da Alegria realiza no próximo sábado (17) seu décimo sexto
              desfile, às 19h, precedendo a apresentação das agremiações campeãs do carnaval deste ano na Marquês de
              Sapucaí.
            </span>
            <Link
              href={`/noticia-selecionada/${""}`}
              className="font-sarabun text-sm text-rev-brand-text-200 underline"
            >
              Continuar lendo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
