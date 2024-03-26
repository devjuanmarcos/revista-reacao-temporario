export interface SimpleTextProps {
  title?: string;
  paragraph?: string;
  line?: boolean;
  fontWeight?: string;
  fontSize?: string;
  font?: string;
}

export const Title = ({ title, line, fontWeight, fontSize, font }: SimpleTextProps) => {
  return (
    <div className="flex gap-3 items-center">
      {line && <div className={`w-[5.4375rem] h-[0.025rem] bg-rev-azul-200 mt-3 `} />}
      <span
        className={`w-full ${fontSize ?? "text-[2.375rem]"} ${font ?? "font-sarabun"} my-[-4px]  ${
          fontWeight ?? "font-bold"
        } tracking-tighter text-rev-cinza-200 leading-10 `}
      >
        {title}
      </span>
    </div>
  );
};

export const Paragraph = ({ paragraph }: SimpleTextProps) => {
  return <p className={`w-full max-w-[37rem] text-base text-rev-cinza-200 font-normal font-sarabun`}>{paragraph}</p>;
};

export const TitleWithParagraph = ({ title, paragraph, font, fontSize, fontWeight, line }: SimpleTextProps) => {
  return (
    <div className="flex flex-col gap-[1.25rem]">
      <Title title={title} font={font} fontSize={fontSize} fontWeight={fontWeight} line={line} />
      <Paragraph paragraph={paragraph} />
    </div>
  );
};
