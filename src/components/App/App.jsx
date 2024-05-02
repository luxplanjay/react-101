import ClickTracker from "../ClickTracker/ClickTracker";
import { useState } from "react";
import Timer from "../Timer/Timer";
import Reader from "../Reader/Reader";
import css from "./App.module.css";
import articles from "../../articles.json";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.container}>
      <h1>Effects in React</h1>

      <ClickTracker />
      <hr />

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Timer />}
      <hr />

      <Reader articles={articles} />
    </div>
  );
}
