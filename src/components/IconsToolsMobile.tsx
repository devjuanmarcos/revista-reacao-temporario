import Icon from "@mdi/react";

export default function IconsToolsMobile(props: any) {
  return (
    <a
      onClick={props.onClick}
      className="bg-white p-2 rounded cursor-pointer hover:bg-gray300"
    >
      <Icon path={props.path} size={0.7} className="text-gray600" />
    </a>
  );
}
