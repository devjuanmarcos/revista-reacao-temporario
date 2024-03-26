"use client";

import { fontSize } from "@/utils/fontSize";
import { useTheme } from "next-themes";
import { useHtmlFontSize } from "@/context/HtmlFontSizeContext";
import {
  mdiMoonWaningCrescent,
  mdiWhiteBalanceSunny,
  mdiFormatFontSizeIncrease,
  mdiFormatFontSizeDecrease,
  mdiWater,
  mdiVolumeHigh,
  mdiCursorDefault,
  mdiLoupe,
  mdiFormatLetterCase,
  mdiContrastCircle,
} from "@mdi/js";
import IconsImg from "./IconsImg";
import IconsTools from "./IconsTools";

export default function BarTools() {
  const { setHtmlFontSize } = useHtmlFontSize();
  const { setTheme } = useTheme();

  return (
    <div className="bg-rev-cinza-80 md:flex justify-between px-6 py-4 gap-4 dark:bg-rev-cinza-300 hidden fixed w-full z-50">
      <div className="flex items-center gap-4">
        <IconsTools onClick={() => setTheme("dark")} path={mdiMoonWaningCrescent} />
        <IconsTools onClick={() => setTheme("light")} path={mdiWhiteBalanceSunny} />
        <IconsTools onClick={() => setTheme("contrast")} path={mdiContrastCircle} />
        <IconsTools onClick={() => setTheme("monochrome")} path={mdiWater} />
        <IconsTools onClick={() => fontSize.increase(setHtmlFontSize)} path={mdiFormatFontSizeIncrease} />
        <IconsTools onClick={() => fontSize.normalize(setHtmlFontSize)} path={mdiFormatLetterCase} />
        <IconsTools onClick={() => fontSize.decrease(setHtmlFontSize)} path={mdiFormatFontSizeDecrease} />
        <IconsTools path={mdiVolumeHigh} />
        <IconsTools path={mdiCursorDefault} />
        <IconsTools path={mdiLoupe} />
      </div>
      <div className="flex items-center gap-4">
        <IconsImg href="#" target="_blank" src="/instagram.svg" srcDark="/instagram_white.svg" alt="Instagram Biomob" />
        <IconsImg href="#" target="_blank" src="/linkedin.svg" srcDark="/linkedin_white.svg" alt="Linkedin Biomob" />
        <IconsImg href="#" target="_blank" src="/facebook.svg" srcDark="/facebook_white.svg" alt="Facebook Biomob" />
        <IconsImg href="#" target="_blank" src="/x.svg" srcDark="/x_white.svg" alt="X Biomob" />
        <IconsImg href="#" target="_blank" src="/youtube.svg" srcDark="/youtube_white.svg" alt="Youtube Biomob" />
        <div className="text-base flex flex-nowrap dark:text-white gap-4">
          <p>|</p>
          <p className="text-nowrap">BAIXE O APP</p>
        </div>

        <IconsImg
          href="#"
          target="_blank"
          src="/google-play.svg"
          srcDark="/google-play_white.svg"
          alt="Baixar aplicativo Biomob no Google Play"
        />
        <IconsImg
          href="#"
          target="_blank"
          src="/apple.svg"
          srcDark="/apple_white.svg"
          alt="Baixar aplicativo Biomob na App Store"
        />
      </div>
    </div>
  );
}
