import { Title } from "@/components/TitleWithParagraph";
import { NewsCard } from "@/components/cards/NewsCard";
import Link from "next/link";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

interface BannerNewsByCategory {
  link: string;
}

export const BannerNewsByCategory = ({ link }: BannerNewsByCategory) => {
  return (
    <div className="flex flex-col py-[2.25rem] gap-[2.25rem]">
      <div className="flex justify-between max-2sm:flex-col ">
        <Title title="Acessibilidade" />
        <Link href={link} className="flex items-center max-2sm:justify-start max-2sm:mt-2 justify-center gap-2">
          <span className="underline text-sm">Ler todas as notícias</span>
          <BiArrowFromLeft />
        </Link>
      </div>

      <div className="flex max-md:flex-col gap-[2.8125rem] ">
        <NewsCard
          image={"/temp/todas-noticias/IMAGE-1.png"}
          title={"Lorem ipsum dolor sit amet Ut numquam corporis aut "}
          paragraph={
            "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus."
          }
          type={"acessibilidade "}
          minWidth="w-full"
          maxWidth="w-full"
          backgroundCard={""}
        />
        <NewsCard
          image={"/temp/todas-noticias/IMAGE-1.png"}
          title={"Lorem ipsum dolor sit amet Ut numquam corporis aut "}
          paragraph={
            "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus."
          }
          type={"acessibilidade "}
          minWidth="w-full"
          maxWidth="w-full"
          backgroundCard={""}
        />
        <NewsCard
          image={"/temp/todas-noticias/IMAGE-1.png"}
          title={"Lorem ipsum dolor sit amet Ut numquam corporis aut "}
          paragraph={
            "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus."
          }
          type={"acessibilidade "}
          minWidth="w-full"
          maxWidth="w-full"
          backgroundCard={""}
        />
      </div>
    </div>
  );
};
