import sprite from "../../images/icons/sprite.svg";
const Icon = ({ onClick, id, fill, size, className, stroke, ...props }) => {
  return (
    <svg
      //   onClick={onClick}
      //   className={`${className || ""}`.trim()}
      //   width={size}
      //   height={size}
      //   {...props}
      // >
      //   <use
      //     xlinkHref={`${sprite}#${id}`}
      //     style={{ fill: fill, stroke: stroke }}
      //   />
      onClick={onClick}
      className={className || ""}
      width={size}
      height={size}
      fill={fill ?? "none"}
      stroke={stroke ?? "currentColor"}
      {...props}
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
