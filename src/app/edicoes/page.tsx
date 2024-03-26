import { BannerEdicoesPDF } from "@/components/banners/BannerEdicoesPDF";
import { BannerMainEditions } from "@/components/banners/BannerEditions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revista Reação - Edições",
  description: "Página de edições da Revista Reação.",
};

export default async function Editions() {
  return (
    <section className="flex flex-col justify-center items-center gap-[6rem] w-full">
      <BannerMainEditions />
      <BannerEdicoesPDF />
    </section>
  );
}
