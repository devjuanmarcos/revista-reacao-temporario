export interface TextProps {
  title: string;
  color?: string;
}

export const H1RegularSecao = ({ title, color }: TextProps) => {
  return (
    <p className={`uppercase ${color ?? "text-rev-cinza-200"}`} style={{ fontSize: "22px", letterSpacing: "0.2em" }}>
      {title}
    </p>
  );
};
