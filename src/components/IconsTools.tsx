import Icon from "@mdi/react";

export default function IconsTools(props: any) {
  return (
    <a onClick={props.onClick}>
      <Icon
        path={props.path}
        size={1}
        className="cursor-pointer text-gray600 dark:text-white"
      />
    </a>
  );
}
