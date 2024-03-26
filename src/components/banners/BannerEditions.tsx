import { TitleWithParagraph } from "@/components/TitleWithParagraph";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";

export const BannerMainEditions = () => {
  return (
    <section className="flex gap-5 items-start justify-start bg-edition-banenr bg-cover max-sm:bg-none flex-col w-full min-w-[100vw] max-sm:min-w-full mx-[-6.25rem] max-sm:mx-auto h-full max-lg:px-0  py-[5.75rem]">
      <div className="flex flex-col gap-[1.625rem] max-w-[21.5rem] w-full ml-20 max-sm:ml-0 max-sm:max-w-full ">
        <TitleWithParagraph
          title="Encontre sua próxima revista"
          paragraph="Lorem ipsum dolor sit amet. Ad necessitatibus sint et eius voluptas aut doloribus enim sed maxime ratione qui sequi aliquam quo nisi provident. Ea voluptatum totam ea nostrum facilis ut voluptatem atque ut debitis quisquam."
        />
        <button className="w-max">
          <div className="flex gap-3 w-max justify-center items-center">
            <span>Assinar</span>
            <FaLongArrowAltRight color="#fff" />
          </div>
        </button>
      </div>
    </section>
  );
};
