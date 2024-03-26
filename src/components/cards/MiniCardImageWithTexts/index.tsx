import Image from "next/image";
import Link from "next/link";

interface MiniCardImageWithTextProps {
  image: string;
}

export const MiniCardImageWithText = ({ image }: MiniCardImageWithTextProps) => {
  return (
    <div className="flex gap-[1.1612rem] w-full max-w-[24.5rem] h-full py-4 px-[.6844rem] bg-rev-cards-branco-100 items-center justify-center rounded-md">
      <div className="relative w-full max-w-[6.5981rem] h-full  items-center rounded-md overflow-hidden ">
        <Image src={image} alt="alt temp" className="w-full h-full object-cover " width={100} height={100} />
      </div>
      <div className="flex flex-col justify-between items-start gap-3">
        <span className="font-sarabun font-medium text-[1.375rem] text-rev-cinza-200">Lorem ipsum dolor sit amet.</span>
        <p className="font-sarabun text-sm font-normal text-rev-cinza-200">
          Lorem ipsum dolor sit amet. Et enim officiis qui dolores suscipit ut vero voluptatem.
        </p>

        <Link href={"/noticias/noticia"}>
          <span className="font-sarabun text-[$256B79] underline">Saiba Mais</span>
        </Link>
      </div>
    </div>
  );
};
