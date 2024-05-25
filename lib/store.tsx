import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todos/todoSlice";
import routeSlice from "./features/routes/routeSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    routes: routeSlice,
  },
});

export default store;
