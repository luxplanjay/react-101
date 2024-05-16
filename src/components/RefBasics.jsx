/**
 * - Створення та ініціалізація
 * - Життєвий цикл рефа
 * - Відсутність реактивності
 */

import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function RefBasics() {
  const [clicks, setClicks] = useState(0);
  const value = useRef(0);

  const handleUdpateValue = () => {
    value.current += 1;
    console.log("value ", value);
  };

  const handleUpdateClicks = () => {
    setClicks(clicks + 1);
    console.log("value ", value);
  };

  return (
    <div>
      <p>Ref basics</p>
      <button onClick={handleUdpateValue}>Update value {value.current}</button>
      <button onClick={handleUpdateClicks}>Clicks {clicks}</button>
    </div>
  );
}
