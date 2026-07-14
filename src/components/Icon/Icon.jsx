import sprite from "../../images/icons/sprite.svg";
const Icon = ({
  onClick,
  id,
  fill = "none",
  size,
  className,
  stroke = "currentColor",
  ...props
}) => {
  return (
    <svg
      onClick={onClick}
      className={className || ""}
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      {...props}
    >
      <use href={`${sprite}#${id}`} fill={fill} stroke={stroke} />
    </svg>
  );
};

export default Icon;
