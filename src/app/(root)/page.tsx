import { BannerCarouselNews } from "@/components/banners/BannerCarouselNews";
import { BannerDailyNews } from "@/components/banners/BannerDailyNews";
import { BannerMainHome } from "@/components/banners/BannerMainHome";
import { BannerNewsOfTheWeek } from "@/components/banners/BannerNewsOfTheWeek";
import { BannerVideo } from "@/components/banners/BannerVideo";
import { CardItemsProps } from "@/components/carousels/Slider3DCoverflowEffect";
import React from "react";

const sliderItemsTemp: CardItemsProps[] = [
  {
    id: 1,
    image: "/temp/todas-noticias/IMAGE-1.png",
    title: "Lorem ipsum dolor sit amet Et enim officiis",
    paragraph:
      "Lorem ipsum dolor sit amet. Ea atque porro est consectetur obcaecati ut debitis corporis qui quisquam Quis sit recusandae consequatur vel alias repudiandae et voluptate rerum.",
    type: "Acessibilidade",
  },
  {
    id: 2,
    image: "/temp/todas-noticias/IMAGE-2.png",
    title: "Lorem ipsum dolor sit amet Et enim officiis",
    paragraph:
      "Lorem ipsum dolor sit amet. Ea atque porro est consectetur obcaecati ut debitis corporis qui quisquam Quis sit recusandae consequatur vel alias repudiandae et voluptate rerum.",
    type: "Cultura",
  },
  {
    id: 3,
    image: "/temp/todas-noticias/IMAGE-3.png",
    title: "Lorem ipsum dolor sit amet Et enim officiis",
    paragraph:
      "Lorem ipsum dolor sit amet. Ea atque porro est consectetur obcaecati ut debitis corporis qui quisquam Quis sit recusandae consequatur vel alias repudiandae et voluptate rerum.",
    type: "Eventos",
  },
  {
    id: 4,
    image: "/temp/todas-noticias/IMAGE-4.png",
    title: "Lorem ipsum dolor sit amet Et enim officiis",
    paragraph:
      "Lorem ipsum dolor sit amet. Ea atque porro est consectetur obcaecati ut debitis corporis qui quisquam Quis sit recusandae consequatur vel alias repudiandae et voluptate rerum.",
    type: "Acontecimentos",
  },
  {
    id: 5,
    image: "/temp/todas-noticias/IMAGE-5.png",
    title: "Lorem ipsum dolor sit amet Et enim officiis",
    paragraph:
      "Lorem ipsum dolor sit amet. Ea atque porro est consectetur obcaecati ut debitis corporis qui quisquam Quis sit recusandae consequatur vel alias repudiandae et voluptate rerum.",
    type: "Educação",
  },
  {
    id: 6,
    image: "/temp/todas-noticias/IMAGE-5.png",
    title: "Lorem ipsum dolor sit amet Et enim officiis",
    paragraph:
      "Lorem ipsum dolor sit amet. Ea atque porro est consectetur obcaecati ut debitis corporis qui quisquam Quis sit recusandae consequatur vel alias repudiandae et voluptate rerum.",
    type: "Educação",
  },
  {
    id: 7,
    image: "/temp/todas-noticias/IMAGE-5.png",
    title: "Lorem ipsum dolor sit amet Et enim officiis",
    paragraph:
      "Lorem ipsum dolor sit amet. Ea atque porro est consectetur obcaecati ut debitis corporis qui quisquam Quis sit recusandae consequatur vel alias repudiandae et voluptate rerum.",
    type: "Educação",
  },
  {
    id: 8,
    image: "/temp/todas-noticias/IMAGE-5.png",
    title: "Lorem ipsum dolor sit amet Et enim officiis",
    paragraph:
      "Lorem ipsum dolor sit amet. Ea atque porro est consectetur obcaecati ut debitis corporis qui quisquam Quis sit recusandae consequatur vel alias repudiandae et voluptate rerum.",
    type: "Educação",
  },
  {
    id: 9,
    image: "/temp/todas-noticias/IMAGE-5.png",
    title: "Lorem ipsum dolor sit amet Et enim officiis",
    paragraph:
      "Lorem ipsum dolor sit amet. Ea atque porro est consectetur obcaecati ut debitis corporis qui quisquam Quis sit recusandae consequatur vel alias repudiandae et voluptate rerum.",
    type: "Educação",
  },
  {
    id: 10,
    image: "/temp/todas-noticias/IMAGE-5.png",
    title: "Lorem ipsum dolor sit amet Et enim officiis",
    paragraph:
      "Lorem ipsum dolor sit amet. Ea atque porro est consectetur obcaecati ut debitis corporis qui quisquam Quis sit recusandae consequatur vel alias repudiandae et voluptate rerum.",
    type: "Educação",
  },
];

export default async function Home() {
  return (
    <section className="flex flex-col justify-center items-center gap-[6rem]">
      <BannerMainHome />
      <BannerDailyNews items={sliderItemsTemp} />
      <BannerNewsOfTheWeek />
      <BannerVideo channelId="UCFD3IzM35ebndfZ2zS5bt8g" />
      <BannerCarouselNews items={sliderItemsTemp} />
    </section>
  );
}
