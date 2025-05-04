import {configureStore} from '@reduxjs/toolkit';

const store = configureStore(
  {
    reducer: {},
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: {},
    enhancers: [],
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  },
  (preloadedState, {dispatch, getState}) => {
    return {
      dispatch,
      getState,
    };
  },
);
