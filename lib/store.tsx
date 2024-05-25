import { configureStore, Middleware } from "@reduxjs/toolkit";
import todoSlice from "./features/todos/todoSlice";
import routeSlice from "./features/routes/routeSlice";
import logger from "redux-logger";
const store = configureStore({
  reducer: {
    todo: todoSlice,
    routes: routeSlice,
  },
  middleware: (getDefaultMiddleware) => {
    // return getDefaultMiddleware().concat(logger);
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
