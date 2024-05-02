import { useState, useEffect } from "react";

const getClicks = () => {
  const savedClicks = localStorage.getItem("my-clicks");
  return savedClicks !== null ? JSON.parse(savedClicks) : 0;
};

export default function ClickTracker() {
  const [clicks, setClicks] = useState(getClicks);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    localStorage.setItem("my-clicks", clicks);
  }, [clicks]);

  // useEffect(() => {
  //   console.log("Only on mount");
  // }, []);

  // useEffect(() => {
  //   console.log(clicks);

  //   return () => {
  //     console.log("clicks cleanup");
  //   };
  // }, [clicks]);

  // useEffect(() => {
  //   console.log("date: ", date);
  // }, [date]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      <button onClick={() => setClicks(0)}>Reset</button>
      <button onClick={() => setDate(Date.now())}>Date: {date}</button>
    </div>
  );
}
