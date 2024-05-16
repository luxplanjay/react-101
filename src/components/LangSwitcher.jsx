/**
 * Використовує контекст вибору мови,
 * не отримує пропсів.
 */

import { useContext } from "react";
import { langContext } from "../lang-ctx";

export default function LangSwitcher() {
  const langCtx = useContext(langContext);

  return (
    <select
      value={langCtx.lang}
      onChange={(e) => langCtx.changeLang(e.target.value)}
    >
      <option value="uk">UK</option>
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  );
}
