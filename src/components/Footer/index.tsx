"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Isso faz com que a rolagem seja suave
    });
  };

  return (
    <footer className="bg-rev-brand-text-300 mt-20 text-white px-8 py-[3.6812rem] flex  justify-between w-[100vw] min-w-[100vw] max-md:justify-center   relative bottom-0 overflow-hidden max-md:flex-col max-md:gap-12">
      <div className="flex flex-col items-start max-lg:items-center ">
        <div className="max-w-[8.75rem] h-[2.5rem] max-md:max-w-[40%] w-full max-md:h-auto flex items-start max-lg:items-center">
          <Image
            src="/footer/Logo Branca.png"
            alt="Logo do Projeto"
            width={100}
            height={100}
            sizes="2000"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col items-start max-lg:items-center">
          <div className="flex gap-4 mt-4 mb-4">
            <Link
              href="https://www.linkedin.com/company/revistareacao/Linkbout/"
              target="_blank"
              className="text-white"
            >
              <FaLinkedin className="w-9 h-9" />
            </Link>
            <Link href="https://www.youtube.com/@tvreacao5830" target="_blank" className="text-white">
              <FaYoutube className="w-9 h-9" />
            </Link>
            <Link href="https://twitter.com/revista_reacao" target="_blank" className="text-white">
              <FaTwitter className="w-9 h-9" />
            </Link>
            <Link href="https://www.instagram.com/revistareacao/" target="_blank" className="text-white">
              <FaInstagram className="w-9 h-9" />
            </Link>
            <Link href="#https://www.facebook.com/revista.reacao/?locale=pt_BR" target="_blank" className="text-white">
              <FaFacebook className="w-9 h-9" />
            </Link>
          </div>
          <p className="text-start max-lg:text-center max-w-[16.875rem]">
            Lorem ipsum dolor sit amet. In minus voluptatum ea quaerat iure ea ipsam cumque quo dolorem officiis quo{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col max-lg:hidden items-start text-left font-openSans font-bold text-base">
        <Link href={""} className="mb-4 ">
          REVISTA
        </Link>
        <Link href={""} className="mb-4 ">
          MAIS ACESSADAS
        </Link>
        <Link href={""} className="">
          ASSINAR
        </Link>
      </div>

      <div className="flex flex-col max-lg:hidden items-start text-left">
        <h4 className="mb-2  font-openSans font-bold text-base ">CATEGORIAS</h4>
        <Link href={""} className="mb-4 ">
          Acessibilidade
        </Link>
        <Link href={""} className="mb-4 ">
          Cultura
        </Link>
        <Link href={""} className="mb-4 ">
          Educação
        </Link>
        <Link href={""} className="mb-4 ">
          Acontecimentos
        </Link>
        <Link href={""} className="">
          Ciência
        </Link>
      </div>

      <div className="flex flex-col items-start gap-8 max-w-[20rem] max-md:items-center w-full max-md:max-w-full">
        <div className="flex flex-col gap-3 max-md:text-center">
          <span className=" font-bold ">Quer receber nossas últimas notícias?</span>
          <p className=" ">Saiba em primeira mão tudo o que acontece na Revista Reação.</p>
        </div>
        <button className=" rounded-full bg-white py-2 px-2 text-black">Inscreva-se</button>
        <button onClick={scrollToTop} className=" rounded-md mb-2 flex items-center">
          <MdArrowUpward className="w-6 h-6   " />
          Voltar ao Topo
        </button>
      </div>
    </footer>
  );
}
