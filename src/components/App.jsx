import OfficerList from "./OfficerList";
import data from "../officers.json";

export default function App() {
  return (
    <>
      <h1>Available officers</h1>
      <OfficerList officers={data} />
    </>
  );
}
