import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";

const myMiddleware1 = store => next => action => {
  // console.log("myMiddleware1", action, store);
  next(action);
};

const myMiddleware2 = store => next => action => {
  // console.log("myMiddleware2", action, store);
  next(action);
};

const gaMiddleware = store => next => action => {
  if (action.meta?.ga) {
    console.log("send");
    // GA.send(action)
  }

  next(action);
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware => {
    return [
      ...getDefaultMiddleware(),
      myMiddleware1,
      myMiddleware2,
      gaMiddleware,
    ];
  },
});
