import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import rootReducer from './reducers';

const middleware = (getDefaultMiddleware: (option: any) => string | any[]) => [
  ...getDefaultMiddleware({thunk: false, serializableCheck: false}),
];

// const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
