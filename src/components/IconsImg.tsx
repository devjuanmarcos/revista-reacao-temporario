export default function IconsImg(props: any) {
  return (
    <a href={props.href} target={props.target}>
      <img
        src={props.src}
        alt={props.src}
        className="px-0.5 cursor-pointer flex dark:hidden"
      />
      <img
        src={props.srcDark}
        alt={props.src}
        className="px-0.5 cursor-pointer hidden dark:block"
      />
    </a>
  );
}
