type IconProps = {
  icon: string;
  id?: string;
  customClass?: string;
};

export default function Icon(props: IconProps) {
  return (
    <span
      id={props.id || "chat-icon"}
      className={`material-symbols-outlined chat-icon ${props.customClass}`}
    >
      {props.icon}
    </span>
  );
}
