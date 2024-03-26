"use client";

import React, { useEffect, useState } from "react";

interface FiltroEventoProps {
  modalidades?: string[];
  onApplyFilters: (modalidades: string[]) => void;
}

const FiltroEvento: React.FC<FiltroEventoProps> = ({ modalidades, onApplyFilters }) => {
  const [filterModalidade, setFilterModalidade] = useState<string | null>("Todas as notícias");

  useEffect(() => {
    setFilterModalidade("Todas as notícias");
  }, []);

  const handleToggleModalidade = (modalidade: string) => {
    if (filterModalidade === modalidade) {
      // Se a modalidade clicada já estiver selecionada, desmarca ela
      setFilterModalidade("Todas as notícias");
    } else {
      // Se não estiver selecionada, atualiza para a nova modalidade clicada
      setFilterModalidade(modalidade);
    }
  };

  useEffect(() => {
    if (filterModalidade === "Todas as notícias") {
      onApplyFilters(modalidades || []);
    } else {
      onApplyFilters([filterModalidade as any]);
    }
  }, [filterModalidade]);

  return (
    <div className="flex flex-wrap gap-5 select-none">
      <span
        className={`cursor-pointer text-[15px] text-rev-cinza-200 ${
          filterModalidade === "Todas as notícias"
            ? " font-bold border-b-[2px] border-rev-brand-text-200 pb-2 mb-[-14px]"
            : ""
        }`}
        onClick={() => handleToggleModalidade("Todas as notícias")}
      >
        Todas as notícias
      </span>
      {modalidades?.map((modalidade) => (
        <span
          key={modalidade}
          className={`cursor-pointer text-[15px] text-rev-cinza-200 ${
            filterModalidade === modalidade ? "font-bold border-b-[2px] border-rev-brand-text-200 pb-2 mb-[-14px]" : ""
          }`}
          onClick={() => handleToggleModalidade(modalidade)}
        >
          {modalidade}
        </span>
      ))}
    </div>
  );
};

export default FiltroEvento;
