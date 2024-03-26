import { Title } from "@/components/TitleWithParagraph";
import { MiniCardImageWithText } from "@/components/cards/MiniCardImageWithTexts";

const images = [
  "/temp/noticias-semanais/IMAGEM-1.svg",
  "/temp/noticias-semanais/IMAGEM-2.svg",
  "/temp/noticias-semanais/IMAGEM-3.svg",
  "/temp/noticias-semanais/IMAGEM-4.svg",
  "/temp/noticias-semanais/IMAGEM-5.svg",
  "/temp/noticias-semanais/IMAGEM-6.svg",
];

export const BannerNewsOfTheWeek = () => {
  return (
    <section className="flex w-full flex-col gap-8 justify-center items-center">
      <div className="w-full">
        <Title line={false} title="NOTÍCIAS DA SEMANA" />
      </div>

      <div className="flex flex-col w-full min-w-[100vw] mx-[-6.25rem] h-full gap-8 max-lg:px-0 justify-center items-center ">
        <div className="flex flex-wrap gap-[1.6287rem] w-full max-w-[80rem] h-full justify-center items-center ">
          {images.map((image) => (
            <MiniCardImageWithText image={image} key={image as any} />
          ))}
        </div>
      </div>
    </section>
  );
};
