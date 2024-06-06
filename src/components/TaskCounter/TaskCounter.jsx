import { useSelector } from "react-redux";
import { selectTaskCount } from "../../redux/tasksSlice";

export default function TaskCounter() {
  const count = useSelector(selectTaskCount);

  return (
    <div>
      TaskCounter | <span>Active: {count.active}</span> |{" "}
      <span>Completed: {count.completed}</span>
    </div>
  );
}
