type IconProps = {
  icon: string;
  customClass?: string;
};

const Icon: React.FC<IconProps> = ({ icon, customClass }) => {
  return (
    <span className={`material-symbols-outlined ${customClass}`}>{icon}</span>
  );
};

export default Icon;
