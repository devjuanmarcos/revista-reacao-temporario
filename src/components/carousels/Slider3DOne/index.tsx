"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useRouter } from "next/navigation";
import { NewsCard } from "@/components/cards/NewsCard";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export interface CardItemsProps {
  title: string;
  paragraph: string;
  type: string;
  id: number;
  image: string;
}

export interface Cards {
  items: CardItemsProps[];
}

export function Slider3DOne({ items }: Cards) {
  const router = useRouter();
  const [slidesPerView, setSlidesPerView] = useState<number | "auto">(2);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 980) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const divideEmPares = (arr: any[]) => {
    const dividedArray = [];
    for (let i = 0; i < arr.length; i += 2) {
      dividedArray.push(arr.slice(i, i + 2));
    }
    return dividedArray;
  };

  return (
    <div className="max-w-[100vw] my-0 ">
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        loop={false}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: `.swiper-button-nexts`,
          prevEl: `.swiper-button-prevs`,
        }}
        className="swiper_container"
        modules={[Navigation]}
      >
        {slidesPerView == 1 &&
          items.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide w-full min-w-full">
              <NewsCard
                image={item.image}
                title={item.title}
                paragraph={item.paragraph}
                type={item.type}
                minWidth="w-full"
                maxWidth="w-full"
                backgroundCard={""}
              />
            </SwiperSlide>
          ))}
        {slidesPerView == 2 &&
          divideEmPares(items).map((parDeItems, index) => (
            <SwiperSlide key={index} className="swiper-slide w-[100vw] min-w-full">
              <div className="flex">
                {parDeItems.map((item: CardItemsProps) => (
                  <div key={item.id} className="w-1/2 flex justify-around max mx-5 max-sm:mx-[.625rem]">
                    <NewsCard
                      image={item.image}
                      title={item.title}
                      paragraph={item.paragraph}
                      type={item.type}
                      minWidth="w-full"
                      maxWidth="w-full"
                      heigth="h-[21.3125rem]"
                      backgroundCard={""}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="w-full h-full flex justify-center gap-20 pt-4">
        <button ref={prevRef} className="swiper-button-prevs border-rev-preto-100" aria-label="1">
          {<IoIosArrowDropleft size={40} color="rgb(var(--rev-brand-text-400))" />}
        </button>
        <button ref={nextRef} className="swiper-button-nexts border-rev-preto-100" aria-label="2">
          {<IoIosArrowDropright size={40} color="rgb(var(--rev-brand-text-400))" />}
        </button>
      </div>
    </div>
  );
}
