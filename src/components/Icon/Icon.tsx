import sprite from "../../assets/sprites.svg";

type IconProps = {
  width: string;
  height: string;
  iconId: string;
};

export const Icon = ({ width, height, iconId }: IconProps) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`${sprite}#${iconId}`} />
    </svg>
  );
};
