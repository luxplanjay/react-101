import clsx from "clsx";
import css from "./OfficerProfile.module.css";

export default function OfficerProfile({
  officer: { name, age, specialization, status },
}) {
  const containerClass = clsx(
    css.container,
    status === "Active" ? css.active : css.retired
  );

  return (
    <div className={containerClass}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>
        <b>Status:</b> {status === "Active" ? "Is active" : "Is retired"}
      </p>
      <p>Specialization: {specialization}</p>
    </div>
  );
}
