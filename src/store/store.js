import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import basketReducer from './basket/basketSlice';

export default configureStore({
  reducer: {
    counterReducer,
    basketReducer,
  },
});
