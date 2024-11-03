import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import userAuthReducer from "./features/userAuth";
import showSidebarReducer from "./features/showSidebar";
import usersReducer from "./features/users";

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    showSidebar: showSidebarReducer,
    users: usersReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
