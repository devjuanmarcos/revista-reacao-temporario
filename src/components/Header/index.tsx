"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaNewspaper, FaStar, FaSearch, FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full fixed top-14 left-0 right-0 py-2 px-4 z-50 ${isScrolled ? "bg-rev-brand-100" : ""}`}>
      <div className="flex items-center justify-between flex-wrap py-2 px-[6.25rem] max-lg:px-0 ">
        <div className="flex gap-4 justify-center items-center">
          <Image
            src="/header/Logotipo na revista Reação - RGB.png"
            alt="Logo do Projeto"
            className=" cursor-pointer"
            width={100}
            height={60}
            onClick={() => router.push("/")}
          />
        </div>

        <nav className="flex-wrap gap-[1.625rem] flex">
          <Link
            href={"/edicoes"}
            className="flex max-lg:hidden items-center hover:underline  mr-1  text-black dark:text-rev-cinza-200"
          >
            <FaNewspaper className="w-5 mr-1 text-blue-400" size={14} />
            Revistas
          </Link>
          <Link
            href={"/noticias"}
            className="flex max-lg:hidden items-center hover:underline  mr-1  text-black dark:text-rev-cinza-200"
          >
            <FaStar className="w-5 mr-1 text-blue-400 " size={14} />
            Notícias
          </Link>
          <Link
            href={""}
            className="flex max-lg:hidden items-center hover:underline  mr-1  text-black dark:text-rev-cinza-200"
          >
            <FaSearch className="w-5 mr-1 text-blue-400 " size={14} />
            Pesquisar
          </Link>

          <Button
            variant="normal"
            text={"Entre em contato"}
            type={"submit"}
            width="w-max"
            onClick={() => router.push("/contato")}
          />
          <Link
            href={"/assinatura-revista"}
            className="rounded-md border border-blue-500  h-full py-auto my-auto px-4  text-black dark:text-rev-cinza-200"
          >
            Assinar
          </Link>
        </nav>
      </div>
    </div>
  );
}
