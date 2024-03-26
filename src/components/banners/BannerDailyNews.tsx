"use client";

import { Title } from "@/components/TitleWithParagraph";
import { Slider3DOne } from "@/components/carousels/Slider3DOne";
import { useState } from "react";

interface CardItemsProps {
  title: string;
  paragraph: string;
  type: string;
  id: number;
  image: string;
}

interface Items {
  items: CardItemsProps[];
}

export const BannerDailyNews: React.FC<Items> = ({ items }) => {
  return (
    <section className="w-full flex flex-col gap-8 bg-rev-brand-100 p-5 rounded-lg ">
      <div className="pt-[.8125rem]">
        <Title line={false} title="NOTÍCIAS DO DIA" />
      </div>
      <Slider3DOne items={items} />
    </section>
  );
};
