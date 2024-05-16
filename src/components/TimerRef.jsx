import { useEffect, useRef, useState } from "react";

/**
 * Подвійне монтування і запуск інтервала
 * Очистка інтевала у ефекті
 * Очистка інтевала поза ефектом через ref
 */

const Timer = () => {
  const [clicks, setClicks] = useState(0);
  const intervalIdRef = useRef();

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      console.log(Date.now());
    }, 1000);
    console.log("useEffect", intervalIdRef.current);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  const handleStop = () => {
    console.log("handleStop ", intervalIdRef.current);
    clearInterval(intervalIdRef.current);
  };

  return (
    <div>
      <p>Timer</p>
      <button onClick={handleStop}>Stop interval</button>
      <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
    </div>
  );
};

export default function TimerWrapper() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <Timer />}
    </div>
  );
}
