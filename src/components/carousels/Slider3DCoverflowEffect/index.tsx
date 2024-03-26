"use client";

import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NewsCard } from "@/components/cards/NewsCard";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export interface CardItemsProps {
  title: string;
  paragraph: string;
  type: string;
  id: number;
  image: string;
}

export interface cards {
  items: CardItemsProps[];
}

function Slider3DCoverflowEffect({ items }: cards) {
  const router = useRouter();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="containerSwiper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: `.swiper-button-nextss`,
          prevEl: `.swiper-button-prevss`,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {items.map((item) => (
          <SwiperSlide onClick={() => router.push("/card")} className="swiper-slide" key={item.id}>
            <NewsCard
              image={item.image}
              title={item.title}
              key={item.id}
              paragraph={item.paragraph}
              linkText={"Saiba mais"}
              type={item.type}
            />
          </SwiperSlide>
        ))}

        <div className="w-full h-full flex justify-center gap-20 pt-4">
          <button ref={prevRef} className="swiper-button-prevss border-rev-preto-100" aria-label="1">
            {<IoIosArrowDropleft size={40} color="rgb(var(--rev-brand-text-400))" />}
          </button>
          <button ref={nextRef} className="swiper-button-nextss border-rev-preto-100" aria-label="2">
            {<IoIosArrowDropright size={40} color="rgb(var(--rev-brand-text-400))" />}
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider3DCoverflowEffect;
