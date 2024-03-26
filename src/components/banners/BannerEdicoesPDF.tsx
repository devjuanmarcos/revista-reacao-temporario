import { MiniCardPDFEdition } from "@/components/cards/MiniCardPDFEdition";

export const BannerEdicoesPDF = () => {
  return (
    <section className="w-full grid grid-cols-2 gap-x-[1.3125rem] gap-y-[4.5rem] max-sm:gap-y-[12.5rem] max-xl:grid-cols-1 mt-[3.3125rem]">
      <MiniCardPDFEdition />
      <MiniCardPDFEdition />
      <MiniCardPDFEdition />
      <MiniCardPDFEdition />
      <MiniCardPDFEdition />
      <MiniCardPDFEdition />
      <MiniCardPDFEdition />
      <MiniCardPDFEdition />
    </section>
  );
};
