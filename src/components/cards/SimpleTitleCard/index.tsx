import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export const SimpleTitleCard = () => {
  return (
    <Link
      className="flex gap-3 justify-between items-center border-b-[.0625rem] border-rev-cinza-200"
      href={"/noticias/noticia"}
      target="_blank"
    >
      <span className="font-sarabun text-[1.375rem] w-full max-w-[90%] py-7 tracking-normal leading-tight text-rev-cinza-200">
        Desfile das Campeãs: Inclusão é marca da Escola de Samba Embaixadores da Alegria
      </span>

      <FaLongArrowAltRight className="max-xl:hidden" color="rgb(var(--rev-brand-text-400))" />
    </Link>
  );
};
