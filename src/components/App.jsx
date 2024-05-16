// import UseMemoExample from "./UseMemoExample";
// import RefBasics from "./RefBasics";
// import RefExample from "./RefExample";
// import Player from "./Player";
// import TimerRef from "./TimerRef";
import { useContext } from "react";
import LangSwitcher from "./LangSwitcher";
import { langContext } from "../lang-ctx";

export default function App() {
  const langCtx = useContext(langContext);
  console.log(langCtx);

  return (
    <div>
      {/* <UseMemoExample /> */}
      {/* <RefBasics /> */}
      {/* <RefExample /> */}
      {/* <Player /> */}
      {/* <TimerRef /> */}

      <LangSwitcher />
      <p>Selected lang: {langCtx.lang}</p>
    </div>
  );
}
