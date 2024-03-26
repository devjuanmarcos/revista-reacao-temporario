import React from "react";
import BreadcrumbNoticia from "@/components/breadcrumbs/BreadcrumbNoticia";
import { TitleWithParagraph } from "@/components/TitleWithParagraph";
import Image from "next/image";
import { NoticiasRelacionadas } from "@/components/cards/NoticiasRelacionadas";
import { H1RegularSecao } from "@/components/titles/H1RegularSecao";

interface NoticiaProps {
  type?: string;
  title?: string;
  paragraph?: string;
  date: string;
  hour: string;
  image?: string;
  resume?: string;
  content: string;
}

const breadcrumbs = [
  { id: 1, breadcrumb: "Início", link: "/" },
  { id: 2, breadcrumb: "Notícias", link: "/noticias" },
  { id: 3, breadcrumb: "Cultura", link: "/cultura" },
];

const NoticiasRelacionadasProps = [
  {
    id: 1,
    image: "/temp/noticias-relacionadas/Rectangle 990.png",
    paragraph: "1ª Caminhada pela Conscientização do Autismo",
  },
  {
    id: 2,
    image: "/temp/noticias-relacionadas/Rectangle 991.png",
    paragraph: "Quantas crianças com deficiência existem?",
  },
  {
    id: 3,
    image: "/temp/noticias-relacionadas/Rectangle 992.png",
    paragraph: "CIN de pessoa com deficiência: solicite a sua!",
  },
];

export const NoticiaIndividual = ({ type, title, paragraph, date, hour, image, resume, content }: NoticiaProps) => {
  return (
    <>
      <ul className="flex items-center mt-6 mb-12">
        {breadcrumbs.map((breadcrumb) => (
          <BreadcrumbNoticia key={breadcrumb.id} breadcrumb={breadcrumb.breadcrumb} href={breadcrumb.link} />
        ))}
      </ul>
      <div className="bg-[url('/noticias/rectangle_blue.svg')] h-[24rem] lg:w-[calc(100% + 200px)] w-[calc(100% - 20px)] lg:mx-[-100px] mx-[-20px]">
        {" "}
        <div className=" py-7 lg:px-[100px] px-[20px]">
          <H1RegularSecao title={`${type}`} color="text-white" />
        </div>
      </div>

      <div className="bg-rev-revista-background lg:px-24 px-10 pb-9 mt-[-18rem]">
        <div className="pt-6 max-w-[46rem]">
          <div className="bg-rev-tipo-cultura" style={{ width: "20px", height: "6px" }}></div>
          <div className="mt-4 mb-6">
            <TitleWithParagraph
              title={title}
              font="font-sarabun"
              fontWeight="font-bold"
              fontSize="text-[2.375rem] leading-[3.25rem] tracking-tighter"
              paragraph={paragraph}
            />
          </div>
          <div className="flex justify-center sm:justify-between flex-col sm:flex-row gap-2">
            <span>{`${date} - ${hour}`}</span>
            <div className="flex sm:justify-between items-center gap-2">
              <p>Compartilhar:</p>
              <Image
                src={"/noticias/facebook_compartilhar.svg"}
                width={39}
                height={39}
                alt="Ícone do Facebook para compartilhar a matéria"
                className="w-[39px] h-full"
              />
              <Image
                src={"/noticias/instagram_compartilhar.svg"}
                width={39}
                height={39}
                alt="Ícone do Instagram para compartilhar a matéria"
                className="w-[39px] h-full"
              />
            </div>
          </div>
          <Image src={"/temp/foto_noticia.png"} width={750} height={515} alt="" className="w-[750px] h-full my-9" />
          <p className="text-rev-brand-400">{resume}</p>
          <p>{content}</p>
        </div>
      </div>

      {/* Notícias Relacionadas  */}
      <div className="bg-rev-brand-100 py-9 lg:w-[calc(100% + 200px)] w-[calc(100% - 20px)] lg:mx-[-100px] mx-[-20px]">
        <div className="lg:px-[196px] px-[60px]">
          <div className="max-w-[46rem]">
            <H1RegularSecao title="Notícias relacionadas" />

            <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full h-full justify-between">
              {NoticiasRelacionadasProps.map(({ id, image, paragraph }) => (
                <NoticiasRelacionadas key={id} image={image} paragraph={paragraph} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p>Comentários</p>
    </>
  );
};
