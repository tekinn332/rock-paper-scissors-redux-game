// store.js

import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './createslicepage';

const store = configureStore({
  reducer: {
  
    game: gameReducer,
  },
});

export default store;
