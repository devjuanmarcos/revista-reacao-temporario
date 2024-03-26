import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  image: string;
  title?: string;
  type?: string;
  paragraph?: string;
  linkText?: string;
  minWidth?: string;
  maxWidth?: string;
  heigth?: string;
  backgroundCard?: string;
}

export const NewsCard = ({
  image,
  title,
  type,
  paragraph,
  linkText,
  minWidth,
  maxWidth,
  heigth,
  backgroundCard,
}: NewsCardProps) => {
  return (
    <div className={`flex pb-5 ${backgroundCard ?? "bg-rev-cards-branco-100"} justify-center items-center rounded-lg`}>
      <div className="flex gap-5 flex-col w-full justify-start items-start">
        <div
          className={`relative w-full rounded-t-lg  ${minWidth ?? "min-w-[16.875rem]"} ${
            maxWidth ?? "max-w-[23.125rem]"
          } ${heigth ?? "h-[14.125rem]"}  
          overflow-hidden  `}
        >
          <Image
            src={image}
            alt="foto do evento de tecnologia na região serrana"
            fill
            className="w-full h-full max-h-[21.375rem] object-cover"
          />
        </div>
        <div
          className={`flex flex-col gap-3 items-start justify-start w-full  px-5 ${minWidth ?? "min-w-[16.875rem]"} ${
            maxWidth ?? "max-w-[23.125rem]"
          }`}
        >
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-1">
              <span className="text-rev-azul-100 text-sm">{type}</span>
              <span className="text-[1.375rem] text-rev-cinza-200 font-medium font-sarabun leading-none ">{title}</span>
            </div>
          </div>

          <p className=" flex text-rev-cinza-200 font-sarabun text-base tracking-[2%] leading-6">{paragraph}</p>

          {linkText && (
            <Link href={""} className="flex text-base text-rev-brand-text-400 font-normal leading-normal underline">
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
