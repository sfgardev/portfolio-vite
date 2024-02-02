import sprite from "../../assets/sprites.svg";

type IconProps = {
  width: string;
  height: string;
  fill?: string;
  iconId: string;
};

export const Icon = ({ width, height, fill, iconId }: IconProps) => {
  return (
    <svg width={width} height={height} fill={fill}>
      <use xlinkHref={`${sprite}#${iconId}`} />
    </svg>
  );
};
