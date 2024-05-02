import { useEffect } from "react";

// Mount > Unmount > Mount

export default function Timer() {
  useEffect(() => {
    console.log("setInterval");
    const id = setInterval(() => {
      console.log(Date.now());
    }, 1000);

    return () => {
      console.log("cleanup");
      clearInterval(id);
    };
  }, []);

  return <div>Timer</div>;
}
