import { BannerMainNews } from "@/components/banners/BannerMainNews";
import { BannerNewsByCategory } from "@/components/banners/BannerNewsByCategory";
import { SearchWithFilter } from "@/components/ui/searchWithFilter";
import React from "react";

export default async function News() {
  return (
    <section className="">
      <BannerMainNews />
      <SearchWithFilter itemsBar />

      <div className="flex flex-col gap-[6rem] mt-[6rem]">
        <BannerNewsByCategory link="/noticias/acessibilidade" />
        <BannerNewsByCategory link="/noticias/cultura" />
        <BannerNewsByCategory link="/noticias/tecnologia" />
      </div>
    </section>
  );
}
