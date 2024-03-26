"use client";

import { useRef, useState } from "react";
import { NavButton } from "./navButton";

interface SearchWithFilterProps {
  itemsBar?: boolean;
}

export const SearchWithFilter = ({ itemsBar }: SearchWithFilterProps) => {
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDown, setIsDown] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scrolling speed
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="flex flex-col gap-[2.3125rem] w-full mt-[3.75rem] ">
      <form className="flex items-center">
        <label htmlFor="voice-search" className="sr-only">
          Pesquisar
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-rev-brand-100 text-rev-cinza-200 font-lato text-base font-medium rounded-[1.125rem] block w-full pl-10 p-2.5  placeholder:text-rev-cinza-200 h-[3.5rem]"
            placeholder="Pesquisar"
            required
          />
          <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>
      {itemsBar && (
        <div
          className="flex items-center overflow-x-auto no-scrollbar w-full"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-4 select-none w-max">
            <NavButton text="Todas as notícias" />
            <NavButton text="Acessibilidade" />
            <NavButton text="Cultura" />
            <NavButton text="Eventos" />
            <NavButton text="Esportes" />
            <NavButton text="Entrevistas" />
            <NavButton text="Justícia e Política" />
            <NavButton text="Tecnologias" />
            <NavButton text="Saúde" />
            <NavButton text="Test Drive" />
            <NavButton text="Internacional" />
            <NavButton text="Trabalho" />
          </div>
        </div>
      )}
    </div>
  );
};
