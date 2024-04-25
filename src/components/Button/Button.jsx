import clsx from "clsx";
import css from "./Button.module.css";

export default function Button({
  size = "md",
  type = "button",
  variant,
  children,
}) {
  return (
    <button
      className={clsx(
        css.btn,
        variant === "primary" ? css.primary : css.secondary,
        size === "sm" && css.sizeSm,
        size === "md" && css.sizeMd,
        size === "lg" && css.sizeLg
      )}
      type={type}
    >
      {children}
    </button>
  );
}
