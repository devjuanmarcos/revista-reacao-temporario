"use client";

import React, { useEffect, useState } from "react";
import { fontSize } from "@/utils/fontSize";
import { useTheme } from "next-themes";
import { useHtmlFontSize } from "@/context/HtmlFontSizeContext";
import {
  mdiWhiteBalanceSunny,
  mdiFormatFontSizeIncrease,
  mdiFormatFontSizeDecrease,
  mdiMenu,
  mdiFormatLetterCase,
  mdiMoonWaningCrescent,
} from "@mdi/js";
import IconsToolsMobile from "./IconsToolsMobile";

interface BarToolsMobileProps {}

const BarToolsMobile: React.FC<BarToolsMobileProps> = () => {
  const { setHtmlFontSize } = useHtmlFontSize();
  const { setTheme, theme } = useTheme();

  const [currentThemeIcon, setCurrentThemeIcon] = useState<string>(
    theme === "dark" ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent
  );

  useEffect(() => {
    setCurrentThemeIcon(theme === "dark" ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCurrentThemeIcon(newTheme === "dark" ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent);
  };

  return (
    <div className="bg-rev-cinza-80 flex justify-center px-10 py-3 dark:bg-rev-cinza-300 md:hidden fixed w-full z-50">
      <div className="flex justify-between w-full max-w-xs">
        {/* <IconsToolsMobile path={mdiMenu} /> */}
        <IconsToolsMobile onClick={toggleTheme} path={currentThemeIcon} />
        <IconsToolsMobile onClick={() => fontSize.increase(setHtmlFontSize)} path={mdiFormatFontSizeIncrease} />
        <IconsToolsMobile onClick={() => fontSize.normalize(setHtmlFontSize)} path={mdiFormatLetterCase} />
        <IconsToolsMobile onClick={() => fontSize.decrease(setHtmlFontSize)} path={mdiFormatFontSizeDecrease} />
      </div>
    </div>
  );
};
export default BarToolsMobile;
