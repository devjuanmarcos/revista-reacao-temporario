import Image from "next/image";

interface ImageData {
  id: number;
  image: string;
  desc: string;
}

const RoundedImages = () => {
  const getRandomColorClass = () => {
    const colors = ["border-red-500", "border-blue-500", "border-green-500", "border-yellow-500", "border-purple-500"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  return (
    <div className="flex items-start gap-[4.25rem] flex-wrap justify-center">
      {data.map(({ id, image, desc }) => (
        <div key={id} className="w-[8.4375rem] flex flex-col gap-2 justify-center cursor-pointer">
          <div className={`rounded-full border ${getRandomColorClass()} p-1`}>
            <Image
              src={image}
              alt={desc}
              sizes={"30px"}
              width={200}
              height={200}
              className="w-full h-full max-h-[8.4375rem] object-cover rounded-full"
            />
          </div>
          <p className="font-openSans text-black text-base font-normal text-center">{desc}</p>
        </div>
      ))}
    </div>
  );
};

const data: ImageData[] = [
  {
    id: 1,
    image: "/temp/noticias-recentes/Ellipse 6.svg",
    desc: "Autoconhecimento e Hipnose",
  },
  {
    id: 2,
    image: "/temp/noticias-recentes/Ellipse 7.svg",
    desc: "PET Trampolim – Programa Educação para o Trabalho",
  },
  {
    id: 3,
    image: "/temp/noticias-recentes/Ellipse 8.svg",
    desc: "Site da Ecourbis está acessível a pessoas com deficiência ",
  },
  {
    id: 4,
    image: "/temp/noticias-recentes/Ellipse 9.svg",
    desc: "Direito à meia entrada no Cristo Redentor no RJ ",
  },
  {
    id: 5,
    image: "/temp/noticias-recentes/Ellipse 10.svg",
    desc: "Cães sociáveis de companhia para crianças PcD ",
  },
  {
    id: 6,
    image: "/temp/noticias-recentes/Ellipse 12.svg",
    desc: "Guia Prático: Escolhendo o Imóvel Ideal para Idosos ",
  },
];

export { RoundedImages, data };
