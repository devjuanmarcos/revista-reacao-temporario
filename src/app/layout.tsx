import type { Metadata, Viewport } from "next";
import { Open_Sans, Lato, Sarabun } from "next/font/google";
import "./globals.css";
import { HtmlFontSizeProvider } from "@/context/HtmlFontSizeContext";
import { ThemeProvider } from "@/providers/ThemeProvider";
import BarTools from "@/components/BarTools";
import BarToolsMobile from "@/components/BarToolsMobile";
import { WindowSizeProvider } from "@/context/WindowSizeContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});
const sarabun = Sarabun({
  subsets: ["latin"],
  variable: "--font-sarabun",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "My Awesome PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: "Revista Reação",
    template: APP_TITLE_TEMPLATE,
  },
  description: "Educação inclusiva",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "rgb(var(--rev-revista-background))",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      className="transition-all h-full w-full scrollbar-thin scrollbar-webkit "
      suppressHydrationWarning
      lang="pt-BR"
    >
      <body className={`${openSans.variable} ${lato.variable} ${sarabun.variable}`}>
        <WindowSizeProvider>
          <HtmlFontSizeProvider>
            <ThemeProvider defaultTheme="light" enableSystem={false}>
              <BarTools />
              <BarToolsMobile />
              <Header />
              <main className="pt-[9rem] bg-gray300 dark:bg-gray700">{children}</main>
              <Footer />
            </ThemeProvider>
          </HtmlFontSizeProvider>
        </WindowSizeProvider>
      </body>
    </html>
  );
}
