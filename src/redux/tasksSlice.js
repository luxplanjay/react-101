import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./tasksOps";
import { selectTextFilter } from "./filtersSlice";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addTask.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addTask.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.loading = false;
      });
  },
});

export const selectTasks = state => state.tasks.items;

export const selectLoading = state => state.tasks.loading;

export const selectError = state => state.tasks.error;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectTextFilter],
  (tasks, textFilter) => {
    // console.log("selectVisibleTasks", tasks);
    return tasks.filter(task =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);

export const selectTaskCount = createSelector([selectTasks], tasks => {
  // console.log("selectTaskCount");

  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }

      return acc;
    },
    { active: 0, completed: 0 }
  );
});

// export const selectTaskCount = state => {
//   console.log("selectTaskCount");
//   const tasks = selectTasks(state);

// return tasks.reduce(
//   (acc, task) => {
//     if (task.completed) {
//       acc.completed += 1;
//     } else {
//       acc.active += 1;
//     }

//     return acc;
//   },
//   { active: 0, completed: 0 }
// );
// };

// export const selectVisibleTasks = state => {
//   const tasks = selectTasks(state);
//   const textFilter = selectTextFilter(state);

//   return tasks.filter(task =>
//     task.text.toLowerCase().includes(textFilter.toLowerCase())
//   );
// };

export default slice.reducer;
