import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../TaskList/TaskList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import TaskForm from "../TaskForm/TaskForm";
import TextFilter from "../TextFilter/TextFilter";
import { fetchTasks } from "../../redux/tasksOps";
import { selectError, selectLoading } from "../../redux/tasksSlice";
import css from "./App.module.css";
import TaskCounter from "../TaskCounter/TaskCounter";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <main className={css.container}>
      <h1>HTTP requests with Redux</h1>
      <TaskCounter />
      <TaskForm />
      <TextFilter />
      {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
      <TaskList />
    </main>
  );
}
