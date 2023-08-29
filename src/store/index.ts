import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, type TypedUseSelectorHook, useSelector } from "react-redux";
import appSlice from "./appSlice.ts";

const store = configureStore({
    reducer: {
      app: appSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false
      });
    }
  });
  
  setupListeners(store.dispatch);
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  export { store };