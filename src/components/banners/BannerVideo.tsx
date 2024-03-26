"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchLatestVideo } from "@/utils/fetchLatestVideo";
import { Title, TitleWithParagraph } from "@/components/TitleWithParagraph";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";

interface VideoCardProps {
  channelId: string;
}

export const BannerVideo: React.FC<VideoCardProps> = ({ channelId }) => {
  const [latestVideo, setLatestVideo] = useState<{ videoId: string; thumbnailUrl: string; title: string } | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY as string;

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const { videoId, thumbnailUrl, title } = await fetchLatestVideo(channelId, apiKey);
        setLatestVideo({ videoId, thumbnailUrl, title });
      } catch (error) {
        console.error("Error fetching latest video:", error);
      }
    };

    fetchVideo();
  }, [channelId, apiKey]);

  if (!latestVideo) {
    return (
      <section className="flex w-full h-full flex-col gap-8">
        <div className="">
          <Title line={false} title="BOLETIM DIÁRIO" />
        </div>
        <div className="w-full flex gap-[4.4375rem] max-md:gap-8 justify-between items-center max-md:flex-col ">
          <Link
            href={`https://www.youtube.com/watch?v=UghwHiV5liU&embeds_referring_euri=https%3A%2F%2Frevistareacao.com.br%2F&embeds_referring_origin=https%3A%2F%2Frevistareacao.com.br&source_ve_path=MjM4NTE&feature=emb_title`}
            className="w-full h-[56.25vw] max-h-[22.5rem] flex items-center"
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={"https://i.ytimg.com/vi/UghwHiV5liU/sddefault.jpg"}
                alt={`Video Thumbnail`}
                className="w-full h-full object-cover"
                fill
                sizes="300"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white opacity-75 hover:opacity-100 transition-opacity"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.661 10.48l-6.5-3.75a.5.5 0 0 0-.828.38v7.5a.5.5 0 0 0 .828.38l6.5-3.75a.5.5 0 0 0 0-.76z"
                  />
                </svg>
              </div>
            </div>
          </Link>

          <div className="flex flex-col max-w-[50%] gap-8  max-lg:max-w-[28rem] max-md:min-w-[80vw] w-full ">
            <TitleWithParagraph
              line={false}
              title={"Boletim de Notícias da TV Reação | Segunda Feira, 04 de Março de 2024"}
              paragraph="Além das notícias convencionais, o boletim diário do Reação TV destaca eventos, histórias e realizações da comunidade local e global. Isso inclui cobertura de iniciativas comunitárias, projetos de inclusão, campanhas de conscientização e outras histórias inspiradoras que celebram a diversidade e promovem a igualdade."
            />
            <Button variant="default" size="default" className="w-max">
              <div className="flex gap-3 w-max justify-center items-center">
                <span>Assistir</span>
                <FaLongArrowAltRight color="#fff" />
              </div>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex w-full h-full flex-col gap-8">
      <Title line={false} title="BOLETIM DIÁRIO" />
      <div className="w-full flex gap-[4.4375rem] max-md:gap-8 justify-between items-center max-md:flex-col ">
        <Link
          href={`https://www.youtube.com/watch?v=${latestVideo.videoId}`}
          className="w-full  max-h-[22.5rem] flex items-center"
        >
          <div className="relative w-full h-[56.25vw] max-h-[22.5rem] rounded-lg overflow-hidden shadow-lg cursor-pointer">
            {latestVideo && (
              <Image
                src={latestVideo.thumbnailUrl}
                alt={`Video Thumbnail ${latestVideo.title}`}
                className="w-full h-full object-cover"
                fill
                sizes="300"
              />
            )}

            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white opacity-75 hover:opacity-100 transition-opacity"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.661 10.48l-6.5-3.75a.5.5 0 0 0-.828.38v7.5a.5.5 0 0 0 .828.38l6.5-3.75a.5.5 0 0 0 0-.76z"
                />
              </svg>
            </div>
          </div>
        </Link>

        <div className="flex flex-col max-w-[50%] gap-8  max-lg:max-w-[20rem] max-md:min-w-[80vw] w-full ">
          <TitleWithParagraph
            line={false}
            title={latestVideo.title}
            paragraph="Além das notícias convencionais, o boletim diário do Reação TV destaca eventos, histórias e realizações da comunidade local e global. Isso inclui cobertura de iniciativas comunitárias, projetos de inclusão, campanhas de conscientização e outras histórias inspiradoras que celebram a diversidade e promovem a igualdade."
          />
          <Button variant="default" size="default" className="w-max">
            <div className="flex gap-3 w-max justify-center items-center">
              <span>Assistir</span>
              <FaLongArrowAltRight color="#fff" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};
