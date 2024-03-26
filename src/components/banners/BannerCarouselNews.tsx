"use client";

import { Title } from "@/components/TitleWithParagraph";
import Slider3DCoverflowEffect from "@/components/carousels/Slider3DCoverflowEffect";
import FiltroEvento from "@/components/filters/FiltroModalidade";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

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

export const BannerCarouselNews: React.FC<Items> = ({ items }) => {
  const uniqueModalidades = (items: CardItemsProps[]) => {
    return Array.from(new Set(items.map((item) => item.type)));
  };
  const [filterModalidades, setFilterModalidades] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleApplyFilters = (type: string[]) => {
    setFilterModalidades(type);
  };

  const filteredCards = items
    .filter((item) => filterModalidades.length === 0 || filterModalidades.includes(item.type))
    .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section className="w-full flex flex-col gap-8">
      <Title line={false} title="TODAS AS NOTÍCIAS" />
      <div className="flex justify-between items-center gap-5 w-full max-lg:flex-col-reverse border-b-[1px] border-rev-cinza-200 pb-2">
        <FiltroEvento modalidades={uniqueModalidades(items)} onApplyFilters={handleApplyFilters} />
        <div className="relative w-[170px] max-w-72 max-md:max-w-full flex items-center rounded-full pr-1">
          <input
            type="text"
            placeholder="Pesquisar notícias"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="py-1 px-2 bg-none border-none rounded-full placeholder:text-rev-cinza-200 text-rev-cinza-200 w-full pl-8"
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-rev-brand-text-200  pr-1">
            <FiSearch />
          </div>
        </div>
      </div>
      <Slider3DCoverflowEffect items={filteredCards} />
    </section>
  );
};
