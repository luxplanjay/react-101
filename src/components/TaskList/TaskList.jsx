import Task from '../Task/Task';
import css from './TaskList.module.css';

export default function TaskList() {
  const tasks = [];

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
