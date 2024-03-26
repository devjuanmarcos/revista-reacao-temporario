import { BannerMainNews } from "@/components/banners/BannerMainNews";
import { SearchWithFilter } from "@/components/ui/searchWithFilter";
import React from "react";
import { Metadata } from "next";
import { NewsCard } from "@/components/cards/NewsCard";

export async function generateMetadata({ params }: Readonly<{ params: { type: string } }>): Promise<Metadata> {
  try {
    const type = params.type;
    return {
      title: `Notícias - ${type}`,
      description: "",
    };
  } catch (Error) {
    return {
      title: "Noticias",
      description: "Oops! Parece que esta página não existe! Tem certeza que deveria ter algo aqui?",
    };
  }
}

const tempData = [
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "cultura",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "cultura",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "cultura",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "cultura",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "cultura",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "cultura",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "tecnologia",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "tecnologia",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "tecnologia",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "tecnologia",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "tecnologia",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "tecnologia",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "tecnologia",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "acessibilidade",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "acessibilidade",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "acessibilidade",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "acessibilidade",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "acessibilidade",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "acessibilidade",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
  {
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Ut numquam corporis aut",
    paragraph:
      "Lorem ipsum dolor sit amet. Ut numquam corporis aut recusandae dignissimos aut quidem minus et dignissimos magnam eos sunt natus ex iusto dolorem sit repellendus.",
    type: "acessibilidade",
    minWidth: "w-full",
    maxWidth: "w-full",
    backgroundCard: "",
  },
];

export default async function CompletedNews({ params }: Readonly<{ params: { type: string } }>) {
  const filteredBanner = tempData.filter((item) => item.type === params.type);

  return (
    <section className="">
      {/* <BannerMainNews /> */}
      <SearchWithFilter itemsBar={false} />

      <div className="flex flex-col gap-[6rem] mt-[6rem]">
        <div className="flex max-md:flex-col max-w-full flex-wrap gap-[2.8125rem] justify-center items-center">
          {filteredBanner.map((banner, index) => (
            <NewsCard
              key={index}
              image={banner.image}
              title={banner.title}
              paragraph={banner.paragraph}
              type={banner.type}
              minWidth="min-w-[23.75rem]"
              maxWidth="max-w-[23.75rem]"
              backgroundCard={""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
